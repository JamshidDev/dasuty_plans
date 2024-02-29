<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <NewMap ref="new_map_ref"></NewMap>

    <div @click="$refs.new_map_ref.drawPath()" class="btn-circle_box flex gap-2">
      <i class='bx bx-refresh text-2xl'></i> Restart
    </div>

    <div class="text_card_dark py-2 px-4" style="width:360px; top:50px; right:30px;">
      <span>
        Поездни янги маршрут бўйича етиб бориш вақти
 <span class="text-green-600 font-semibold">7-8 сутка</span>
      </span>
    </div>
    <div class="text_card_dark py-2 px-4" style="width:360px; top:120px; right:30px;">
      <span>
        Оралиқ станциялар сони<span class="text-green-600 font-semibold"> 6 та</span>
      </span>
    </div>

    <div class="absolute text-6xl text-green-500 font-semibold" style=" top:60px; right:40%;">Ҳозирги ҳолат</div>


  </div>

</template>
<script>
import NewMap from "@/components/NewMap/NewMap.vue";


export default {
  components: {
    NewMap,
  },

  data() {
    return {
      active: false,
    }
  },
}
</script>
<style scoped lang="scss">
$primary: #2700ff;
.btn-circle_box {
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  bottom: 200px;
  left: 100px;
  background: url('http://api.thumbr.io/whitenoise-354x370.png?background=ffffff00&noise=ffffff&density=40&opacity=4'), rgba(white, 0.01);
  transition: 0.5s ease-in-out;
  transition-property: background, text-shadow;
  backdrop-filter: blur(0.333em);
  border-radius: 1em;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.05em;
  color: white;
  box-shadow: inset 0 0.01em 0.4em rgba(227, 222, 255, 0.2), inset 0 0.04em 0.18em rgba(154, 146, 210, 0.3), inset 0 0.98em 1em rgb(24 24 24), inset 0 -0.82em 0.68em -0.64em rgba(96, 68, 144, 0.3), inset 0 0.07em 0.11em -0.04em white, inset 0 0.39em 0.56em -0.36em rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    background: rgba($primary, 0.25);
    text-shadow: 0 0.01em 0.2em rgba(lighten($primary, 32), 1),
    0 0.01em 1em rgba(lighten($primary, 32), 1),;

    &:before {
      transform: translate3d(100%, 0, 0) scale3d(1, 1, 1);
    }
  }
}

.text_card_dark {
  display: flex;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  background: url('http://api.thumbr.io/whitenoise-354x370.png?background=ffffff00&noise=ffffff&density=40&opacity=4'), rgba(white, 0.01);
  transition: all 0.5s ease-in-out;
  transition-property: background, text-shadow;
  backdrop-filter: blur(0.333em);
  border-radius: 6px;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.05em;
  color: white;
  box-shadow: inset 0 0.01em 0.4em rgba(227, 222, 255, 0.2), inset 0 0.04em 0.18em rgba(154, 146, 210, 0.3), inset 0 0.98em 1em rgb(24 24 24), inset 0 -0.82em 0.68em -0.64em rgba(96, 68, 144, 0.3), inset 0 0.07em 0.11em -0.04em white, inset 0 0.39em 0.56em -0.36em rgba(255, 255, 255, 0.5);

  //opacity: 0;
  //transform: translateY(100px);

  &:hover,
  &:focus {
    background: rgba($primary, 0.25);
    text-shadow: 0 0.01em 0.2em rgba(lighten($primary, 32), 1),
    0 0.01em 1em rgba(lighten($primary, 32), 1),;

    &:before {
      transform: translate3d(100%, 0, 0) scale3d(1, 1, 1);
    }
  }
}

//.text_card_dark.active {
//  opacity: 1;
//  transform: translateY(0px);
//}


</style>
