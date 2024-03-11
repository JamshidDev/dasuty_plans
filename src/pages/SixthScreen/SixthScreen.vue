<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <OldMap style="transform:translateX(230px);" ref="old_map_ref"></OldMap>

    <div @click="$refs.old_map_ref.old_draw_train()" class="btn-circle_box premium_bg flex gap-2 py-2 px-4">
      <i class='bx bx-refresh text-2xl'></i> Restart
    </div>

    <div class="text_card_dark py-4 px-4 bg-yellow-300 border-1 border-yellow-500 shadow-4" style="width:500px; top:80px; right:30px;">
      <span style="font-size: 24px">
        Поездни ушбу маршрут бўйича етиб бориш вақти <span class="text-red-500 font-bold">12 сутка</span>
      </span>
    </div>
    <div class="text_card_dark py-4 px-4 bg-yellow-300 border-1 border-yellow-500 shadow-4" style="width:500px; top:200px; right:30px;">
      <span style="font-size: 24px">
        Оралиқ станциялар сони<span class="text-red-500 font-bold"> 10 та</span>
      </span>
    </div>

    <div class="absolute text-6xl text-red-500 font-semibold" style=" top:10px; right:90px;">Аввалги ҳолат</div>


  </div>

</template>
<script>
import OldMap from "@/components/OldMap/OldMap.vue";


export default {
  components: {
    OldMap,
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
  bottom: 150px;
  left: 20px;
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


</style>
