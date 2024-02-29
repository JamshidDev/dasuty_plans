<template>
  <div id="lottieContainer" ref="lottieContainer"></div>
</template>


<script>
import animationData from './animate-svg.json';
import lottie from 'lottie-web';
export default {
  mounted() {
    this.createAnimation();
  },
  methods: {
    createAnimation() {
      const container = this.$refs.lottieContainer;

      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData // Your animation JSON data
      });
    }
  }
};

</script>

<style scoped lang="scss">
  #lottieContainer{
    width:450px;
  }
</style>