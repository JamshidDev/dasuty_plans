<template>


  <div class="information-card shadow-2 px-4 py-2 overflow-y-auto overflow-x-hidden">
    <div class="grid">
      <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-200">
        <div class="m-0 font-bold">{{active_card? 'Умумий маълумот' : '14 та диспетчерлик участкалари'}}</div>
        <div>
          <i @click="change_card()" class='bx bx-refresh text-4xl cursor-pointer'></i>
        </div>
      </div>

      <div class="col-12" v-if="active_card">
        <div class="grid">
          <div v-for="item in general_data" :key="item.id" class="col-4">
            <div @click="control_overall($event ,item.id)" :class="[2,6,8].includes(item.id)? 'bg-blue-100' : 'bg-gray'"
                 class="card_box p-2 border-round shadow-1 min-h-full"
            >
              <div v-if="[5,4, 3].includes(item.id)" class="flex justify-content-between">
                <div class="title font-bold">
                  {{ item.value }}
                </div>
                <span>
            <InputSwitch @click.stop @change="change_map(item.show_map, item.id)" v-model="item.show_map"/>
          </span>
              </div>
              <div v-else>
                <div class="title font-bold">
                  {{ item.value }}
                </div>
              </div>
              <div class="my-3">

              </div>
              <div class="text-sm">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12" v-else>
        <div class="grid pt-2 pb-6 ">
          <div v-for="item in station_line_list" :key="item" class="col-12">
            <div class="flex w-full gap-6 align-items-center justify-content-between">
             <div class="flex gap-6 align-items-center">
               <div class="dashshed_line shadow-2" :style="{  'border-bottom': `4px solid ${item.color}`}"></div>
               <div>{{ item.name }}</div>
             </div>
              <Checkbox @change="change_checkbox($event, item.map.x, item.map.y, item.map.zoom,)" v-model="selected_id"   :value="item.id" />
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>

  <OverlayPanel ref="overal_ref" style="width:400px">
    <div class="grid">
      <div v-for="item in overall_list" :key="item.id" class="col-12 py-1">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full">
            <span><i class='bx bxs-circle text-sm mr-2'></i>
              <Checkbox @change="control_overall2"
                        class="mr-2 p-inputtext-sm"
                        v-if="item.id ===1 && selected_data_id ===6"
                        v-model="sorted_station"
                        :binary="true"/> {{ item.label }}</span>
            <span class="font-bold">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </OverlayPanel>

  <OverlayPanel ref="overall2_ref" style="width:400px">
    <div class="grid">
      <div v-for="item in sorted_station_list" :key="item.id" class="col-6 py-1 ">
        <div class="flex flex-column">
          <a :href="item.path" download class="flex justify-content-between border-round min-h-full no-underline">
            <span><i class='bx bxs-circle text-sm mr-2'></i> {{ item.label }}</span>
            <span class="font-bold">{{ item.value }}</span>
          </a>
        </div>
      </div>
    </div>
  </OverlayPanel>
</template>

