<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <TitleText :title="`Дастурчилар Жамоаси`"></TitleText>

    <div class="scroll_container">
      <div class="grid row-gap-2">
        <div class="col-3">
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
        <div class="col-3">
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
        <div class="col-3">
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
        </div> <div class="col-3">
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
        <div class="col-3">
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
        </div> <div class="col-3">
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

        <div class="col-3">
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
        <div class="col-3">
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


        <div class="col-12 p-6 m-6">

        </div>





      </div>

    </div>



  </div>

</template>
<script>
import TitleText from "@/components/TitleText/TitleText.vue";
import DeveloperCard from "@/components/DeveloperCard/DeveloperCard.vue";


export default {
  components: {
    DeveloperCard,
    TitleText,

  },

  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.scroll_container{
  margin-top: 100px;
  padding-top: 20px;
  width:100%;
  height:88vh;
  overflow-y: auto;
  overflow-x: hidden;
  border:1px dashed #3f3f3f;

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
</style>
