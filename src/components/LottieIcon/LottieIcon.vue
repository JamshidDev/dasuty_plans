<template>
  <div id="lottieJSON" ref="lottieJSON"></div>
</template>


<script>
import animationData from '../LottieJSON/arrow.json';
import lottie from 'lottie-web';
export default {
  mounted() {
    this.createAnimation();
  },
  methods: {
    createAnimation() {
      const container = this.$refs.lottieJSON;

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
#lottieJSON{
  width:60px;
}
</style>