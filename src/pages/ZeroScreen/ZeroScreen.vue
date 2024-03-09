<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
<!--    <div class="flex w-full absolute top-0 left-0 justify-content-end">-->
<!--      -->
<!--    </div>-->
    <div class="flex gap-4 text-lg font-normal absolute w-full z-5" style="top:10px; left:10px;">
      Ўзбекистон темир йўллари харитаси
<!--    X:{{pointX}} Y:{{pointY}} Zoom:{{scale}}-->
    </div>
    <div id="zoom-container" ref="zoom_container" class="w-full border-round relative"
         style="height:88vh; overflow: hidden;">
      <div id="trigger-zoom-element" ref="trigger_zoom_element"
           class="trigger-zoom-element border-round   shadow-1 flex justify-content-center align-items-center cursor-pointer"
           style="width:100%; height:90vh;">
        <RailwayMap ref="railway_map_ref"></RailwayMap>
        <LottieIcon class="potok2_icon icon_position"></LottieIcon>
      </div>

    </div>

    <DialogContent ref="dialog_ref" @closeDialog="closed_modal"></DialogContent>
    <InformationCard @listenMap="listen_map($event)"  @changeCard="change_card($event)" @changeMap="change_visible($event)" v-if="general_info_show"></InformationCard>

  </div>

</template>
<script>

import RailwayMap from "@/components/MapSVG/RailwayMap.vue";
import DialogContent from "@/components/DialogContent/DialogContent.vue";
import InformationCard from "@/components/InformationCard/InformationCard.vue";
import Schema_One from "@/components/StationSchema/Schema_One.vue";
import LottieIcon from "@/components/LottieIcon/LottieIcon.vue";


