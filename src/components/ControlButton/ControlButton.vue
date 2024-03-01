<template>
  <div class="page_number_box">
    <span>{{page_number}}</span>
  </div>
  <div class="fixed flex gap-4 control_button_panel">
    <div @click="previous_page()" class="premium_bg" style="width: 80px;
  height: 40px;">
      <i class='bx bx-chevron-left text-white text-4xl'></i>
    </div>
    <div @click="$router.push({name : 'eighth-screen'})" class="premium_bg" style="width: 80px;
  height: 40px;">
      <i class='bx bx-home text-white text-4xl'></i>
    </div>
    <div @click="next_page()" class="premium_bg " style="width: 80px;
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
        {
          index: 8,
          name: "eighth-screen"
        },
        {
          index: 4,
          name: "fourth-screen"
        },
        {
          index: 5,
          name: "fiveth-screen"
        },
        {
          index: 0,
          name: "min-fin-one"
        },
        {
          index: 6,
          name: "min-fin-two"
        },
        {
          index: 7,
          name: "min-fin-three"
        },
        {
          index: 1,
          name: "min-fin-four"
        },
        {
          index: 2,
          name: "min-fin-five"
        },
        {
          index: 2,
          name: "min-fin-seven"
        },
        {
          index: 3,
          name: "zero-screen"
        },
        {
          index: 9,
          name: "sixth-screen"
        },
        {
          index: 9,
          name: "seventh-screen"
        },
        {
          index: 9,
          name: "eticket"
        },
        {
          index: 9,
          name: "tenth-screen"
        },
        {
          index: 9,
          name: "first-screen"
        },
        {
          index: 9,
          name: "second-screen"
        },
        {
          index: 9,
          name: "third-screen"
        },
        {
          index: 9,
          name: "nst-infra"
        },
      ],
      page_index: 0,
      page_number:1,
    }
  },
  watch: {
    '$route': {
      handler: function(route) {
        console.log(route)
      this.page_number = route.meta.pageNUmber;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    goPusg(route_name) {
      console.log(route_name)
      this.$router.push({name: route_name})
    },
    next_page() {
      if (this.page_index <= this.page_list.length - 2) {
        this.page_index = this.page_index + 1;

      } else {
        this.page_index = 0;
      }
      let route_name = this.page_list[this.page_index].name;
      this.goPusg(route_name);
    },
    previous_page() {
      if (this.page_index >= 1) {
        this.page_index = this.page_index - 1;

      } else {
        this.page_index = this.page_list.length - 1;
      }
      let route_name = this.page_list[this.page_index].name;
      this.goPusg(route_name);

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
.page_number_box{
  position:absolute;
  top: 90px;
  right:0px;
  width:80px;
  height: 40px;
  background: #2F5597;
  z-index: 12;
  font-size:20px;
  color: white;
  display:flex;
  font-weight: bold;
  justify-content:center;
  align-items:center;
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