

<template>
<div @click.self="close_gallery()" class="gallery_container" v-if="active_img">
  <div class="picture_content shadow-4">
    <img v-if="active_image_index ===0" :src="path1" alt="no-picture">
    <img v-else-if="active_image_index ===1" :src="path2" alt="no-picture">
    <img v-else-if="active_image_index ===2" :src="path3" alt="no-picture">
    <img v-else-if="active_image_index ===3" :src="path4" alt="no-picture">
    <img v-else-if="active_image_index ===4" :src="path5" alt="no-picture">
  </div>
</div>
</template>

<script>
import path1 from "@/assets/img/digit1.png"
import path2 from "@/assets/img/digit2.png"
import path3 from "@/assets/img/digit3.png"
import path4 from "@/assets/img/digit4.png"
import path5 from "@/assets/img/digit5.png"
export default {
  name: "PictureGallery",
  data(){
    return{
      path1,
      path2,
      path3,
      path4,
      path5,
      active_img:false,
      active_image_index:0,
    }
  },
  methods:{
    open_gallery(index){
        this.active_img = true;
        this.active_image_index = index;
    },
    close_gallery(){
      this.active_img = false;
    }
  }
}
</script>
<style scoped lang="scss">


.gallery_container{
  position: fixed;
  width:100%;
  height:100%;
  top:0px;
  left: 0px;
  bottom: 0px;
  background: rgba(12, 14, 16, 0.15);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .picture_content{
    width: 1600px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    animation: ease-out 0.6s scale-animation 1;
    img {
      width: 100%;
    }
  }
}


@keyframes scale-animation {
  0% {
    opacity: 0.3;
    transform:scale(0.2);
  }
  100% {
    opacity: 1;
    transform:scale(1)
  }
}
</style>
