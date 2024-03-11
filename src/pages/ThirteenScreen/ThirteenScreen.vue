<script setup>

import PulseAnimation from "../../components/PulseAnimation/PulseAnimation.vue";
import PulseCenter from "../../components/PulseAnimation/PulseCenter.vue";
import { onMounted, ref } from "vue";
import TitleText from "../../components/TitleText/TitleText.vue";

const animated = ref(false)
const totalP = ref(45)

const arr = [
  {
    r: 90, desc: 'Мижоз\n' +
      '"https://enakl.railway.uz" сайтдан рўйхатдан ўтади', icon: 'desktop.png'
  },
  { r: 180, desc: 'Шартнома асосида онлайн тўлов амалга   оширилади', icon: 'credit-card.png' },
  { r: 270, desc: 'Онлайн ариза топширади', icon: 'success.png' },
]

onMounted(() => {
  setTimeout(() => {
    animated.value = !animated.value
  }, 500)
})

</script>

<template>
  <div class="w-full wrapper min-h-full flex flex-column justify-content-center align-items-center">
    <TitleText class='heading' title='Рақамлаштиришдан кейинги ҳолат'></TitleText>
    <PulseAnimation class='custom-pulse-animation overflow-visible' />
    <PulseCenter class='pulse relative'>
      <!--      <MobileDevice />-->
      <div class='relative text'>
        <div class="typing-demo">
          E-NAKL
        </div>
      </div>
      <img class='oneid absolute' src='/images/one-id.png' alt='one-id'>
      <img class='tax absolute' src='/images/soliq.png' alt='one-id'>
      <img class='bank absolute' src='/images/milliy-bank.png' alt='one-id'>
      <img class='railway absolute' src='/images/temir-yol-kengashi.png' alt='one-id'>
      <img class='customs absolute' src='/images/bojxona.png' alt='one-id'>
    </PulseCenter>
    <div class='outline-wrapper'>
      <div class='relative'>
        <div v-for='(item, idx) in arr' :key='item.r' class='thumb-container'>
          <div class='seconds' :style='{transform: `rotate(${item.r}deg)`}'>
            <div class='thumb' :class='`thumb-${idx + 1}`'>
              <img :src='`/images/${item.icon}`'>
            </div>
            <div class='absolute box' :class='`box-${idx + 1}`'>
              <h6>{{ `${idx + 1}-Босқич` }}</h6>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <div style='transform: rotate(100deg)'>
          <circle-progress
            angle='30'
            border-width='10'
            border-bg-width='10'
            :size='600'
            :percent="animated ? totalP : 0"
            transition='5000'
            empty-color='#e2e8f0'
            fill-color='#11A832'
          />
        </div>
      </div>
    </div>
    <div class='p-3 border-round-2xl border-3 bg-white absolute total-info' style='border-color: #11A832;'>
      <div class='text-2xl font-medium'>
        “Ягона дарча” ахборот тизими <br />фойдаланувчилари сони – <span class='text-3xl font-semibold'
                                                                         style='color: #11A832'>18354</span> нафар.
      </div>
      <div class='text-2xl font-medium mb-2'>
        Умумий сарфланган вақт <span style='color:#11A832' class='text-4xl font-semibold'>12</span> соатни <br /> ташкил
        қилади
      </div>
    </div>
    <div class='p-3 border-round-2xl border-3 bg-white absolute flex flex-column gap-1 integration-info'
         style='border-color: #11A832;'>

      <div class='text-xl font-medium mb-2'>
        Экспорт учун мурожаатлар <span style='color:#11A832' class='text-3xl font-semibold'>2742</span>
      </div>

      <div class='text-xl font-medium mb-2'>
        Маҳаллий ташувларда мурожаатлар <span style='color:#11A832' class='text-3xl font-semibold'>16862</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

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

.oneid {
  left: 38%;
  top: 45%;
  width: 80px;
  height: auto;
  z-index: 10;
  animation: zoom-in-zoom-out 2s ease-out infinite;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.tax {
  left: 30%;
  top: 15%;
  width: 75px;
  height: auto;
  animation: zoom-in-zoom-out 2s ease-out infinite;
  animation-delay: 0.5s;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.railway {
  left: 10%;
  top: 50%;
  width: 70px;
  height: auto;
  animation: zoom-in-zoom-out 2s ease-out infinite;
  animation-delay: 0.75s;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.customs {
  left: 50%;
  top: 65%;
  width: 75px;
  height: auto;
  animation: zoom-in-zoom-out 4s ease-out infinite;
  animation-delay: 1s;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .3));
}

.bank {
  left: 70%;
  top: 30%;
  width: 70px;
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
    left: 72%;
    bottom: calc(100% + 160px);
    animation-delay: 2s;
    transform: rotate(-90deg);
  }

  &.box-3 {
    left: calc(100% + 40px);
    bottom: -60px;
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