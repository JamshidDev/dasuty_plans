<script setup>

import PulseAnimation from "../../components/PulseAnimation/PulseAnimation.vue";
import PulseCenter from "../../components/PulseAnimation/PulseCenter.vue";
import { onMounted, onUnmounted, ref } from "vue";
import TitleText from "../../components/TitleText/TitleText.vue";
import { topCompany } from "./top-company.js";
import { userType } from "./user-type.js";

const animated = ref(false)
let timeout = null
const totalP = ref(45)
const op1 = ref(null)
const op2 = ref(null)
const op3 = ref(null)
const op4 = ref(null)
const op5 = ref(null)
const op6 = ref(null)
const op7 = ref(null)

function toggle(event, idx) {
  switch (idx) {
    case 1:
      op1.value.toggle(event)
      break
    case 2:
      op2.value.toggle(event)
      break
    case 3:
      op3.value.toggle(event)
      break
    case 4:
      op4.value.toggle(event)
      break
    case 5:
      op5.value.toggle(event)
      break
    case 6:
      op6.value.toggle(event)
      break
    case 7:
      op7.value.toggle(event)
      break
  }
}


const arr = [
  {

    r: 90, desc: 'SixthPage.stage_1', icon: 'desktop.png'
  },
  { r: 180, desc: 'SixthPage.stage_2', icon: 'credit-card.png' },
  { r: 270, desc: 'SixthPage.stage_3', icon: 'success.png' },
]

onMounted(() => {
  timeout = setTimeout(() => {
    animated.value = !animated.value
  }, 500)
})

onUnmounted(() => {
  clearTimeout(timeout)
})

</script>

