<script setup>
import TitleText from "@/components/TitleText/TitleText.vue";
import { onMounted, ref } from "vue";
import CountTime from "../../components/CountTime/CountTime.vue";

const animated = ref(false)
const el = ref(false)
const totalP = ref(65)

const arr1 = [
  { offset: -12, name: 'KPI Тизими', value: 40, rate: 40 },
  { offset: 0, name: 'Молия', value: 80, rate: 50 },
  { offset: 6, name: 'Омборлар', value: 50, rate: 50 },
  { offset: 7.5, name: 'Ижтимоий хизматлар', value: 90, rate: 60 },
  { offset: 5, name: 'Статистика ва хисобга олиш', value: 30, rate: 0 },
  { offset: -2, name: 'Сигналлаштириш ва алока', value: 50, rate: 30 },
  { offset: -16, name: 'Мехнат мухофазаси', value: 15, rate: 15 },
]

const arr2 = [
  { offset: -12, name: 'Юк ташиш хизмати', value: 92, rate: 17 },
  { offset: 0, name: 'Ташиш жараёни', value: 91, rate: 32 },
  { offset: 6, name: 'Йуловчи ташиш ', value: 88, rate: 25 },
  { offset: 7.5, name: 'Локомотив хужалиги', value: 82, rate: 50 },
  { offset: 5, name: 'Йул хужалиги', value: 80, rate: 70 },
  { offset: -2, name: 'Харакат хавфсизлиги ', value: 70, rate: 10 },
  { offset: -16, name: 'Вагон хужалиги', value: 15, rate: 0 },
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
  <div class="w-full min-h-full relative flex flex-column justify-content-center align-items-center mt-0">
    <TitleText :title='`"ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ" АЖДА`' :subtitle="`РАҚАМЛАШТИРИШНИНГ ЖОРИЙ ҲОЛАТИ`" />
    <div class='wrapper'>
      <div class='left-side flex align-items-end flex-column gap-6 mb-8'>
        <div v-for='item in arr1' class='project-item' :style='{right: `${item.offset}%`}'>
          <h4 class='text-right'>{{ item.name }}</h4>
          <div class='relative'>
<!--            <div class='progress-icon progress-icon-left'></div>-->
            <div v-if='item.rate' class='progress-rate progress-rate-right'>
              <span class='symbol'>&#x2191</span>
              <AutoCounter :start-amout='animated ? 0 : item.rate' :end-amount='animated ? item.rate : 0'
                           duration='1' />
              <span>%</span>
            </div>
            <progress-bar
              class='flex-grow-1 custom-progress-bar'
              :class='{primary: item.value > 72, warning: item.value > 56 && item.value < 72, danger: item.value < 56}'
              :value='animated ? item.value : 0'
            />
          </div>
        </div>
      </div>
      <div class='center-side flex justify-content-center align-items-center mb-8' ref='el'>
        <div class='relative'>
          <div class='fake-thumb flex justify-content-center align-items-center' />
          <div v-if='el' class='thumb-container' :style='{zIndex: totalP > 90 ? 15 : 1}'>
            <div class='seconds'
                 :style='{transform: `rotate(${(animated ? totalP * 3.6 : 0)}deg)`, width: `${el.offsetWidth/2 + 44}px`}'>
              <div class='flex justify-content-center align-items-center thumb'
                   :style='{transform: `rotate(-${(animated ? totalP * 3.6 : 0) + (totalP > 49 ? 1 : 1) * 270}deg)`}'>
                {{ totalP }}%
              </div>
            </div>
          </div>
          <circle-progress
            v-if='el'
            border-width='28'
            border-bg-width='28'
            :size='el.offsetWidth'
            :percent="animated ? totalP : 0"
            transition='1000'
            empty-color='#e2e8f0'
            fill-color='#234699'
          />
        </div>
      </div>
      <div class='right-side flex align-items-start flex-column gap-6 mb-8'>
        <div v-for='item in arr2' class='project-item' :style='{left: `${item.offset}%`}'>
          <h4 class='text-left'>{{ item.name }}</h4>
          <div class='relative'>
<!--            <div class='progress-icon progress-icon-right'></div>-->
            <div v-if='item.rate' class='progress-rate progress-rate-left'>
              <span class='symbol'>&#x2191</span>
              <span>{{ item.rate }}</span>
              <span>%</span>
            </div>
            <progress-bar
              class='flex-grow-1 custom-progress-bar'
              :value='animated ? item.value: 0'
              :class='{primary: item.value > 72, warning: item.value > 56 && item.value < 72, danger: item.value < 56}'
            />
          </div>
        </div>
      </div>
    </div>
    <CountTime class='special-countTime'></CountTime>
  </div>

</template>
<style lang="scss">
$blue: #234699;

.special-countTime {
  bottom: -20px !important;

  .button_content {
    color: #fff;
    background-color: $blue;
    border: 0;
  }
}

.progress-rate {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 600;
  color: var(--primary-color);
  display: inline-flex;
  align-items: center;

  &.progress-rate-right {
    left: calc(100% + 8px)
  }

  &.progress-rate-left {
    right: calc(100% + 8px)
  }
}

.progress-icon {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: $blue;
  top: 50%;
  transform: translateY(-50%);

  &.progress-icon-left {
    right: calc(100% + 16px)
  }

  &.progress-icon-right {
    left: calc(100% + 16px)
  }
}

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
  top: 14px;
  background-color: $blue;
  border: 4px solid rgba(142, 170, 244, 0.64);
  border-radius: 50%;
  color: #fff;
  transform: translateY(-50%);
  z-index: 10;
  width: 56px;
  height: 56px;
}

.thumb {
  background-color: $blue;
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
  left: calc(50% - 30px);
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
  padding: 20px 40px 20px
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

  &.primary {
    .p-progressbar-value {
      background-color: var(--primary-500) !important;
    }
  }

  &.warning {
    .p-progressbar-value {
      background-color: var(--yellow-500) !important;
    }
  }

  &.danger {
    .p-progressbar-value {
      background-color: var(--red-500) !important;
    }
  }
}


</style>
