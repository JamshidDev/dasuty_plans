<template>
    <div class="w-full min-h-full relative flex justify-content-center align-items-center">
        <!--    <div class="flex w-full absolute top-0 left-0 justify-content-end">-->
        <!--      -->
        <!--    </div>-->
        <TitleText title="Ўзбекистон темир йўллари харитаси"></TitleText>
<!--            <div class="flex gap-4 text-lg font-normal absolute z-5" style="top:10px; left:10px; width:400px">-->

<!--                    X:{{pointX}} Y:{{pointY}} Zoom:{{scale}}-->
<!--            </div>-->
        <div id="zoom-container" ref="zoom_container" class="w-full border-round relative"
             style="height:88vh; overflow: hidden;">
            <div id="trigger-zoom-element" ref="trigger_zoom_element"
                 class="trigger-zoom-element border-round   shadow-1  cursor-pointer"
                 style="width:100%; height:90vh;">
                <!--        flex justify-content-center align-items-center-->
                <RailwayMap ref="railway_map_ref" @moveMap="move_map($event)"></RailwayMap>
                <LottieIcon class="potok1_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok2_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok3_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok4_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok5_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok6_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok7_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok8_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok9_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok10_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok11_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok12_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok13_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok14_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <LottieIcon class="potok15_icon icon_position"
                            :style="{visibility:show_patok_icon? 'visible':'hidden'}"></LottieIcon>
                <!--        <RiplleIcon class="ripple1_icon"></RiplleIcon>-->
            </div>

        </div>

        <DialogContent ref="dialog_ref" @closeDialog="closed_modal"></DialogContent>
        <OptikInfoModal v-if="optik_modal_visble"></OptikInfoModal>
        <SchemaButton v-show="show_button_schema && general_info_show"
                      @action_draw="draw_schema($event)"></SchemaButton>
        <span v-show="general_info_show">
        
      <InformationCard @changeTrainStation="draw_train_station($event)" ref="information_modal_ref"
                       @closeInfoMap="close_info_map()" @listenMap="listen_map($event)"
                       @changeCard="change_card($event)" @changeMap="change_visible($event)"></InformationCard>
    </span>
        <div v-if="$route.name ==='zero-screen'" class="fixed flex gap-2 absolute"
             style="bottom:10px; left:620px; z-index:10">
            <div v-if="general_info_show" @click="show_button_schema=!show_button_schema"
                 class="active:bg-blue-100 surface-card border-1 border-300 border-round cursor-pointer shadow-1 flex justify-content-center align-items-center"
                 style="width: 60px;
  height: 36px;">
                <i class='bx bx-collapse-alt text-500 text-2xl font-bold'></i>
            </div>
        </div>
    </div>

</template>
<script>

import RailwayMap from "@/components/MapSVG/RailwayMap.vue";
import DialogContent from "@/components/DialogContent/DialogContent.vue";
import InformationCard from "@/components/InformationCard/InformationCard.vue";
import Schema_One from "@/components/StationSchema/Schema_One.vue";
import LottieIcon from "@/components/LottieIcon/LottieIcon.vue";
import RiplleIcon from "@/components/LottieIcon/RiplleIcon.vue";
import SchemaButton from "@/components/TrainSchemaButton/SchemaButton.vue";
import TitleText from "@/components/TitleText/TitleText.vue";
import OptikInfoModal from "../../components/OptikInfoModal/OptikInfoModal.vue";

