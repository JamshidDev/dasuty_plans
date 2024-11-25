<script setup>
import TitleText from "@/components/TitleText/TitleText.vue";
import {onMounted, ref} from "vue";
import CountTime from "../../components/CountTime/CountTime.vue";
import lottie from 'lottie-web';
import animationData from "../../components/LottieJSON/animate-comp.json";

const animated = ref(false)
const el = ref(null)
const totalP = ref(93)
const animEl = ref(null)

const arr1 = [
    {offset: -12, name: 'HRM', deadline: '01.08.2024', url: 'https://exodim.railway.uz', value: 100, rate: 25},
    {offset: 0, name: 'RAIL OBSERVER', deadline: '01.07.2024', url: 'https://railwayobserver.uz', value: 100, rate: 18},
    {offset: 6, name: 'ONK', deadline: '10.08.2024', url: 'https://kmo.railwayinfra.uz/statistika', value: 100,  rate: 20},
    {
        offset: 7.5,
        name: 'TEZKOR TELEGRAF',
        deadline: '25.09.2024',
        url: 'https://tt.railwayinfra.uz',
        value: 100,
        rate: 8
    },
    {offset: 5, name: 'RELAY CONTROL', deadline: '31.07.2024', url: 'http://relay.itdevs.uz/', value: 100, rate: 12},
    {
      offset: -2,
      name: 'METROLOGIYA',
      deadline: '30.11.2024',
      url: 'https://metrolog.railwayinfra.uz/',
      value: 100,
      rate: 2
    },
    {offset: -16, name: 'VIRTUAL OFFICE', deadline: '31.03.2025', url: '/', value: 57, rate: 2},
    // {offset: -16, name: 'ERP', value: 30, deadline: '31.03.2025', url: '/', rate: 2},
]

const arr2 = [
    {offset: -12, name: 'E-NAKL', deadline: '10.08.2024', url: 'https://e-nakl.railway.uz', value: 100, rate: 17},
    {offset: 0, name: 'TRAIN LOCATION', deadline: '15.08.2024', url: 'https://tracking.railway.uz', value: 100, rate: 30},
    {offset: 6, name: 'UZGPS', deadline: '21.12.2024', url: 'https://utysmpo.uzgps.uz', value: 100, rate: 25},
    {offset: 7.5, name: 'SMART DEPO', deadline: '10.12.2024', url: 'https://uzdepo.uz/dashboard/', value: 100, rate: 25},
    {offset: 5, name: 'E-TICKET', deadline: '10.10.2024', url: 'https://eticket.railway.uz', value: 100, rate: 25},
    {
      offset: -2,
      name: 'RSX',
      deadline: '30.10.2024',
      url: 'https://rsx.railwayinfra.uz/',
      value: 100,
      rate: 10
    },
    // {offset: -2, name: 'TUNNEL', deadline: '24.12.2024', url: 'https://tunnelmodpro.uz', value: 93, rate: 10},
    {offset: -16, name: 'E-NAKL MOBILE', deadline: '30.08.2024', url: '/', value: 100, rate: 2},
]

onMounted(() => {
    const container = animEl.value;

    lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData // Your animation JSON data
    });

    setTimeout(() => {
        animated.value = !animated.value
    }, 500)
    // setInterval(() => {
    //     animated.value = false
    //     setTimeout(() => {
    //         animated.value = true
    //     }, 3000)
    // }, 10000)
})

</script>

