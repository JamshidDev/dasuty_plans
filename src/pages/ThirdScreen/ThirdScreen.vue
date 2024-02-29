<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <TitleText :title="`Дастурчилар Жамоаси`"></TitleText>
    <div class="scroll_container">
      <div class="custom px-2 mb-8 gap-4">
        <DeveloperCard
          :active_card="activeProject ? activeProject === item.id : true"
          :deadline="item.deadline"
          @click="onSelect(item.id)"
          v-for="item in Object.values(projectList)"
          :key="item.id"
          :name="item.title"
          :img-url="`/images/${item.imgUrl}`"
        />
      </div>
      <div class="mx-auto mb-6">
        <DeveloperCard
          name="Boboqulov Jobir"
          desc="Backend Developer (Team Lead)"
          img-url="/images/Boboqulov-Jobir.jpg"
        />
      </div>
      <TransitionGroup
        name="company"
        tag="ul"
        class="content-list relative"
      >
        <li v-for="(item, idx) in computedList" :key="idx" class="col-3 company">
          <DeveloperCard
            :name="item.name"
            :desc="item.position"
            :img-url="`/images/${item.name.replace(/ /g,'-')}.jpg`"
          />
        </li>
      </TransitionGroup>
    </div>
  </div>

</template>
<script setup>
import TitleText from "@/components/TitleText/TitleText.vue";
import DeveloperCard from "@/components/DeveloperCard/DeveloperCard.vue";
import { computed, ref } from "vue";
import { teamList } from "../../data/team.js";
import { projectList } from "../../data/project.js";

const list = ref(teamList)
const activeProject = ref(null)

function onSelect(id) {
  if (activeProject && activeProject.value === id) {
    activeProject.value = null
  } else {
    activeProject.value = id
  }
}

const computedList = computed(() => {
  return activeProject.value ? list.value.filter(item => item.projects.includes(activeProject.value)) : list.value
})

</script>
<style scoped lang="scss">

.custom {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.scroll_container {
  margin-top: 100px;
  padding-top: 20px;
  width: 100%;
  height: 88vh;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px dashed #3f3f3f;

  &::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #0000004d;
    border-radius: 10px;
  }

  /* Handle on hover */
}

.content-list {
  padding: 0;
  list-style: none;
}

.company {
  position: relative;
  width: calc(100% / 4 - 1rem);
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  margin-top: 1rem;
  border-radius: 6px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-origin: top left;
  z-index: 1;

  &-move,
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  &-leave-active {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    transform: translateX(30px)
  }
}
</style>
