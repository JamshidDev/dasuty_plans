<template>
  <div class="fixed flex gap-4 control_button_panel">
    <div @click="previous_page()" class="btn-circle_box">
      <i class='bx bx-chevron-left text-white text-4xl'></i>
    </div>
    <div @click="next_page()" class="btn-circle_box">
      <i class='bx bx-chevron-right text-white text-4xl'></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page_list:[
        {
          index:0,
          name:"zero-screen"
        },
        {
          index:1,
          name:"first-screen"
        },
        {
          index:2,
          name:"second-screen"
        },
        {
          index:3,
          name:"third-screen"
        },
        {
          index:4,
          name:"fourth-screen"
        },
        {
          index:5,
          name:"fiveth-screen"
        },

        {
          index:6,
          name:"sixth-screen"
        },

        {
          index:7,
          name:"seventh-screen"
        },
        {
          index:8,
          name:"eighth-screen"
        },




      ],
      page_index:0,
    }
  },
  methods: {
    goPusg(route_name) {
      console.log(route_name)
      this.$router.push({name: route_name})
    },
    next_page(){
      if(this.page_index<=this.page_list.length-2){
        this.page_index =this.page_index +1;

      }else{
        this.page_index =0;
      }
      let route_name = this.page_list[this.page_index].name;
      this.goPusg(route_name);
    },
    previous_page(){
      if(this.page_index>=1){
        this.page_index =this.page_index -1;

      }else{
        this.page_index =this.page_list.length-1;
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
$primary: #2700ff;
.btn-circle_box {
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
  cursor: pointer;

  background: url('http://api.thumbr.io/whitenoise-354x370.png?background=ffffff00&noise=ffffff&density=40&opacity=4'), rgba(white, 0.01);
  transition: 0.5s ease-in-out;
  transition-property: background, text-shadow;

  backdrop-filter: blur(0.333em);
  border-radius: 1em;

  font-family: inherit;
  text-align: center;
  letter-spacing: 0.05em;
  color: white;

  //text-shadow: 0 0.01em 0.2em rgba(#e3deff, 0.333),
  //0 0.01em 0.5em rgba(#e3deff, 0.25),;
  box-shadow: inset 0 0.01em 0.4em rgba(227, 222, 255, 0.2), inset 0 0.04em 0.18em rgba(154, 146, 210, 0.3), inset 0 0.98em 1em rgb(24 24 24), inset 0 -0.82em 0.68em -0.64em rgba(96, 68, 144, 0.3), inset 0 0.07em 0.11em -0.04em white, inset 0 0.39em 0.56em -0.36em rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    background: rgba($primary, 0.25);
    text-shadow: 0 0.01em 0.2em rgba(lighten($primary, 32), 1),
    0 0.01em 1em rgba(lighten($primary, 32), 1),;

    &:before {
      transform: translate3d(100%, 0, 0) scale3d(1, 1, 1);
    }
  }


}

.control_button_panel {
  bottom: 20px;
  right: 30px;
  //cursor: pointer;
  //border: 1px solid #27272a;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 24px;
  z-index: 10;
}
</style>