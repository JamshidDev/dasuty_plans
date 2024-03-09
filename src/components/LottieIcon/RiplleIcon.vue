<template>
  <div id="rippleJSON" ref="rippleJSON"></div>
</template>


<script>
import animationData from '../LottieJSON/ripple.json';
import lottie from 'lottie-web';
export default {
  mounted() {
    this.createAnimation();
  },
  methods: {
    createAnimation() {
      const container = this.$refs.rippleJSON;

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
#rippleJSON{
  width:60px;
}
</style>