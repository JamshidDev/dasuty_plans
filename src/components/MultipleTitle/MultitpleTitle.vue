<script>
export default {
  name: "MultitpleTitle",
  data() {
    return {
      text_list: [
        {
          id: 1,
          text: " ЙЎЛОВЧИ ТАШИШНИ БОШҚАРИШНИНГ АВТОМАТЛАШТИРИЛГАН МИЛЛИЙ ТИЗИМИ.",
          deadline : "03.04.2024"
        },
        {
          id: 2,
          text: " ЮК ТАШИШЛАРНИ ТЕЗКОР БОШҚАРИШ АВТОМАТЛАШТИРИЛГАН МИЛЛИЙ АХБОРОТ ТИЗИМИ."
        },
        {
          id: 3,
          text: "«РАҚАМЛИ МАРШРУТ» АХБОРОТ ТИЗИМИ."
        },
        {
          id: 4,
          text: "«ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ» АЖ АХБОРОТ ТИЗИМЛАРИ МАЪЛУМОТЛАРИНИНГ ЯГОНА «BI» МОДУЛИ."
        },
        {
          id: 5,
          text: "«Е-ТРАНСПОРТ» АХБОРОТ ТИЗИМИ"
        }, {
          id: 6,
          text: "РАҚАМЛИ МЕТРОЛОГИЯ — СИНОВ УСКУНАЛАРИ ВА ЎЛЧОВ ВОСИТАЛАРИНИ ҚИЁСЛОВ МУДДАТЛАРИНИ ОНЛАЙН НАЗОРАТ ҚИЛИШ ТИЗИМИ."
        }, {
          id: 7,
          text: "«ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ» АЖ РЕСУРСЛАРИНИ РЕЖАЛАШТИРИШНИНГ АВТОМАТЛАШТИРИЛГАН (ERP) ТИЗИМИ."
        }, {
          id: 8,
          text: " РАҚАМЛИ САНОАТ ХАВФСИЗЛИГИ АХБОРОТ ТИЗИМИ."
        }, {
          id: 9,
          text: " ТЕЗКОР ТЕЛЕГРАФ ТЕЛЕГРАММАЛАРИ АЙЛАНМАСИНИНГ ОНЛАЙН ПЛАТФОРМАСИ."
        }, {
          id: 10,
          text: "ТЕМИР ЙЎЛ MARKET PLACE ТИЗИМИНИ ЯРАТИШ."
        },


      ]
    }
  }
}
</script>

<template>

  <div class="absolute left_100 flex flex-column row-gap-4 bg-blur-box">
    <div v-for="item in text_list" :id="item.id" class="flex font-bold text-white" style="font-size:22px">
      <i class='bx bxs-circle mr-4'></i> {{item.text}}
<!--      <span> {{item.deadline}}</span>-->
    </div>



  </div>
</template>

<style scoped lang="scss">

.left_100 {
  left: 80px;
  right: calc(50% - 200px);
  top:100px;
}
.bg-blur-box{
  background: rgba(13, 32, 122, 0.69);
  background-filter:blur(12px);
  border: 2px solid #eaeaea;
  padding:20px;
  border-radius:12px;
}
</style>