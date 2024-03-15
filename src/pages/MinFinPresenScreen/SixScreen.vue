<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <img style="width:1500px;" src="@/assets/img/fr1.png" alt="">
    
    <div class="visible-button" @click="$router.push({name:'vols'})"></div>
    <div @click="control_gallery(0)" class="visible-button-content position-one"></div>
    <div @click="control_gallery(1)" class="visible-button-content position-two"></div>
    <div @click="control_gallery(2)" class="visible-button-content position-three"></div>
    <div @click="control_gallery(3)" class="visible-button-content position-four"></div>
    <div @click="control_gallery(4)" class="visible-button-content position-five"></div>
    <PictureGallery ref="picture_gallery_ref"></PictureGallery>
  </div>


</template>
<script>
import TitleText from "@/components/TitleText/TitleText.vue";
import DeveloperCard from "@/components/DeveloperCard/DeveloperCard.vue";
import PictureGallery from "@/pages/MinFinPresenScreen/PictureGallery.vue";


export default {
  components: {
    PictureGallery,
    DeveloperCard,
    TitleText,

  },

  data() {
    return {}
  },
  methods:{
    control_gallery(index){
      this.$refs.picture_gallery_ref.open_gallery(index)
    }
  }
}
</script>
<style scoped lang="scss">

.visible-button-content{
  position: absolute;
  width: 60px;
  height: 44px;
  background: transparent;
  border-radius:12px;
  cursor: pointer;
}
.position-one{
  top:55px;
  left: 210px;
}
.position-two{
  top:55px;
  left: 880px;
}
.position-three{
  top:414px;
  left: 220px;
}
.position-four{
  top:414px;
  right: 720px;
}
.position-five{
  bottom:210px;
  left: 210px;
}


.visible-button{
  position: absolute;
  top: 110px;
  left: 226px;
  //background: rgba(134, 201, 255, 0.44);
  width: 320px;
  height: 160px;
  border-radius:12px;
  cursor:pointer;
}
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
