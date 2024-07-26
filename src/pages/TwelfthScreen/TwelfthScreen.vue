<script setup>

import PulseAnimation from "../../components/PulseAnimation/PulseAnimation.vue";
import PulseCenter from "../../components/PulseAnimation/PulseCenter.vue";
import PersonSvg from "../../components/IconSvg/PersonSvg.vue";
import {onMounted, ref} from "vue";
import TitleText from "@/components/TitleText/TitleText.vue";

const animated = ref(false)
const totalP = ref(70)

const arr = [

    {r: 45, desc: 'FifthPage.Option1', icon: 'station.png'},
    {r: 90, desc: 'FifthPage.Option2', icon: 'contract.png'},
    {r: 135, desc: 'FifthPage.Option3', icon: 'deal.png'},
    {r: 180, desc: 'FifthPage.Option4', icon: 'station.png'},
    {r: 225, desc: 'FifthPage.Option5', icon: 'bank.png'},
    {
        r: 270,
        desc: 'FifthPage.Option6',
        icon: 'payment-success.png'
    },
    {r: 315, desc: 'FifthPage.Option7', icon: 'station.png'},
]

onMounted(() => {
    setTimeout(() => {
        animated.value = !animated.value
    }, 500)
})

</script>

<template>
    <div class="w-full min-h-full flex flex-column justify-content-center align-items-center">

        <TitleText class='heading' :title="$t('FifthPage.ThemeTitle')"></TitleText>
        <PulseAnimation class='custom-pulse-animation overflow-visible'/>
        <PulseCenter class='pulse'>
            <PersonSvg/>
        </PulseCenter>
        <div class='outline-wrapper'>
            <div class='relative'>
                <div v-for='(item, idx) in arr' :key='item.r' class='thumb-container'>
                    <div class='seconds' :style='{transform: `rotate(${item.r}deg)`}'>
                        <div class='thumb' :class='`thumb-${idx + 1}`'>
                            <img :src='`/images/${item.icon}`'>
                        </div>
                        <div class='absolute box' :class='`box-${idx + 1}`'>

                            <h6>{{ `${idx + 1}-` + $t('FifthPage.stage') }}</h6>
                            <p>{{$t(item.desc) }}</p>
                        </div>
                    </div>
                </div>
                <div style='transform: rotate(55deg)'>
                    <circle-progress
                        :border-width='10'
                        :border-bg-width='10'
                        :size='600'
                        :percent="animated ? totalP : 0"
                        :transition='9000'
                        empty-color='#e2e8f0'
                        fill-color='#A8111B'
                    />
                </div>
            </div>
        </div>

        <div class='p-3 flex flex-column font-medium border-round-2xl border-3 gap-2 bg-white absolute total-info-right'
             style='border-color: #A8111B;'>
            <div class='text-xl line-height-2 font-medium flex align-items-center gap-2'>
                <img height='40' width='40' src='/images/delivery-slow-danger.png' alt='users'/>
                <span>

          {{$t('FifthPage.CardOption1')}}
        </span>
            </div>
            <div class='text-xl line-height-2 font-medium flex align-items-center gap-2'>
                <img width='40' height='40' src='/images/more-doc.png' alt='users'/>
                <span>

          {{$t('FifthPage.CardOption2')}}
        </span>
            </div>
        </div>

        <div class='p-3 flex flex-column font-medium border-round-2xl border-3 gap-2 bg-white absolute total-info'
             style='border-color: #A8111B;'>

              <div class='text-xl line-height-2 font-medium flex align-items-center gap-2'>
                <img width='40' height='40' src='/images/time-spent-danger.png' alt='users'/>
                <span v-html="$t('FifthPage.CardOption3')"></span>
              </div>
            <div class='text-xl line-height-2 font-medium flex align-items-center gap-2'>
                <img width='40' height='40' src='/images/tarif-calc-danger.png' alt='users'/>
                <span>
          {{$t('FifthPage.CardOption4')}}
        </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$blue: #234699;

.total-info-right {
    bottom: 50px;
    left: 50px;
    animation: 1.5s fadeIn forwards;
    opacity: 0;
    animation-delay: 8.5s;
    max-width: 500px;
}

.total-info {
    bottom: 50px;
    right: 50px;
    animation: 1.5s fadeIn forwards;
    opacity: 0;
    animation-delay: 8.5s;
    max-width: 500px;
}

.box {
    width: 300px;
    opacity: 0;
    color: #fff;
    animation: 1s fadeIn forwards;
    padding: 12px;
    border-radius: 6px;
    background: linear-gradient(84.27deg, #1162AB 0.72%, #0A7DE7 19.94%, #0A7DE7 93.36%);

    h6 {
        margin: 0 0 8px 0;
        font-size: 20px;
        color: #fff;
    }

    p {
        margin: 0;
    }

    &.box-1 {
        left: calc(100% + 15px);
        top: 55px;
        transform: rotate(45deg);
        animation-delay: 0.5s;
    }

    &.box-2 {
        left: calc(100% + 20px);
        bottom: calc(100% + 40px);
        animation-delay: 1.5s;
    }

    &.box-3 {
        left: 85%;
        bottom: calc(100% + 150px);
        animation-delay: 2.5s;
        transform: rotate(-45deg);
    }

    &.box-4 {
        left: 70%;
        bottom: calc(100% + 160px);
        animation-delay: 3s;
        transform: rotate(-90deg);
    }

    &.box-5 {
        left: calc(100% - 64px);
        top: calc(100% + 170px);
        animation-delay: 4s;
        transform: rotate(-135deg);
    }

    &.box-6 {
        left: calc(100% + 35px);
        bottom: -135px;
        animation-delay: 5s;
        transform: rotate(-180deg);
    }

    &.box-7 {
        left: calc(100% + 15px);
        bottom: calc(100% + 60px);
        animation-delay: 8s;
        transform: rotate(-225deg);
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
    border: 4px solid #A8111B;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    opacity: 0;


    &.thumb-1 {
        animation: 0.5s fadeIn1 forwards;
    }

    &.thumb-2 {
        animation: 0.5s fadeIn2 forwards;
        animation-delay: 1s;
    }

    &.thumb-3 {
        animation: 0.5s fadeIn3 forwards;
        animation-delay: 2s;
    }

    &.thumb-4 {
        animation: 0.5s fadeIn4 forwards;
        animation-delay: 2.5s;
    }

    &.thumb-5 {
        animation: 0.5s fadeIn5 forwards;
        animation-delay: 3.5s;
    }

    &.thumb-6 {
        animation: 0.7s fadeIn6 forwards;
        animation-delay: 4.5s;
    }

    &.thumb-7 {
        animation: 1s fadeIn7 forwards;
        animation-delay: 8s;
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
