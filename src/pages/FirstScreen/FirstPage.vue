

<template>
    <div class="w-full min-h-full relative flex justify-content-center align-items-center">
<!--      title-->
      <TitleText :title='`"ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ" АЖДА`' :subtitle="`РАҚАМЛАШТИРИШНИНГ ЖОРИЙ ҲОЛАТИ`"></TitleText>
<!--      <img class="shadow-2 border-round" style="width:1700px;" src="@/assets/img/page_3.png" alt="">-->
      <PlansView></PlansView>
      <ChartText :content_text="'E-NAKL'" :site_link="`https://e-nakl.railway.uz`" :content_info="`Юк ташиш хизмати (31.05.2024)`" :chart_persant="92" :positionTop="12" :slide="'right'"></ChartText>
      <ChartText :content_text="'E-TICKET'" :site_link="`https://eticket.railway.uz`"  :content_info="`Йўловчи ташиш`" :chart_persant="100" :positionTop="1" :slide="'right'"></ChartText>
      <ChartText :content_text="'SMART DEPO'" :site_link="`https://depouzbekistan.uz`"  :content_info="`Локомотив хўжалиги`" :chart_persant="100" :positionTop="3" :slide="'right'"></ChartText>
      <ChartText :content_text="'UZGPS'" :site_link="`https://utysmpo.uzgps.uz`"  :content_info="`Локомотив хўжалиги`" :chart_persant="100" :positionTop="4" :slide="'right'"></ChartText>

      <ChartText :content_text="'HRM'" :site_link="`https://exodim.railway.uz`"   :content_info="`Ходимлар бўлими (31.03.2024)`" :chart_persant="91" :positionTop="12" :slide="'left'"></ChartText>
      <ChartText :content_text="'TRAIN LOCATION'" :site_link="`https://tracking.railway.uz`"  :content_info="`Юкларни етказиб беришни назорат қилиш ахборот тизими`" :chart_persant="100" :positionTop="2" :slide="'right'"></ChartText>
      <ChartText :content_text="'RAIL OBSERVER'" :site_link="`https://railwayobserver.uz`"  :content_info="`Йўл хўжалиги (25.06.2024)`" :chart_persant="82" :positionTop="2" :slide="'left'"></ChartText>
      <ChartText :content_text="'ONK'" :site_link="`https://kmo.railwayinfra.uz/statistika`"  :content_info="`Станция ишлари`" :chart_persant="100" :positionTop="3" :slide="'left'"></ChartText>

      <ChartText :content_text="'DAS UTY ERP'" :content_info="`Корхона ресурсларини режалаштириш (01.01.2025)`"  :chart_persant="21" :positionTop="8" :slide="'right'"></ChartText>

      <ChartText :content_text="'TEZKOR TELEGRAF'" :site_link="`https://telegraf.railwayinfra.uz/`" :content_info="`Телеграммаларни тезкор юбориш (01.11.2024)`"  :chart_persant="65" :positionTop="4" :slide="'left'"></ChartText>
      <ChartText :content_text="'TUNNEL'" :site_link="`https://tunnelmodpro.uz`" :content_info="`Харакат хавфсизлиги (13.06.2024)`"  :chart_persant="73" :positionTop="1" :slide="'left'"></ChartText>
      <ChartText :content_text="'ENAKL MOBILE'" :content_info="`Юк ташиш хизмати (05.04.2024)`"  :chart_persant="12" :positionTop="10" :slide="'right'"></ChartText>
      <ChartText :content_text="'VIRTUAL OFFICE'" :content_info="`Ижтимоий хизматлар (01.08.2024)`"  :chart_persant="11" :positionTop="9" :slide="'left'"></ChartText>
<!--      <ChartText :content_text="'AISUP'" :content_info="`Йўл хўжалиги`"  :chart_persant="81" :positionTop="4" :slide="'left'"></ChartText>-->

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