<template>
    <div class="w-full min-h-full relative flex flex-column justify-content-center align-items-center mt-0">

        <TitleText :title="$t('ThirdPage.ThemeTitle')" :subtitle="$t('ThirdPage.ThemeSubtitle')"/>
        <div class='wrapper'>
          <div class="absolute" style="bottom:60px; left:20px">
            <div class="flex align-items-center">
              <span class="font-bold text-base text-red-500 mr-2"> 0 - 56% </span> <i class='bx bxs-square text-red-500 shadow-1 text-xl'></i>
            </div>
            <div class="flex align-items-center mt-2">
              <span class="font-bold text-base text-yellow-500 mr-2"> 56% - 72% </span> <i class='bx bxs-square text-yellow-500 shadow-1 text-xl'></i>
            </div><div class="flex align-items-center mt-2">
            <span class="font-bold text-base text-green-500 mr-2"> 72% - 100% </span> <i class='bx bxs-square text-green-500 shadow-1 text-xl'></i>
          </div>

          </div>
            <div class='left-side flex align-items-end flex-column gap-6 mb-8'>
                <div v-for='item in arr1' class='project-item'
                   :style='{right: `${item.offset}%`}'>
                    <div class="flex gap-2 justify-content-between">
                        <h4 class='text-left text-xl'>{{ item.name }}</h4>
                        <span class="font-bold" style="color:#1A1A1A">{{ item.deadline ?? '' }}</span>
                    </div>
                    <div class='relative'>
                        <!--            <div class='progress-icon progress-icon-left'></div>-->
<!--                        <div v-if='item.rate' class='progress-rate progress-rate-right'>-->
<!--                            <span class='symbol'>&#x2191</span>-->
<!--                            <AutoCounter :start-amout='animated ? 0 : item.rate' :end-amount='animated ? item.rate : 0'-->
<!--                                         :duration='1'/>-->
<!--                            <span>%</span>-->
<!--                        </div>-->
                       <a :href="item.url" target='_blank'>
                           <progress-bar
                               class='flex-grow-1 custom-progress-bar'
                               :class='{primary: item.value > 72, warning: item.value > 56 && item.value < 72, danger: item.value < 56}'
                               :value='animated ? item.value : 0'

                           />
                       </a>
                    </div>
                </div>
            </div>
            <div class='center-side flex justify-content-center align-items-center mb-8' ref='el'>
                <div class='relative'>
                    <div ref='animEl' class='anim-el'/>

                    <div class='fake-thumb flex justify-content-center align-items-center'/>
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
                        :border-width='28'
                        :border-bg-width='28'
                        :size='el.offsetWidth'
                        :percent="animated ? totalP : 0"
                        :transition='3000'
                        empty-color='#e2e8f0'
                        fill-color='#234699'
                    />
                </div>
            </div>
            <div class='right-side flex align-items-start flex-column gap-6 mb-8'>
                <div v-for='item in arr2' class='project-item'
                   :style='{left: `${item.offset}%`}'>
                    <div class="flex gap-2 justify-content-between">
                        <h4 class='text-left text-xl'>{{ item.name }}</h4>
                        <span class="font-bold" style="color:#1A1A1A">{{ item.deadline ?? '' }}</span>
                    </div>
                    <div class='relative'>
                        <!--            <div class='progress-icon progress-icon-right'></div>-->
<!--                        <div v-if='item.rate' class='progress-rate progress-rate-left'>-->
<!--                            <span class='symbol'>&#x2191</span>-->
<!--                            <span>{{ item.rate }}</span>-->
<!--                            <span>%</span>-->
<!--                        </div>-->
                       <a :href="item.url" target="_blank">
                           <progress-bar
                               class='flex-grow-1 custom-progress-bar'
                               :value='animated ? item.value: 0'
                               :class='{primary: item.value > 72, warning: item.value > 56 && item.value < 72, danger: item.value < 56}'
                           />
                       </a>
                    </div>
                </div>
            </div>
        </div>
        <CountTime class='special-countTime'></CountTime>
    </div>
</template>
<style lang="scss" scoped>
$blue: #234699;
:deep(.p-progressbar-value){
  transition: all 3s ease;
}
.anim-el {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px
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
    transition: all 3s;
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
    display: block;
    max-width: 70%;
    width: 100%;
    position: relative;
    text-decoration: unset;

    h4 {
        margin: 0 0 4px;
        color: #1A1A1A;
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
