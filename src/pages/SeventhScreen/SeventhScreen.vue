<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <NewMap style="transform:translateX(240px);" ref="new_map_ref"></NewMap>

    <div @click="$refs.new_map_ref.drawPath()" class="btn-circle_box premium_bg flex gap-2 py-2 px-4">
      <i class='bx bx-refresh text-2xl'></i> Restart
    </div>
    <div  class="btn-circle_box2 premium_bg flex gap-2 py-2 px-4">
      <i class='bx bx-refresh text-2xl'></i> <a href="http://192.168.53.20:8080/pvAnalyz/" target="_blank"> Аналитика </a>
    </div>

    <div class="text_card_dark py-4 px-4 bg-yellow-300 border-1 border-yellow-500 shadow-4" style="width:500px; top:80px; right:30px;">
      <span style="font-size: 24px">
        Поездни янги маршрут бўйича етиб бориш вақти
 <span class="text-green-500 font-bold">7-8 сутка</span>
      </span>
    </div>
    <div class="text_card_dark py-4 px-4 bg-yellow-300 border-1 border-yellow-500 shadow-4" style="width:500px; top:200px; right:30px;">
      <span style="font-size: 24px">
        Оралиқ станциялар сони<span class="text-green-500 font-bold"> 6 та</span>
      </span>
    </div>

    <div class="absolute text-6xl text-green-500 font-semibold" style=" top:10px; right:90px;">Ҳозирги ҳолат</div>


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
  cursor: pointer;
  position:absolute;
  bottom: 40px;
  left: 20px;
}
.btn-circle_box2 {
  cursor: pointer;
  position:absolute;
  bottom: 40px;
  left: 200px;
}


.text_card_dark {
  display: flex;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  background: #5191fa;
  transition: all 0.5s ease-in-out;
  transition-property: background, text-shadow;
  backdrop-filter: blur(0.333em);
  border-radius: 6px;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.05em;
  color: white;
}

//.text_card_dark.active {
//  opacity: 1;
//  transform: translateY(0px);
//}


</style>