export default {
  components: {
    Schema_One,
    InformationCard,
    RailwayMap,
    DialogContent,
    LottieIcon,

  },

  data() {
    return {
      panning: false,
      scale: 1,
      pointX: 0,
      pointY: 0,
      start: {
        x: 0,
        y: 0,
      },
      zoo_element: null,
      zoo_element_container: null,
      general_info_show:true,
      active_map:true,

    }
  },
  methods: {
    go_push_element(pointX, pointY, scale) {
      this.pointX = pointX;
      this.pointY = pointY;
      this.scale = scale;
      this.zoo_element.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`
    },

    change_visible(id){
      this.$refs.railway_map_ref.change_visible(id);
    },

    change_card(map){
      this.active_map = map;
      if(map){
        this.go_push_element(-28, -80, 1.2);
        this.$refs.railway_map_ref.clear_marked();
      }
      this.$refs.railway_map_ref.all_hidden();
    },

    listen_map(data){
      this.$refs.railway_map_ref.uchastkaControl(data.id);
      this.go_push_element(data.x, data.y, data.zoom);
    },

    closed_modal() {
      this.general_info_show=true;
      this.go_push_element(-28, -80, 1.2);
    },

    watch_potok(){
      let element_dot = document.getElementById('g_container');
      let element_icon = document.querySelector('.potok2_icon');
      // element_dot.insertBefore(element_icon, element_dot.firstChild);
      element_dot.appendChild(element_icon);
      console.log(element_dot)

    }
  },

  mounted() {

    // this.watch_potok();


    // let zoo_element = this.$refs.trigger_zoom_element;
    let zoo_element = this.$refs.trigger_zoom_element;
    let zoo_element_container = this.$refs.zoom_container;
    this.zoo_element = this.$refs.trigger_zoom_element;
    this.zoo_element_container = this.$refs.zoom_container;

    zoo_element.addEventListener('mousedown', (event) => {
      event.preventDefault();
      this.start = {
        x: event.clientX - this.pointX,
        y: event.clientY - this.pointY,
      };
      this.panning = true;
    });
    zoo_element.addEventListener('mouseup', (event) => {
      event.preventDefault();
      this.panning = false;
    });
    zoo_element.addEventListener('mousemove', (event) => {
      event.preventDefault();
      if (!this.panning) {
        return;
      }
      this.pointX = (event.clientX - this.start.x);
      this.pointY = (event.clientY - this.start.y);
      zoo_element.style.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`

    });
    zoo_element.addEventListener('wheel', (event) => {
      event.preventDefault();
      const xs = (event.clientX - this.pointX) / this.scale;
      const ys = (event.clientY - this.pointY) / this.scale;
      const delta = (event.wheelDelta ? event.wheelDelta : -event.deltaY);
      delta > 0 ? this.scale *= 1.2 : this.scale /= 1.2;
      this.pointX = event.clientX - xs * this.scale;
      this.pointY = event.clientY - ys * this.scale;

      console.log(`pointX: ${this.pointX}`)
      console.log(`pointY: ${this.pointY}`)
      console.log(`scale: ${this.scale}`)
      zoo_element.style.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`;
    });

    zoo_element.addEventListener("mouseout", (event) => {
      this.panning = false;
    });
    zoo_element_container.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    })
    document.body.style.overflow = "hidden";
    // zoo_element_container.addEventListener("mouseover", (event) => {
    //   event.preventDefault();
    //   document.body.style.overflow = "hidden";
    // })
    // zoo_element_container.addEventListener("mouseout", (event) => {
    //   event.preventDefault();
    //   document.body.style.overflow = "auto";
    // })

    // setTimeout(()=>{
    //   this.go_push_element(-383, -122,2);
    //   this.$refs.dialog_ref.open_dialog()
    // }, 2000)
    // this.go_push_element(800, 300,2)



    let qongirotRJU = document.getElementById("qongirotRJU");
    let buxoroRJU = document.getElementById("buxoroRJU");
    let qarshiRJU = document.getElementById("qarshiRJU");
    let termizRJU = document.getElementById("termizRJU");
    let toshkentRJU = document.getElementById("toshkentRJU");
    let kokandRJU = document.getElementById("kokandRJU");
    qongirotRJU.addEventListener("click", () => {
      if(this.active_map){
        this.general_info_show=false;
        this.go_push_element(-420, -227, 2.3);
        this.$refs.dialog_ref.open_dialog(3);
      }

    })
    buxoroRJU.addEventListener("click", () => {
      if(this.active_map){
        this.general_info_show=false;
        this.go_push_element(-911, -419, 2);
        this.$refs.dialog_ref.open_dialog(2)
      }

    })
    qarshiRJU.addEventListener("click", () => {
      if(this.active_map){
        this.general_info_show=false;
        this.go_push_element(-2731, -1729, 3.5);
        this.$refs.dialog_ref.open_dialog(4)
      }

    })
    termizRJU.addEventListener("click", () => {
      if(this.active_map){
        this.general_info_show=false;
        this.go_push_element(-3031, -1999, 3.5);
        this.$refs.dialog_ref.open_dialog(5)
      }

    })
    toshkentRJU.addEventListener("click", () => {
      if(this.active_map){
        this.general_info_show=false;
        this.go_push_element(-2365, -561, 2.5);
        this.$refs.dialog_ref.open_dialog(0)
      }
    })
    kokandRJU.addEventListener("click", () => {
      if(this.active_map){
        this.general_info_show=false;
        this.go_push_element(-3603, -778, 3);
        this.$refs.dialog_ref.open_dialog(1)
      }
    })


    this.go_push_element(-28, -80, 1.2);
    // this.go_push_element(-1000, -1000, 1);

  }
}
</script>
<style scoped lang="scss">
.trigger-zoom-element {
  transform-origin: 0 0;
  transform: scale(1) translate(0px, 0px);
  transition: all 0.5s ease-out;
  cursor: grab;
}
.icon_position{
  position: absolute !important;
  z-index:999 !important;
  top:216px;
  right:674px;
}


</style>
