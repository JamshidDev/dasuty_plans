<template>


  <div class="information-card shadow-1 px-4 py-2 overflow-y-auto overflow-x-hidden">
    <div class="grid">
      <div class="col-12">
        <h3 class="m-0">Умумий маълумот</h3>
      </div>
      <div v-for="item in general_data" :key="item.id" class="col-6">
        <div @click.self="control_overall($event ,item.id)" :class="[2,6].includes(item.id)? 'bg-blue-100' : 'bg-gray'" class="card_box p-3 border-round shadow-1 min-h-full"
             >
          <div v-if="[5,4, 3].includes(item.id)" class="flex justify-content-between">
            <div class="title font-bold">
              {{ item.value }}
            </div>
            <span>
            <InputSwitch @change="change_map(item.show_map, item.id)" v-model="item.show_map"/>
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

  <OverlayPanel ref="overal_ref" style="width:400px">
    <div class="grid">
      <div v-for="item in overall_list" :key="item.id" class="col-12 py-1">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full">
            <span><i class='bx bxs-circle text-sm mr-2'></i> <Checkbox @change="control_overall2"
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
      <div v-for="item in sorted_station_list" :key="item.id" class="col-6 py-1">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full">
            <span><i class='bx bxs-circle text-sm mr-2'></i> {{ item.label }}</span>
            <span class="font-bold">{{ item.value }}</span>
          </div>
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
        },
        {
          id: 1,
          label: "Хаваст",
          value: ``,
        },
        {
          id: 2,
          label: "Қўқон",
          value: ``,
        },
        {
          id: 3,
          label: "Бухоро",
          value: ``,
        },
        {
          id: 4,
          label: "Қарши ",
          value: ``,
        },
        {
          id: 5,
          label: "Термез",
          value: ``,
        },

        {
          id: 6,
          label: "Охангарон",
          value: ``,
        },
        {
          id: 7,
          label: "Мароқанд",
          value: ``,
        },
        {
          id: 8,
          label: "Охунбобоев",
          value: ``,
        },
        {
          id: 9,
          label: "Қўнғирот",
          value: ``,
        },
        {
          id: 10,
          label: "Мискен",
          value: ``,
        },
        {
          id: 11,
          label: "Нукус",
          value: ``,
        },
        {
          id: 12,
          label: "Бинокор",
          value: ``,
        },
        {
          id: 13,
          label: "Навоий",
          value: ``,
        },
        {
          id: 14,
          label: "Қумқўрғон",
          value: ``,
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
          label: "Манёр тепловоз ",
          value: `199 та`,
        }, {
          id: 4,
          label: "Электропоездлар ",
          value: `14 та`,
        },

      ],
      overall_list: [],
      sorted_station: false,
      selected_data_id: null,
      status: false,
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
      }

      if(id === 4){
        let anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', 'https://uzdepo.uz/uzel/lokomotiv.php?depo=%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD');
        anchorTag.setAttribute('target', '_blank');
        document.body.appendChild(anchorTag);

        anchorTag.click();
      }
    },

    control_overall2(event) {
      this.$refs.overall2_ref.toggle(event);

      if(this.sorted_station){
        this.$emit("changeMap", 'sorts');
      }else{
        this.$emit("changeMap", 'mains');
      }
    },

    change_map(event, id) {
      if (!event) {
        this.$emit("changeMap", 'mains');
      } else {
        if (id === 4) {
          this.$emit("changeMap", 'tchs');
        } else if (id === 5) {
          this.$emit("changeMap", 'vchds');
        }
        else if (id === 3) {
          this.$emit("changeMap", 'stiks');
        }
      }

    }


  }
}
</script>

<style scoped lang="scss">

.information-card {
  width: 500px;
  height: 520px;
  position: absolute;
  transform-origin: 0px 0px;
  transform: scale(1) translate(0px, 0px);
  bottom: 0px;
  left: 0px;
  border: 1px solid green;
  z-index: 10;
  background: #ffffff;
  background-filter: blur(12px);
  border-radius: 12px;

}
.bg-gray{
  background:#F5F5F5
}
</style>