<script setup>

import { useRouter } from "vue-router";
import PulseAnimation from "../../components/PulseAnimation/PulseAnimation.vue";
import PersonSvg from "../../components/IconSvg/PersonSvg.vue";
import ArrowLeftTwoColor from "../../components/IconSvg/ArrowLeftTwoColor.vue";
import ArrowRightTwoColor from "../../components/IconSvg/ArrowRightTwoColor.vue";
import PulseCenter from "../../components/PulseAnimation/PulseCenter.vue";

const { push } = useRouter()
</script>

<template>
  <div class="w-full min-h-full relative flex flex-column justify-content-center align-items-center relative">
    <PulseAnimation />
    <div data-aos='fade' data-aos-duration='1500' class='px-6 flex justify-content-between align-items-center'>
      <div class='text-center cursor-pointer text-xl p-4 bg-white border-round-2xl border-2 before'
           @click='push("/twelfth-screen")'>
        Рақамлаштришдан <br /> олдинги ҳолат
      </div>
      <ArrowLeftTwoColor class='ml-6 mr-2 w-5rem' />
      <PulseCenter caption='Пользователь'>
        <PersonSvg />
      </PulseCenter>
      <ArrowRightTwoColor class='mr-6 ml-2 w-5rem' />
      <div class='text-center cursor-pointer text-xl p-4 bg-white after border-round-2xl border-2'
           @click='push("/thirteen-screen")'>
        Рақамлаштришдан <br /> олдинги ҳолат
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.before {
  border-color: #A90B0B;
  color: #A90B0B;
}

.after {
  border-color: #066CC3;
  color: #066CC3;
}
</style>