export default {
    components: {
        TitleText,
        SchemaButton,
        Schema_One,
        InformationCard,
        RailwayMap,
        DialogContent,
        LottieIcon,
        RiplleIcon,
        OptikInfoModal,

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
            general_info_show: true,
            active_map: true,
            optik_modal_visble:false,

            show_patok_icon: false,
            show_button_schema: false,

            switch_details: {
                wagon: false,
                depo: false,
                stik: false,
            },

        }
    },
    methods: {
        go_push_element(pointX, pointY, scale) {
            this.pointX = pointX;
            this.pointY = pointY;
            this.scale = scale;
            this.zoo_element.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`
        },
        change_visible(id) {
            this.$refs.railway_map_ref.change_visible(id);
            if (id === 'stiks') {
                this.show_patok_icon = !this.show_patok_icon;
            }
        },
        change_card(map) {
            this.active_map = map;
            this.show_patok_icon = false;
            if (map) {
                this.go_push_element(38.6, -103, 1.2);
                this.$refs.railway_map_ref.clear_marked();
            }
            this.$refs.railway_map_ref.all_hidden();
        },
        listen_map(data) {
            this.$refs.railway_map_ref.uchastkaControl(data.id);
            this.go_push_element(data.x, data.y, data.zoom);
        },
        closed_modal() {
            this.general_info_show = true;
            this.go_push_element(38.6, -103, 1.2);
        },
        move_map(data) {
            this.go_push_element(data.x, data.y, data.zoom);
            this.$refs.information_modal_ref.show_dialog(data.id);
        },
        close_info_map() {
            this.go_push_element(38.6, -60, 1.2);
        },


        draw_schema(action) {
            this.optik_modal_visble = action==='optik'

            if (action === 'old-train') {
	            this.go_push_element(-452, -343, 1.7);
	            this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.old_draw_train();
                this.$refs.dialog_ref.old_timeline_start();
            } else if (action === 'new-train') {
	            this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.new_draw_train();
                this.$refs.dialog_ref.new_timeline_start();
            } else if (action === 'close') {
	            this.go_push_element(38.6, -60, 1.2);
                this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.clear_all();
              this.$refs.railway_map_ref.all_hidden_train_station();
            } else if (action === 'route1') {
	            this.go_push_element(-791, -513, 2);
	            this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.test_draw_train();
	            this.$refs.dialog_ref.route1_timeline();
            } else if (action === 'route2') {
	            this.go_push_element(-791, -513, 2);
	            this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.route2_draw_train();
	            this.$refs.dialog_ref.route2_timeline();

            } else if (action === 'route3') {
	            this.go_push_element(-791, -513, 2);
	            this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.route3_draw_train();
	            this.$refs.dialog_ref.route3_timeline();
            } else if (action === 'route4') {
	            this.go_push_element(-791, -513, 2);
	            this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.route4_draw_train();
	            this.$refs.dialog_ref.route4_timeline();
            } else if (action === 'vokzals') {
	            this.go_push_element(38.6, -60, 1.2);
	            this.$refs.dialog_ref.close_timeline();
                this.$refs.railway_map_ref.show_train_station();
            }
            else if (action === 'optik') {
              this.go_push_element(38.6, -60, 1.2);
              this.$refs.dialog_ref.close_timeline();
              this.$refs.railway_map_ref.showAllPoints();
            }


        },

        draw_train_station(action) {
            if (action === 'vokzals') {
                this.$refs.railway_map_ref.show_train_station();
            } else {
                this.$refs.railway_map_ref.all_hidden_train_station();
            }
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
            if (this.active_map) {
                this.general_info_show = false;
                this.go_push_element(196, -60, 2);
                this.$refs.dialog_ref.open_dialog(3);
            }

        })
        buxoroRJU.addEventListener("click", () => {
            if (this.active_map) {
                this.general_info_show = false;
                this.go_push_element(-468, -353, 2);
                this.$refs.dialog_ref.open_dialog(2)
            }

        })
        qarshiRJU.addEventListener("click", () => {
            if (this.active_map) {
                this.general_info_show = false;
                this.go_push_element(-1848, -1574, 3.4);
                this.$refs.dialog_ref.open_dialog(4)
            }

        })
        termizRJU.addEventListener("click", () => {
            if (this.active_map) {
                this.general_info_show = false;
                this.go_push_element(-2320, -1898, 3.5);
                this.$refs.dialog_ref.open_dialog(5)
            }

        })
        toshkentRJU.addEventListener("click", () => {
            if (this.active_map) {
                this.general_info_show = false;
                this.go_push_element(-1580, -428, 2.5);
                this.$refs.dialog_ref.open_dialog(0)
            }
        })
        kokandRJU.addEventListener("click", () => {
            if (this.active_map) {
                this.general_info_show = false;
                this.go_push_element(-3706, -866, 3.5);
                this.$refs.dialog_ref.open_dialog(1)
            }
        })


        this.go_push_element(38.6, -60, 1.2);
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

.icon_position {
    position: absolute !important;
    z-index: 999 !important;
    //visibility:hidden !important;

}

.potok1_icon {
    top: 320px;
    right: 928px;
}

.potok2_icon {
    top: 220px;
    right: 880px;
}

.potok3_icon {
    top: 256px;
    right: 560px;
}


.potok4_icon {
    top: 78px;
    left: 63px;
    transform: rotate(-60deg);
}

.potok5_icon {
    top: 328px;
    left: 280px;
    transform: rotate(180deg);
}

.potok6_icon {
    top: 426px;
    left: 440px;
    transform: rotate(180deg);
}

.potok7_icon {
    top: 570px;
    left: 580px;
    transform: rotate(180deg);
}

.potok8_icon {
    top: 640px;
    left: 720px;
    transform: rotate(180deg);
}

.potok9_icon {
    top: 700px;
    left: 780px;
    transform: rotate(180deg);
}

.potok9_icon {
    top: 700px;
    left: 780px;
    transform: rotate(180deg);
}

.potok10_icon {
    top: 746px;
    left: 883px;
    transform: rotate(180deg);
}

.potok11_icon {
    top: 704px;
    left: 940px;
    transform: rotate(120deg);
}

.potok12_icon {
    top: 570px;
    right: 904px;
    transform: rotate(120deg);
}

.potok13_icon {
    top: 450px;
    right: 838px;
    transform: rotate(180deg);
}

.potok14_icon {
    top: 416px;
    right: 740px;
    transform: rotate(180deg);
}

.potok15_icon {
    top: 424px;
    right: 488px;
    transform: rotate(180deg);
}

.ripple1_icon {
    position: absolute;
    top: 274px;
    right: 1244px;
    transform: rotate(180deg);
}


</style>
