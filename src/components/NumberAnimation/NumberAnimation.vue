

<template>
    <span>{{animatedNumber}}</span>
</template>

<script>
import gsap from 'gsap'
export default {
  name: "NumberAnimation",
  props:{
    amount:{
      type:Number,
      default:0,
    }
  },
  data(){
    return{
      tweenedNumber: 0,
    }
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0);
    }
  },
  mounted() {

    gsap.to(this.$data, { duration: 1.2, tweenedNumber: this.amount });
  }
}
</script>
