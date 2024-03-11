

<template>
  <div class="flex flex-column absolute left-0 top-0 w-full pt-4">
    <div class="gradient-background mx-auto text-center title text-4xl font-bold uppercase">
      {{title}}
    </div>
    <div class="gradient-background text-center subtitle mx-auto text-3xl uppercase">
      {{subtitle}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'Content title here',
    },
    subtitle:{
      type:String,
      default:'',
    },
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">

</style>