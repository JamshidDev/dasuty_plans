<script setup>
import TitleText from "@/components/TitleText/TitleText.vue";
import { onMounted, ref } from "vue";

const animated = ref(false)
const el = ref(false)
const totalP = ref(70)

const arr1 = [
  { offset: -12, name: 'KPI Тизими', value: 40 },
  { offset: 0, name: 'Молия', value: 80 },
  { offset: 6, name: 'Омборлар', value: 50 },
  { offset: 7.5, name: 'Ижтимоий хизматлар', value: 90 },
  { offset: 5, name: 'Статистика ва хисобга олиш', value: 30 },
  { offset: -2, name: 'Йул хужалиги', value: 50 },
  { offset: -16, name: 'Мехнат мухофазаси', value: 15 },
]

const arr2 = [
  { offset: -12, name: 'Ташиш жараёни', value: 45 },
  { offset: 0, name: 'Йуловчи ташиш', value: 62 },
  { offset: 6, name: 'Харакат хавфсизлиги', value: 43 },
  { offset: 7.5, name: 'Юк ташиш хизмати', value: 50 },
  { offset: 5, name: 'Локомотив хужалиги', value: 80 },
  { offset: -2, name: 'Вагон хужалиги', value: 70 },
  { offset: -16, name: 'Сигналлаштириш ва алока', value: 15 },
]

onMounted(() => {
  setTimeout(() => {
    animated.value = !animated.value
  }, 500)
  setInterval(() => {
    animated.value = false
    setTimeout(() => {
      animated.value = true
    }, 1000)
  }, 8000)
})

</script>

<template>
  <div class="w-full min-h-full relative flex flex-column justify-content-center align-items-center">
    <!--        <img class="shadow-2 border-round" style="width:1700px;" src="@/assets/img/page_3.png" alt="">-->
    <TitleText :title='`"ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ" АЖДА`' :subtitle="`РАҚАМЛАШТИРИШНИНГ ЖОРИЙ ҲОЛАТИ`" />
    <div class='wrapper'>
      <div class='left-side flex align-items-end flex-column gap-6'>
        <div v-for='item in arr1' class='project-item' :style='{right: `${item.offset}%`}'>
          <h4 class='text-right'>{{ item.name }}</h4>
          <div class='flex'>
            <progress-bar class='flex-grow-1 custom-progress-bar' :value='animated ? item.value : 0' />
          </div>
        </div>
      </div>
      <div class='center-side flex justify-content-center align-items-center' ref='el'>
        <div class='relative'>
          <div class='fake-thumb flex justify-content-center align-items-center'></div>
          <div v-if='el' class='thumb-container'>
            <div class='seconds'
                 :style='{transform: `rotate(${(animated ? totalP * 3.6 : 0)}deg)`, width: `${(el.offsetWidth/2) + 40}px`}'>
              <div class='flex justify-content-center align-items-center thumb'
                   :style='{transform: `rotate(-${(animated ? totalP * 3.6 : 0) + (totalP > 49 ? 1 : 1) * 270}deg)`, opacity: animated ? 1 : 0}'>
                {{totalP}}%
              </div>
            </div>
          </div>
          <circle-progress v-if='el' border-width='28' border-bg-width='28' :size='el.offsetWidth'
                           :percent="animated ? totalP : 0" transition='1000' empty-color='#e2e8f0'
                           fill-color='#234699' />
        </div>
      </div>
      <div class='right-side flex align-items-start flex-column gap-6'>
        <div v-for='item in arr2' class='project-item' :style='{left: `${item.offset}%`}'>
          <h4 class='text-left'>{{ item.name }}</h4>
          <div class='flex'>
            <progress-bar class='flex-grow-1 custom-progress-bar' :value='animated ? item.value: 0' />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="scss">

.thumb-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 3;
}

.fake-thumb {
  position: absolute;
  left: calc(50% - 27px);
  top: 15px;
  background-color: #234699;
  border: 4px solid rgba(142, 170, 244, 0.64);
  border-radius: 50%;
  color: #fff;
  transform: translateY(-50%);
  z-index: 10;
  width: 56px;
  height: 56px;
}

.thumb {
  background-color: #234699;
  border: 4px solid rgba(142, 170, 244, 0.64);
  border-radius: 50%;
  color: #fff;
  width: 56px;
  height: 56px;
}

.seconds {
  height: 2px;
  position: absolute;
  top: 50%;
  left: calc(50% - 27px);
  //-webkit-animation: 10s seconds linear infinite;
  //animation: 10s seconds linear infinite;
  transition: all 1s;
  transform-origin: 30px center;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@keyframes seconds {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(90deg);
  }
}


.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 110px;
  margin-bottom: 20px;
  align-items: stretch;
}

.center-side {
  position: relative;

  &::before, &::after {
    content: unset;
    position: absolute;
    width: calc(100% + 40px);
    aspect-ratio: 1/1;
    left: 50%;
    top: 50%;
    border: 5px solid rgba(0, 0, 0, .3);
    display: block;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-sizing: border-box;
  }

  &::after {
    width: calc(100% + 130px);
  }
}

.left-side, .right-side {
  padding: 20px
}

.left-side {
  .p-progressbar-value {
    right: 0
  }
}

.project-item {
  max-width: 70%;
  width: 100%;
  position: relative;

  h4 {
    margin: 0 0 4px
  }
}

.custom-progress-bar {
  height: 28px;
  border-radius: 14px;

  .p-progressbar-value {
    background-color: #234699 !important;
  }
}


</style>
