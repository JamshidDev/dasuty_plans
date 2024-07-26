<script setup>

import { useRouter } from "vue-router";
import PulseAnimation from "../../components/PulseAnimation/PulseAnimation.vue";
import PersonSvg from "../../components/IconSvg/PersonSvg.vue";
import ArrowLeftTwoColor from "../../components/IconSvg/ArrowLeftTwoColor.vue";
import ArrowRightTwoColor from "../../components/IconSvg/ArrowRightTwoColor.vue";
import PulseCenter from "../../components/PulseAnimation/PulseCenter.vue";
import TitleText from "../../components/TitleText/TitleText.vue";

const { push } = useRouter()
</script>

<template>
  <div class="w-full min-h-full relative flex flex-column justify-content-center align-items-center relative">

    <TitleText class='heading' :title="$t('FourthPage.ThemeTitle')" :subtitle="$t('FourthPage.ThemeSubtitle')"></TitleText>
    <PulseAnimation />
    <div data-aos='fade' data-aos-duration='1500' class='px-6 flex justify-content-between align-items-center'>
      <div class='text-center cursor-pointer text-xl p-4 bg-white border-round-2xl border-2 before'
           @click='push("/twelfth-screen")'>

        <span class="font-bold">{{$t('FourthPage.Option1')}}</span>
      </div>
      <ArrowLeftTwoColor class='ml-6 mr-3 w-5rem' />
      <PulseCenter :caption="$t('FourthPage.Client')">
        <PersonSvg />
      </PulseCenter>
      <ArrowRightTwoColor class='mr-6 ml-3 w-5rem' />
      <div class='text-center cursor-pointer text-xl p-4 bg-white after border-round-2xl border-2'
           @click='push("/thirteen-screen")'>

        <span class="font-bold">{{$t('FourthPage.Option2')}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.before {
  border-color: #A90B0B;
  color: #A90B0B;
}

.after {
  border-color: #066CC3;
  color: #066CC3;
}

.heading {
 .subtitle {
   font-size: 32px !important;
 }
}

</style>