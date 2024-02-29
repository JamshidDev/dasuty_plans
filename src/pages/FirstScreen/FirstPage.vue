

<template>
    <div class="w-full min-h-full relative flex justify-content-center align-items-center">
<!--      title-->
      <TitleText :title="`ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ АЖДА`" :subtitle="`РАҚАМЛАШТИРИШНИНГ ЖОРИЙ ҲОЛАТИ`"></TitleText>

      <PlansView></PlansView>
      <ChartText :content_text="'E-TICKET'" :positionTop="1" :slide="'right'"></ChartText>
      <ChartText :content_text="'HRM'" :positionTop="2" :slide="'right'"></ChartText>
      <ChartText :content_text="'SMART DEPO'" :positionTop="3" :slide="'right'"></ChartText>
      <ChartText :content_text="'UZGPS'" :positionTop="4" :slide="'right'"></ChartText>

      <ChartText :content_text="'E-NAKL'" :positionTop="1" :slide="'left'"></ChartText>
      <ChartText :content_text="'TRAIN LOCATION'" :positionTop="2" :slide="'left'"></ChartText>
      <ChartText :content_text="'RAIL OBSERVER'" :positionTop="3" :slide="'left'"></ChartText>
      <ChartText :content_text="'KMO'" :positionTop="4" :slide="'left'"></ChartText>

    </div>

</template>
<script>
import ChartText from "@/components/ChartText/ChartText.vue";
import PlansView from "@/components/PlansView.vue";
import TitleText from "@/components/TitleText/TitleText.vue";
export default {
  components:{
    PlansView,
    ChartText,
    TitleText,
  },

  data(){
    return{

    }
  }
}
</script>


<style scoped lang="scss">

</style>