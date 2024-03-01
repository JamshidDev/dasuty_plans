<script>
export default {
  name: "MultitpleTitle",
  data() {
    return {
      text_list: [
        {
          id: 1,
          path: "fourth-screen",
          text: " 2023 ЙИЛДА АМАЛГА ОШИРИЛГАН ИСЛОХОТЛАР (1)."
        },
        {
          id: 2,
          path: "fiveth-screen",
          text: " 2023 ЙИЛДА АМАЛГА ОШИРИЛГАН ИСЛОХОТЛАР (2)."
        },
        {
          id: 3,
          path: "zero-screen",
          text: " ЕДЦ ХАҚИДА МАЪЛУМОТ."
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

  <div class="absolute left_100 flex flex-column row-gap-4 bg-blur-box shadow-6">
    <div v-for="item in text_list" @click="redirect(item.path)" :id="item.id" class="flex text-white font-bold cursor-pointer" style="font-size:22px">
      <i class='bx bxs-circle mr-4'></i>{{ item.text }}
    </div>


  </div>
</template>

<style scoped lang="scss">

.left_100 {
  left: 50%;
  transform: translateX(-50%);
  //right: calc(50% - 200px);
  width: 50%;
  top: 150px;
}

.bg-blur-box {
  background: rgba(13, 32, 122, 0.69);
  background-filter: blur(12px);
  //border: 1px solid #27272a;
  padding: 20px;
  border-radius: 12px;
}
</style>