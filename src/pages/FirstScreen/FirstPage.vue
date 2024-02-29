

<template>
    <div class="w-full min-h-full relative flex justify-content-center align-items-center">
<!--      title-->
      <TitleText :title="`ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ АЖДА`" :subtitle="`РАҚАМЛАШТИРИШНИНГ ЖОРИЙ ҲОЛАТИ`"></TitleText>

      <PlansView></PlansView>
      <ChartText :content_text="'E-NAKL'" :site_link="`https://e-nakl.railway.uz/Login`" :content_info="`Юк ташиш хизмати`" :chart_persant="100" :positionTop="1" :slide="'right'"></ChartText>
      <ChartText :content_text="'E-TICKET'" :site_link="`https://eticket.railway.uz`"  :content_info="`Йўловчи ташиш`" :chart_persant="100" :positionTop="2" :slide="'right'"></ChartText>
      <ChartText :content_text="'SMART DEPO'" :site_link="`https://depouzbekistan.uz`"  :content_info="`Локомотив хўжалиги`" :chart_persant="100" :positionTop="3" :slide="'right'"></ChartText>
      <ChartText :content_text="'UZGPS'" :site_link="`https://utysmpo.uzgps.uz`"  :content_info="`Локомотив хўжалиги`" :chart_persant="100" :positionTop="4" :slide="'right'"></ChartText>

      <ChartText :content_text="'HRM'" :site_link="`https://exodim.railway.uz`"   :content_info="`Ходимлар бўлими`" :chart_persant="91" :positionTop="1" :slide="'left'"></ChartText>
      <ChartText :content_text="'TRAIN LOCATION'" :site_link="`https://tracking.railway.uz`"  :content_info="`Юкларни етказиб беришни назорат қилиш ахборот тизими`" :chart_persant="70" :positionTop="2" :slide="'left'"></ChartText>
      <ChartText :content_text="'RAIL OBSERVER'" :site_link="`https://railwayobserver.uz`"  :content_info="`Йўл хўжалиги`" :chart_persant="82" :positionTop="3" :slide="'left'"></ChartText>
      <ChartText :content_text="'ONK'" :site_link="`https://kmo.railwayinfra.uz/statistika`"  :content_info="`Станция ишлари`" :chart_persant="100" :positionTop="4" :slide="'left'"></ChartText>



      <ChartText :content_text="'DAS UTY ERP'" :content_info="`Корхона ресурсларини режалаштириш`"  :chart_persant="21" :positionTop="8" :slide="'right'"></ChartText>

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