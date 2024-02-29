<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <TitleText :title="`Дастурчилар Жамоаси`"></TitleText>

    <div class="scroll_container">
      <div class="grid row-gap-2 mb-3">
        <div class="col-3" @click="arrayFilter">
          <DeveloperCard></DeveloperCard>
        </div>
        <div class="col-3">
          <DeveloperCard></DeveloperCard>
        </div>
        <div class="col-3">
          <DeveloperCard></DeveloperCard>
        </div>
        <div class="col-3">
          <DeveloperCard></DeveloperCard>
        </div>

        <div class="col-12 my-6">
          <DeveloperCard :active_card="true"></DeveloperCard>
        </div>
      </div>
      <TransitionGroup
        name="company"
        tag="ul"
        class="content-list"
      >
        <div v-for="(item, idx) in list" :key="idx" class="col-3 company">
          <DeveloperCard :name="item.name" />
        </div>
      </TransitionGroup>

    </div>
  </div>

</template>
<script setup>
import TitleText from "@/components/TitleText/TitleText.vue";
import DeveloperCard from "@/components/DeveloperCard/DeveloperCard.vue";
import { ref } from "vue";
import { teamList } from "../../data/team.js";

const list = ref(teamList)

function arrayFilter() {
  list.value = [...list.value.filter((_, idx) => idx % 2 === 0)]
}


</script>
<style scoped lang="scss">
.scroll_container {
  margin-top: 100px;
  padding-top: 20px;
  width: 100%;
  height: 88vh;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px dashed #3f3f3f;

  &::-webkit-scrollbar {
    width: 10px;
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

  &-move {
    transition: all 600ms ease-in-out 50ms
  }

  &-enter-active {
    transition: all 300ms ease-out
  }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter,
  &-leave-to {
    opacity: 0
  }

  &-enter {
    transform: scale(0.9)
  }
}
</style>
