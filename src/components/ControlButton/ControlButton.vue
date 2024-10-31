<template>
  <!--  <div class="page_number_box">-->
  <!--    <span>{{page_number}}</span>-->
  <!--  </div>-->
  <div class="fixed flex gap-4 control_button_panel">
    <div @click="previous_page()" v-if="this.prevBtn" class="premium_bg" style="width: 80px;
  height: 40px;">
      <i class='bx bx-chevron-left text-white text-4xl'></i>
    </div>
    <div @click="$router.push({name : 'zero-screen'})" class="premium_bg" style="width: 80px;
  height: 40px;">
      <i class='bx bx-home text-white text-4xl'></i>
    </div>
    <div @click="next_page()" v-if="this.nextBtn" class="premium_bg " style="width: 80px;
  height: 40px;">
      <i class='bx bx-chevron-right text-white text-4xl'></i>
    </div>
  </div>





</template>
<script>
export default {
  data() {
    return {
      page_list: [
        // {
        //   index: 0,
        //   name: "eighth-screen"
        // },
        {
          index: 1,
          name: "zero-screen"
        },
        {
          index: 2,
          name: "after-digitalization"
        },
        // {
        //   index: 4,
        //   name: "fourth-screen"
        // },
        // {
        //   index: 5,
        //   name: "fiveth-screen"
        // },
        // {
        //   index: 0,
        //   name: "min-fin-one"
        // },
        // {
        //   index: 6,
        //   name: "min-fin-two"
        // },
        // {
        //   index: 7,
        //   name: "min-fin-three"
        // },
        // {
        //   index: 1,
        //   name: "min-fin-four"
        // },
        // {
        //   index: 2,
        //   name: "min-fin-five"
        // },
        // {
        //   index: 2,
        //   name: "min-fin-seven"
        // },
        // {
        //   index: 9,
        //   name: "sixth-screen"
        // },
        // {
        //   index: 9,
        //   name: "seventh-screen"
        // },
        // {
        //   index: 9,
        //   name: "gruz"
        // },
        // {
        //   index: 9,
        //   name: "eticket"
        // },
        // {
        //   index: 2,
        //   name: "tenth-screen"
        // },
        // {
        //   index: 3,
        //   name: "eleventh-screen"
        // },
        // {
        //   index: 4,
        //   name: "twelfth-screen"
        // },
        // {
        //   index: 5,
        //   name: "thirteen-screen"
        // },
        // {
        //   index: 6,
        //   name: "first-screen"
        // },
        // {
        //   index: 6,
        //   name: "second-screen"
        // },
        // {
        //   index: 6,
        //   name: "nst-infra"
        // },
        // {
        //   index: 7,
        //   name: "third-screen"
        // },
        // {
        //   index: 8,
        //   name: "vols"
        // },
      ],
      page_index: 0,
      page_number: 1,
      nextBtn: true,
      prevBtn: true,
      nextRouteName: '',
      prevRouteName: ''
    }
  },
  watch: {
    '$route': {
      handler: function (route) {
        this.page_number = route.meta.pageNUmber;
        this.page_index = route.meta.pageNUmber - 1;

        let routeName = route.name
        let currentRoute = this.page_list.filter(function (el) {
          return el.name === routeName;
        });

        this.nextRouteName = this.page_list.filter(function (el) {
          return el.index === currentRoute[0].index + 1;
        })[0]?.name;

        this.prevRouteName = this.page_list.filter(function (el) {
          return el.index === currentRoute[0].index - 1;
        })[0]?.name;

        this.nextBtn = !!this.nextRouteName
        this.prevBtn = !!this.prevRouteName
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    goPusg(route_name) {
      this.$router.push({name: route_name})
    },
    next_page() {
      this.goPusg(this.nextRouteName);
    },
    previous_page() {
      this.goPusg(this.prevRouteName);

    },

    change_event(id){
      this.$emit("eventButton", id)
    }


  },
  mounted() {
    document.onkeydown = (e) => {
      e = e || window.event;
      if (e.keyCode === 38) {
        this.next_page()
      } else if (e.keyCode === 40) {
        this.previous_page()
      } else if (e.keyCode === 37) {
        this.previous_page()
      } else if (e.keyCode === 39) {
        this.next_page()
      }
    };

  }

}
</script>


<style scoped lang="scss">
.page_number_box {
  position: absolute;
  top: 160px;
  right: 0;
  width: 80px;
  height: 40px;
  background: #2F5597;
  z-index: 12;
  font-size: 20px;
  color: white;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.control_button_panel {
  bottom: 20px;
  right: 30px;
  //cursor: pointer;
  //border: 1px solid #27272a;
  padding: 5px 20px;
  border-radius: 8px;
  font-size: 24px;
  z-index: 10;
}
</style>