<template>
  <div class="w-full wrapper min-h-full flex flex-column justify-content-center align-items-center">
    <OverlayPanel ref='op1'>
      <div class='max-w-20rem'>

        <div class='text-lg font-medium'>{{$t('SixthPage.Option1')}}</div>
        <p class='mb-0'>{{$t('SixthPage.Option1_text')}}</p>
      </div>
    </OverlayPanel>
    <OverlayPanel ref='op2'>
      <div class='max-w-20rem'>

        <div class='text-lg font-medium'>{{$t('SixthPage.Option2')}}</div>
        <p class='mb-0'>{{$t('SixthPage.Option2_text')}}</p>
      </div>
    </OverlayPanel>
    <OverlayPanel ref='op3'>
      <div class='max-w-20rem'>

        <div class='text-lg font-medium'>{{$t('SixthPage.Option6')}}</div>
        <p class='mb-0'>{{$t('SixthPage.Option6_text')}}</p>
      </div>
    </OverlayPanel>
    <OverlayPanel ref='op4'>
      <div class='max-w-20rem'>

        <div class='text-lg font-medium'>{{$t('SixthPage.Option3')}}</div>
        <p class='mb-0'>{{$t('SixthPage.Option3_text')}}</p>
      </div>
    </OverlayPanel>
    <OverlayPanel ref='op5'>
      <div class='max-w-20rem'>

        <div class='text-lg font-medium'>{{$t('SixthPage.Option4')}}</div>
        <p class='mb-0'>{{$t('SixthPage.Option4_text')}}</p>
      </div>
    </OverlayPanel>
    <OverlayPanel ref='op6'>
      <div class='max-w-20rem'>

        <div class='text-lg font-medium'>{{$t('SixthPage.Option5')}}</div>
        <p class='mb-0'>{{$t('SixthPage.Option5_text')}}</p>
      </div>
    </OverlayPanel>
    <OverlayPanel ref='op7'>
      <div class='max-w-20rem overflow-y-auto flex flex-column gap-1 max-h-20rem'>
        <div v-for='item in userType' :key='item.id'>{{item.nameUz || item.userType}}</div>
      </div>
    </OverlayPanel>

    <TitleText class='heading' :title="$t('SixthPage.ThemeTitle')"></TitleText>
    <PulseAnimation class='custom-pulse-animation overflow-visible' />
    <PulseCenter class='pulse'>
      <!--      <MobileDevice />-->
      <div class='relative text'>
        <div class="typing-demo">
          E-NAKL
        </div>
      </div>
      <div class='h-full relative w-full z-5'>
        <img class='oneid absolute cursor-pointer' src='/images/one-id.png' alt='one-id' @click='toggle($event, 5)'>
        <img class='e-imzo absolute cursor-pointer' src='/images/e-imzo.png' alt='e-imzo' @click='toggle($event, 4)'>
        <img class='tax absolute cursor-pointer' src='/images/soliq.png' alt='one-id' @click='toggle($event, 1)'>
        <img class='bank absolute cursor-pointer' src='/images/milliy-bank.png' alt='one-id' @click='toggle($event, 2)'>
        <img class='railway absolute cursor-pointer' src='/images/rail-tariff.png' alt='one-id'
             @click='toggle($event, 3)'>
        <img class='customs absolute cursor-pointer' src='/images/bojxona.png' alt='one-id' @click='toggle($event, 6)'>
      </div>

    </PulseCenter>
    <div class='outline-wrapper'>
      <div class='relative'>
        <div v-for='(item, idx) in arr' :key='item.r' class='thumb-container'>
          <div class='seconds' :style='{transform: `rotate(${item.r}deg)`}'>
            <div class='thumb' :class='`thumb-${idx + 1}`'>
              <img :src='`/images/${item.icon}`' :alt='`icon-${idx}`'>
            </div>
            <div class='absolute box' :class='`box-${idx + 1}`'>
              <h6>{{ `${idx + 1}-` + $t('SixthPage.stage') }}</h6>
              <p>{{ $t(item.desc) }}</p>
            </div>
          </div>
        </div>
        <div style='transform: rotate(100deg)'>
          <circle-progress
            :border-width='10'
            :border-bg-width='10'
            :size='600'
            :percent="animated ? totalP : 0"
            :transition='5000'
            empty-color='#e2e8f0'
            fill-color='#11A832'
          />
        </div>
      </div>
    </div>
    <div class='p-3 border-round-2xl border-3 bg-white flex flex-column gap-2 absolute total-info'
         style='border-color: #11A832;'>
      <div class='text-2xl font-medium flex align-items-center gap-2'>
        <img src='/images/users-success.png' alt='users' />
        <span>

          {{$t('SixthPage.FirstCardOption_1')}} <span style='color:#11A832' class='font-semibold'>20 615</span> {{$t('SecondPage.countLive')}}
        </span>
      </div>
      <div class='text-2xl font-medium flex align-items-center gap-2'>
        <img src='/images/user-type-success.png' alt='user-type' />
        <span>

          {{$t('SixthPage.FirstCardOption_2')}} <span style='color:#11A832' class='font-semibold cursor-pointer' @click='toggle($event, 7)'>97</span>
        </span>
      </div>
      <div class='text-2xl font-medium flex align-items-center gap-2'>
        <img src='/images/client-success.png' alt='client' />
        <span>

          {{$t('SixthPage.FirstCardOption_3')}} <span style='color:#11A832' class='font-semibold'>11 858</span> {{$t('SecondPage.countLive')}}
        </span>
      </div>
    </div>
    <div class='p-3 border-round-2xl border-3 bg-white flex flex-column gap-2 absolute total-info-right'
         style='border-color: #11A832;'>
      <div class='text-2xl font-medium  gap-2 mb-2 text-center w-full'>

        {{$t('SixthPage.SecondCardOption_1')}}
      </div>
      <div class='text-xl font-medium flex align-items-center gap-2'>
        <img width='34' height='34' src='/images/time-success.png' alt='time' />
        <span v-html="$t('SixthPage.SecondCardOption_2')">

        </span>
      </div>
      <div class='text-xl font-medium flex align-items-center gap-2'>
        <img width='34' height='34' src='/images/no-money-success.png' alt='time' />
        <span>

         {{$t('SixthPage.SecondCardOption_3')}}
        </span>
      </div>
      <div class='text-xl font-medium flex align-items-center gap-2'>
        <img width='34' height='34' src='/images/no-document-success.png' alt='time' />
        <span>

          {{$t('SixthPage.SecondCardOption_4')}}
        </span>
      </div>
      <div class='text-xl font-medium flex align-items-center gap-2'>
        <img width='34' height='34' src='/images/check-sucess.png' alt='time' />
        <span>
          {{$t('SixthPage.SecondCardOption_5')}}
        </span>
      </div>
      <div class='text-xl font-medium flex align-items-center gap-2'>
        <img width='34' height='34' src='/images/statistic-success.png' alt='statistic' />

        <span v-html="$t('SixthPage.SecondCardOption_6')">

        </span>
      </div>
    </div>
    <div class='total-info-top p-3 border-round-2xl border-3 bg-white flex flex-column gap-1 absolute'>
      <div class='text-2xl font-medium  gap-2 mb-1 text-center w-full uppercase'>

        {{$t('SixthPage.ThirdCardOption')}}
      </div>
      <div v-for='item in topCompany' :key='item.id' class='flex justify-content-between text-lg gap-2 font-medium'>
        <span>{{ $t(item.name) }}</span>
        <span style='color: #11A832'>{{ Number(item.value).toLocaleString('ru-ru', { currency: 'uzs' }) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.total-info-top {
  top: 10px;
  left: 50px;
  border-color: #11A832;
  animation: 1.5s fadeIn forwards;
  opacity: 0;
  animation-delay: 5s;
  max-width: 550px;
}

.total-info-right {
  right: 50px;
  bottom: 50px;
  animation: 1.5s fadeIn forwards;
  opacity: 0;
  animation-delay: 5s;
  max-width: 550px;
}

.pulse {
  justify-content: flex-start;
}

.text {
  font-size: 40px;
  font-weight: 600;
  white-space: nowrap;
  margin-top: -65px;
  place-items: center;
}

.typing-demo {
  animation: typing 2s steps(22);
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 2px;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}

.e-imzo {
  width: auto;
  height: 25px;
  z-index: 10;
  left: 14%;
  top: 54%;
  animation: zoom-in-zoom-out 2.3s ease-out infinite;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.oneid {
  width: 86px;
  left: 45%;
  top: 17%;
  height: auto;
  z-index: 10;
  animation: zoom-in-zoom-out 2s ease-out infinite;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.tax {
  left: 13%;
  top: 30%;
  width: 65px;
  height: auto;
  animation: zoom-in-zoom-out 2s ease-out infinite;
  animation-delay: 0.5s;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.railway {
  left: 20%;
  bottom: 10%;
  width: 65px;
  height: auto;
  animation: zoom-in-zoom-out 2s ease-out infinite;
  animation-delay: 0.75s;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.customs {
  right: 18%;
  bottom: 10%;
  width: 65px;
  height: auto;
  animation: zoom-in-zoom-out 4s ease-out infinite;
  animation-delay: 1s;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.bank {
  left: 70%;
  top: 40%;
  width: 65px;
  height: auto;
  animation: zoom-in-zoom-out 2s ease-out infinite;
  animation-delay: 1.5s;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.integration-info {
  right: 50px;
  bottom: 50px;
  animation: 1.5s fadeIn forwards;
  opacity: 0;
  animation-delay: 5s;

}

.total-info {
  bottom: 50px;
  left: 50px;
  animation: 1.5s fadeIn forwards;
  opacity: 0;
  animation-delay: 5s;
}

.box {
  width: 300px;
  opacity: 0;
  color: #fff;
  animation: 1s fadeIn forwards;
  padding: 12px;
  border-radius: 6px;
  background: #11A832;

  h6 {
    margin: 0 0 8px 0;
    font-size: 20px;
  }

  p {
    margin: 0;
  }

  &.box-1 {
    left: calc(100% + 20px);
    bottom: calc(100% + 40px);
    animation-delay: 0.5s;
  }

  &.box-2 {
    left: 75%;
    bottom: calc(100% + 140px);
    animation-delay: 2s;
    transform: rotate(-90deg);
  }

  &.box-3 {
    left: calc(100% + 40px);
    bottom: 0;
    animation-delay: 4.6s;
    transform: rotate(-180deg);
  }
}

.outline-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

.thumb {
  background-color: #fff;
  border: 4px solid #11A832;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 104px;
  opacity: 0;


  &.thumb-1 {
    animation: 0.5s fadeIn2 forwards;
  }

  &.thumb-2 {
    animation: 0.5s fadeIn4 forwards;
    animation-delay: 1.5s;
  }

  &.thumb-3 {
    animation: 0.5s fadeIn6 forwards;
    animation-delay: 4s;
  }

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn1 {
  from {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(45deg);
  }
}

@keyframes fadeIn2 {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn3 {
  from {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(-45deg);
  }
}

@keyframes fadeIn4 {
  from {
    opacity: 0;
    transform: scale(0) rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(-90deg);
  }
}

@keyframes fadeIn5 {
  from {
    opacity: 0;
    transform: scale(0) rotate(-135deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(-135deg);
  }
}

@keyframes fadeIn6 {
  from {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(-180deg);
  }
}

@keyframes fadeIn7 {
  from {
    opacity: 0;
    transform: scale(0) rotate(-225deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(-225deg);
  }
}

.seconds {
  width: 377px;
  height: 2px;
  position: absolute;
  transform: rotate(0);
  top: 50%;
  left: calc(50% - 30px);
  transition: all 1s;
  transform-origin: 30px center;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

</style>