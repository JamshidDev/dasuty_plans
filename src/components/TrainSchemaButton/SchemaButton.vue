
<template>
    <div class="schema-button-container shadow-2 px-4 py-2  overflow-hidden">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          @swiper="onSwiper"
      >
        <swiper-slide v-for="item in slideItems" :key="item.id">
          <template v-if="item.id === 2">
            <div class="grid ">
              <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-200">
                <div @click="nextSlide" class="m-0 font-bold text-sm"> Бошқарув тугмалари
                </div>
                <div class="flex gap-2">
                  <div class="surface-100 border-round px-2 cursor-pointer" @click="nextSlide">
                    <i class='bx  bx-chevron-right text-2xl text-500'></i>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="grid">
                  <div class="col-4">
                    <div @click="action_emit('old-train')" class="w-full h-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Олдинги ҳолат
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-4">
                    <div @click="action_emit('new-train')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Ҳозирги ҳолат (1230та)
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-4">
                    <div @click="action_emit('close')" class="w-full h-full flex bg-red-100 gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Ёпиш
                      <i class='bx bx-x text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-12">
                    <div @click="action_emit('route1')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      битта локомотив битта поезд - Қашқадарё - Охунбобоев (161та)
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-12">
                    <div @click="action_emit('route2')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      битта локомотив битта поезд - Қарши - Ўзбекистон (546та)
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-12">
                    <div  @click="action_emit('route3')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      битта локомотив битта поезд - Қумқўрғон - Ўзбекистон (387та)
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-5">
                    <div @click="action_emit('route4')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Навоий - Озодлик (112та)
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-3">
                    <div @click="action_emit('vokzals')" class="h-full w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Вокзаллар
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-4">
                    <div @click="action_emit('optik')" class="h-full w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Оптик тола
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </template>
          <template v-if="item.id === 1">
            <div class="grid ">
              <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-200">
                <div @click="nextSlide" class="m-0 font-bold text-sm">Янги тақдимот
                </div>
                <div class="flex gap-2">
                  <div class="surface-100 border-round px-2 cursor-pointer" @click="prevSlide">
                    <i class='bx  bx-chevron-left text-2xl text-500'></i>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="grid">
                  <div class="col-4">
                    <div @click="action_emit('old-train-three')" class="w-full h-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Ҳозирги ҳолат
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-4">
                    <div @click="action_emit('new-train-three')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Кейинги ҳолат
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-4">
                    <div @click="action_emit('close')" class="w-full h-full flex bg-red-100 gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Ёпиш
                      <i class='bx bx-x text-500 text-2xl'></i>
                    </div>
                  </div>
<!--                  <div class="col-6">-->
<!--                    <div class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">-->
<!--                      Сарагач -> Қўқон-->
<!--                      <i class='bx bx-show text-500 text-2xl'></i>-->
<!--                    </div>-->
<!--                  </div>-->
                  <div class="col-6">
                    <div @click="action_emit('saryagach-xavast')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Сарагач -> Ховас
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-6">
                    <div  @click="action_emit('saryagach-angren')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Сарагач -> Ангрен
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
                  <div class="col-12">
                    <div  @click="action_emit('saryagach-xavast-angren')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                      Умумий муаммолар
                      <i class='bx bx-show text-500 text-2xl'></i>
                    </div>
                  </div>
<!--                  <div class="col-6">-->
<!--                    <div class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">-->
<!--                      Сарагач -> Бекобод-->
<!--                      <i class='bx bx-show text-500 text-2xl'></i>-->
<!--                    </div>-->
<!--                  </div>-->

                </div>
              </div>
            </div>
          </template>
        </swiper-slide>
      </swiper>

    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  name: "SchemaButton",
  data(){
    return{
      swiperInstance: null,
      modules: [Navigation],
      slideItems: [
        { id: 1, title: 'Slayd 1' },
        { id: 2, title: 'Slayd 2' },
        { id: 3, title: 'Slayd 3' }
      ]
    }
  },
  methods:{
    action_emit(param){
      this.$emit("action_draw", param)
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    nextSlide() {
      this.swiperInstance?.slideNext()
    },
    prevSlide() {
      this.swiperInstance?.slidePrev()
    }
  }
}
</script>

<style scoped lang="scss">

.schema-button-container{
  width: 600px;
  height: 320px;
  position: absolute;
  transform-origin: 0 0;
  transform: scale(1) translate(0px, 0px);
  bottom: 10px;
  left: 10px;
  border: 1px solid #d3d3d3;
  z-index: 12;
  background: #ffffff;
  border-radius: 12px;
}
</style>
