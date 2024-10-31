<script>


export default {
  name: "MultitpleTitle",

  data() {
    return {
      text_list: [
        // {
        //   id: "2-9",
        //   path: "fourth-screen",
        //   text: "“ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ” АКЦИЯДОРЛИК ЖАМИЯТИДА ТРАНСФОРМАЦИЯ ЖАРАЁНЛАРИНИНГ НАТИЖАДОРЛИГИ"
        // },
        // {
        //   id: 2,
        //   path: "fiveth-screen",
        //   text: "ОПЕРАЦИОН САМАРАДОРЛИК"
        // },
        // {
        //   id: 2,
        //   path: "min-fin-one",
        //   text: "ЙЎЛОВЧИ ТАШУВЛАРИ ВА ВОКЗАЛЛАРДА ХУСУСИЙ ШЕРИКЧИЛИКНИ ЖОРИЙ ЭТИШ "
        // },
        // {
        //   id: 2,
        //   path: "min-fin-two",
        //   text: "“ТЕМИРЙЎЛКАРГО” АЖ КОМПАНИЯСИ ТАШКИЛ ЭТИЛДИ"
        // },
        // {
        //   id: 2,
        //   path: "min-fin-three",
        //   text: "ЗАМОНАВИЙ ХАЛҚАРО СТАНДАРТЛАРГА МОС ЛОГИСТИКА МАРКАЗЛАРИНИ ТАШКИЛ ЭТИШ"
        // },
        // {
        //   id: 2,
        //   path: "min-fin-four",
        //   text: "САНОАТ КОРХОНАЛАРНИ РИВОЖЛАНТИРИШ ВА ВАГОН ПАРКИНИ ЯНГИЛАШ ЛОЙИҲАЛАРИ"
        // },
        // {
        //   id: 2,
        //   path: "min-fin-five",
        //   text: "2024 ЙИЛДА АМАЛГА ОШИРИЛИШИ РЕЖАЛАШТИРИЛГАН ИШЛАР"
        // },
        // {
        //   id: 3,
        //   path: "zero-screen",
        //   text: "Ягона диспечирлик маркази"
        // },
        {
          id: "1",
          path: "zero-screen",

          text: this.$t('firstPage.FirstContent')
        },
        // {
        //   id: "11-13",
        //   path: "sixth-screen",
        //   text: "ЮК ЕТКАЗИШ ХОЛАТЛАРИ (АВВАЛГИ ВА ХОЗИРГИ)"
        // },
        // {
        //   id: 6,
        //   path: "seventh-screen",
        //   text: "ЮК ЕТКАЗИШ ХОЛАТЛАРИ (ХОЗИРГИ)"
        // },
        // {
        //   id: 13,
        //   path: "eticket",
        //   text: "ЙЎЛОВЧИ ТАШИШ ХОЛАТЛАРИ (АВВАЛГИ ВА ХОЗИРГИ)"
        // },
        {
          id: "2-6",
          path: "tenth-screen",

          text: this.$t('firstPage.SecondContent')
        },
        // {
        //   id: 7,
        //   path: "first-screen",
        //   text: "АХБОРОТ ТИЗИМЛАРИ"
        // },
        // {
        //   id: 8,
        //   path: "second-screen",
        //   text: "2025 ГАЧА БЎЛГАН РАҚАМЛАШТИРИШ РЕЖАСИ"
        // },
        // {
        //   id: 9,
        //   path: "third-screen",
        //   text: "РАҚАМЛАШТИРИШ ХОДИМЛАРИ"
        // },
        // {
        //   id: 10,
        //   path: "nst-infra",
        //   text: "ИНФРАТУЗИЛМА"
        // },
      ]
    }
  },
  methods: {
    redirect(name) {
      this.$router.push({name});
    }
  }
}
</script>

<template>

  <div class="absolute left_100 flex flex-column row-gap-4 bg-blur-box shadow-4">
    <div v-for="item in text_list" @click="redirect(item.path)" :id="item.id"
         class="flex align-items-center text-white font-bold cursor-pointer" style="font-size:20px">
      <div class="flex justify-content-center align-items-center border-1" style="width:80px;">
<!--        <i class='bx bxs-circle' style="color:#2F5597;"></i>-->
        <i class='bx bx-check-circle text-4xl' style="color:#2F5597;"></i>
      </div>
      <div class=" flex align-items-center justify-content-center px-4 py-1 font-medium border-round shadow-1 uppercase"
           style="background: #2F5597; height:80px; width:calc(100% - 100px)">
        {{ item.text }}
      </div>
      <div  style="width:100px;" class="flex justify-content-center align-items-center">
        <div  style="color:#2F5597;" class=' text-2xl font-medium'>{{item.id}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.left_100 {
  left: 50%;
  transform: translateX(-50%);
  //right: calc(50% - 200px);
  width: 50%;
  top: 100px;
}

.bg-blur-box {
  //background: #2F5597;
  background-filter: blur(12px);
  //border: 1px solid #27272a;
  padding: 20px;
  border-radius: 12px;
}
</style>
