<template>
  <div id="lottieContainer2" ref="lottieContainer2"></div>
</template>


<script>
import animationData from './animate-svg2.json';
import lottie from 'lottie-web';
export default {
  mounted() {
    this.createAnimation();
  },
  methods: {
    createAnimation() {
      const container = this.$refs.lottieContainer2;

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
#lottieContainer2{
  width:600px;
  position:absolute;
  bottom: 60px;
  right: 60px;
}
</style>