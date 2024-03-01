<script>
export default {
  name: "MultitpleTitle",
  data() {
    return {
      text_list: [
        {
          id: 1,
          path: "fourth-screen",
          text: "“ЎЗБЕКИСТОН ТЕМИР ЙЎЛЛАРИ” АКЦИЯДОРЛИК ЖАМИЯТИДА ТРАНСФОРМАЦИЯ ЖАРАЁНЛАРИНИНГ НАТИЖАДОРЛИГИ"
        },
        {
          id: 2,
          path: "fiveth-screen",
          text: " 2023 ЙИЛДА АМАЛГА ОШИРИЛГАН ИСЛОХОТЛАР (2)."
        },
        {
          id: 3,
          path: "zero-screen",
          text: " Ягона диспечирлик маркази."
        },
        {
          id: 4,
          path: "zero-screen",
          text: " 14 ТА ДИСПЕТЧЕРСКИЙ КРУГ."
        },
        {
          id: 5,
          path: "sixth-screen",
          text: " ЮК ЕТКАЗИШ ХОЛАТЛАРИ (АВВАЛГИ)"
        },
        {
          id: 6,
          path: "seventh-screen",
          text: " ЮК ЕТКАЗИШ ХОЛАТЛАРИ (ХОЗИРГИ)."
        },
        {
          id: 6,
          path: "first-screen",
          text: " ИТ ЦЕНТЕР."
        },
        {
          id: 6,
          path: "second-screen",
          text: " (2025 ГАЧА БЎЛГАН ПЛАН ГРАФИК) ИТ ЦЕНТЕР."
        },
        {
          id: 6,
          path: "third-screen",
          text: " ИТ ЦЕНТЕР ХОДИМЛАРИ."
        },
      ]
    }
  },
  methods: {
    redirect(name) {
      this.$router.push({name,});
    }
  }
}
</script>

<template>

  <div class="absolute left_100 flex flex-column row-gap-4 bg-blur-box shadow-4">
    <div v-for="item in text_list" @click="redirect(item.path)" :id="item.id"
         class="flex align-items-center text-white font-bold cursor-pointer" style="font-size:16px">
      <div class="flex justify-content-center align-items-center border-1" style="width:100px;">
<!--        <i class='bx bxs-circle' style="color:#2F5597;"></i>-->
        <i class='bx bx-check-circle text-4xl' style="color:#2F5597;"></i>
      </div>
      <div class=" flex align-items-center justify-content-center px-4 py-1 font-medium border-round shadow-1 uppercase" style="background: #2F5597; height:50px; width:calc(100% - 100px)">
        {{ item.text }}
      </div>
      <div  style="width:100px;" class="flex justify-content-center align-items-center">
        <i   style="color:#2F5597;" class='bx bx-right-arrow-alt text-6xl font-medium'></i>
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