<script>
export default {
  name: "InformationCard",
  data() {
    return {
      general_data: [
        {
          id: 0,
          label: `Мавжуд темир йўл узунлиги`,
          value: `7488,9 км`,
        },
        {
          id: 1,
          label: `Электрлаштирилган йўл `,
          value: `3328,73 км (45%)`,
        },
        {
          id: 2,
          label: `Мавжуд локомотивлар сони `,
          value: `471 та`,
        },
        {
          id: 6,
          label: `Станциялар сони `,
          value: `270 та`,
        },
        {
          id: 3,
          label: `Давлатлараро чегара пункти `,
          value: `14 та`,
        },
        {
          id: 4,
          label: `Локомотив деполар сони `,
          value: `8 та`,
          show_map: false,
        }, {
          id: 5,
          label: `Вагон деполари сони `,
          value: `6 та`,
          show_map: false,
        },
        {
          id: 7,
          label: `Ходимлар сони `,
          value: `71140 нафар`,
        },
        {
          id: 8,
          label: `Мавжуд вагонлар сони `,
          value: `19036 та`,
        },


      ],
      visible: true,
      station_list: [
        {
          id: 0,
          label: "Йўловчи станциялар",
          value: "4",
        },
        {
          id: 1,
          label: "Саралаш станциялари",
          value: "15 ",
        }, {
          id: 2,
          label: "Участка станцияси",
          value: "11",
        },
        {
          id: 3,
          label: "Юк станциялари",
          value: "60",
        },
        {
          id: 4,
          label: "Оралиқ станциялари",
          value: "133",
        },
        {
          id: 5,
          label: "Разъездлар",
          value: "57",
        },

      ],
      sorted_station_list: [
        {
          id: 0,
          label: "Чуқурсой",
          value: ``,
          path: './schema/stations/Чукурсай 2.svg',
        },
        {
          id: 1,
          label: "Хаваст",
          value: ``,
          path: './schema/stations/Ховос.svg',
        },
        {
          id: 2,
          label: "Қўқон",
          value: ``,
          path: './schema/stations/Учкудук-1.svg',
        },
        {
          id: 3,
          label: "Бухоро",
          value: ``,
          path: './schema/stations/Бухоро 1.svg'
        },
        {
          id: 4,
          label: "Қарши ",
          value: ``,
          path: './schema/stations/КАРШИ.svg'
        },
        {
          id: 5,
          label: "Термез",
          value: ``,
          path: './schema/stations/Термиз.svg'
        },

        {
          id: 6,
          label: "Охангарон",
          value: ``,
          path: './schema/stations/Ховос.svg'
        },
        {
          id: 7,
          label: "Мароқанд",
          value: ``,
          path: './schema/stations/МАРОКАНД.svg'
        },
        {
          id: 8,
          label: "Охунбобоев",
          value: ``,
          path: './schema/stations/Охунбобоев.svg'
        },
        {
          id: 9,
          label: "Қўнғирот",
          value: ``,
          path: './schema/stations/КУНГРАД.svg'
        },
        {
          id: 10,
          label: "Мискен",
          value: ``,
          path: './schema/stations/Мискин.svg'
        },
        {
          id: 11,
          label: "Нукус",
          value: ``,
          path: './schema/stations/НУКУС.svg'
        },
        {
          id: 12,
          label: "Бинокор",
          value: ``,
          path: './schema/stations/Ховос.svg'
        },
        {
          id: 13,
          label: "Навоий",
          value: ``,
          path: './schema/stations/Навоий (2).svg'
        },
        {
          id: 14,
          label: "Қумқўрғон",
          value: ``,
          path: './schema/stations/Қумқўрғон.svg'
        },
      ],
      locomotive_list: [
        {
          id: 0,
          label: "Электровозлар ",
          value: `154 та`,
        },
        {
          id: 1,
          label: "Магистрал тепловоз  ",
          value: `104 та`,
        },
        {
          id: 2,
          label: "Манёвр тепловоз ",
          value: `199 та`,
        }, {
          id: 4,
          label: "Электропоездлар ",
          value: `14 та`,
        },

      ],
      wagon_list: [
        {
          id: 0,
          label: "ВЧД Бухоро ",
          value: `6430 та`,
        },
        {
          id: 1,
          label: "ВЧД Карши",
          value: `5295 та`,
        },
        {
          id: 2,
          label: "ВЧД Коканд",
          value: `4331 та`,
        }, {
          id: 4,
          label: "ВЧД Тошкент ",
          value: `2980 та`,
        },

      ],
      overall_list: [],
      selected_id: null,
      selected_data_id: null,
      status: false,
      active_card: true,
      sorted_station:false,


      station_line_list: [
        {
          id: 'uchas11',
          name: '- узел Узбекистан - Сарыагач',
          color: '#996633',
          map:{
            x:-3665,
            y:-987,
            zoom:4,
          }
        },
        {
          id: 'uchas10',
          name: '- Даштабад - Узбекистан - Далагузар и Дустлик',
          color: '#cccccc',
          map:{
            x:-2818,
            y:-1088,
            zoom:3.6,
          }
        },
        {
          id: 'uchas12',
          name: '- центр Салар - Ходжикент, Тукимачи - Ангрен',
          color: '#faff81',
          map:{
            x:-4155,
            y:-997,
            zoom:4.3,
          }
        },
        {
          id: 'uchas9',
          name: '- Мароканд - Даштабад',
          color: '#ff99cc',
          map:{
            x:-4273,
            y:-2183,
            zoom:5,
          }
        },
        {
          id: 'uchas13',
          name: '- Ангрен-Пап Коканд-Хаваст',
          color: '#000000',
          map:{
            x:-2627,
            y:-791,
            zoom:3,
          }
        },
        {
          id: 'uchas14',
          name: '- узел Коканд (Коканд - Андижан - Карасу)',
          color: '#9933cc',
          map:{
            x:-5030,
            y:-1329,
            zoom:4.3,
          }
        },
        {
          id: 'uchas5',
          name: '- Фарап - Навои - Мароканд',
          color: '#ffcc00',
          map:{
            x:-1430,
            y:-1170,
            zoom:3,
          }
        },
        {
          id: 'uchas3',
          name: '- Мискен - Учкудук - Тинчлик',
          color: '#cc3399',
          map:{
            x:-1175,
            y:-825,
            zoom:3,
          }
        },
        {
          id: 'uchas2',
          name: '- Кунград - Мискен - Ургенч',
          color: '#00ccff',
          map:{
            x:-554,
            y:-551,
            zoom:3,
          }
        },
        {
          id: 'uchas1',
          name: '- Кунград - Каракалпакстан',
          color: '#6600cc',
          map:{
            x:-183,
            y:-272,
            zoom:3,
          }
        },
        {
          id: 'uchas6',
          name: '- Бухара - Карши - Мароканд - Ташгузар',
          color: '#33cc66',
          map:{
            x:-2140,
            y:-1592,
            zoom:3.6,
          }
        },

          {
          id: 'uchas7',
          name: '- Ташгузар-Кумгурган',
          color: '#6699ff',
            map:{
              x:-2444,
              y:-1891,
              zoom:3.6,
            }
        }, {
          id: 'uchas8',
          name: '- Болдырь -Термез Кудукли и Талимарждан - Карши',
          color: '#ff0000',
          map:{
            x:-2459,
            y:-1991,
            zoom:3.6,
          }
        },
        {
          id: 'uchas4',
          name: '- Бухара - Мискин',
          color: '#000066',
          map:{
            x:-1539,
            y:-1273,
            zoom:3.6,
          }
        },

      ]
    }
  },
  methods: {
    control_overall(event, id) {
      this.selected_data_id = id;
      this.sorted_station = false;
      if (id === 6) {
        this.overall_list = this.station_list;
        this.$refs.overal_ref.toggle(event);
      } else if (id === 2) {
        this.overall_list = this.locomotive_list;
        this.$refs.overal_ref.toggle(event);
      } else if(id === 8){
        this.overall_list = this.wagon_list;
        this.$refs.overal_ref.toggle(event);
      }

      if (id === 4) {
        let anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', 'https://uzdepo.uz/uzel/lokomotiv.php?depo=%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD');
        anchorTag.setAttribute('target', '_blank');
        document.body.appendChild(anchorTag);

        anchorTag.click();
      }
    },

    control_overall2(event) {
      this.$refs.overall2_ref.toggle(event);

      this.$emit("changeMap", 'sorts');
    },

    change_card() {
      console.log("pl")
      this.active_card = !this.active_card;
      this.$emit("changeCard",this.active_card );

      if(!this.active_card){
            this.selected_id = null;
      }else{
        this.general_data[4].show_map = false;
        this.general_data[5].show_map = false;
      }


    },
    change_checkbox(value, x,y,zoom){
      let data ={
        id:value.target.value,
        x,
        y,
        zoom,
      }
      this.selected_id = [value.target.value];
      this.$emit('listenMap', data)
    },

    change_map(event, id) {
      if (id === 4) {
        this.$emit("changeMap", 'tchs');
      } else if (id === 5) {
        this.$emit("changeMap", 'vchds');
      } else if (id === 3) {
        this.$emit("changeMap", 'stiks');
      }
    }


  }
}
</script>

<style scoped lang="scss">

.information-card {
  width: 800px;
  height: 340px;
  position: absolute;
  transform-origin: 0 0;
  transform: scale(1) translate(0px, 0px);
  bottom: 0;
  left: 20px;
  border: 1px solid #d3d3d3;
  z-index: 10;
  background: #ffffff;
  background-filter: blur(12px);
  border-radius: 12px;

}

.bg-gray {
  background: #F5F5F5
}

.dashshed_line {
  width: 100px;
  height: 0;
  background: white;
}
</style>