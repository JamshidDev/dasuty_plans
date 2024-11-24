<template>


  <div class="information-card shadow-2 px-4 py-2  overflow-hidden">
    <div class="grid">
      <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-200">

        <div class="m-0 font-bold text-sm">{{ active_card ? $t('SecondPage.AllInfo') : $t('SecondPage.CountDisp') }}
        </div>
        <div>
          <i @click="change_card()" class='bx bx-refresh text-2xl cursor-pointer font-bold'></i>
        </div>
      </div>
      <div class="col-12">
        <div class="grid overflow-y-auto overflow-x-hidden px-1" style="height:360px">
          <div class="col-12 px-0 pb-2" v-show="active_card">
            <div class="grid">
              <div v-for="item in general_data" :key="item.id" class="col-4 cursor-pointer">
                <div @click="control_overall($event ,item.id)"
                     :class="[2,6,8,5,7,3,0].includes(item.id)? 'bg-blue-100 border-blue-200 border-1 ' : 'bg-gray'"
                     class="card_box p-2 border-round shadow-1 min-h-full "
                >
                  <span v-show="[5,4, 3].includes(item.id)">
                    <div  class="flex justify-content-between">
                    <div class="title font-bold">
                      <NumberAnimation :amount="item.value"></NumberAnimation>
                      <span> {{ item.extension_value }}</span>
                    </div>
                    <span>
                      <InputSwitch @click.stop @change="change_map(item.show_map, item.id)" v-model="item.show_map"/>
                     </span>
                  </div>
                  </span>
                  <span v-show="![5,4, 3].includes(item.id)">
                    <div>
                    <div class="title text-sm font-bold">
                      <NumberAnimation :amount="item.value"></NumberAnimation>
                      <span>{{ item.extension_value }}</span>
                    </div>
                  </div>
                  </span>
                  <div class="text-sm">
                    {{ item.label }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12" v-show="!active_card">
            <div class="grid pt-2 pb-6">
              <div v-for="item in station_line_list" :key="item" class="col-12">
                <div class="flex w-full gap-2 align-items-center justify-content-between">
                  <div class="flex gap-6 align-items-center">
                    <div class="dashshed_line shadow-2" :style="{  'border-bottom': `3px solid ${item.color}`}"></div>
                    <div class="text-sm font-bold">{{ item.name }}</div>
                  </div>
                  <Checkbox @change="change_checkbox($event, item.map.x, item.map.y, item.map.zoom,)"
                            v-model="selected_id" :value="item.id"/>
                </div>
              </div>
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
            <span :class="item.id ===15 && 'text-blue-500'" @click="open_modal($event, item.id)" ><i class='bx bxs-circle text-sm mr-2'></i>
              <Checkbox @change="control_overall2($event, item.id)"
                        class="mr-2 p-inputtext-sm"
                        v-if="[1,6].includes(item.id) && selected_data_id ===6"
                        v-model="item.active"
                        :binary="true" /> <span class="cursor-pointer">{{ item.label }}</span></span>
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
  <OverlayPanel ref="overall3_ref" style="width:600px">
    <div class="grid w-full">
      <div class="col-6">
        <div class="shadow-1 border-200 border-1 p-2 border-round flex flex-column row-gap-1">
          <EducationChart :color="`green`" :amount="12183" :title="$t('SecondPage.HigherEdu')" :percent="19"></EducationChart>
          <EducationChart :color="`yellow`" :amount="33071" :title="$t('SecondPage.SecEdu')" :percent="51"></EducationChart>
          <EducationChart :color="`blue`" :amount="19400" :title="$t('SecondPage.VocEdu')" :percent="30"></EducationChart>
        </div>
      </div>
      <div class="col-6">
        <div class="shadow-1 border-200 border-1 p-2 border-round flex flex-column row-gap-1">
          <EducationChart :color="`green`" :amount="14837" :title="$t('SecondPage.till31')" :percent="23"></EducationChart>
          <EducationChart :color="`yellow`" :amount="31876" :title="$t('SecondPage.till45')" :percent="49"></EducationChart>
          <EducationChart :color="`blue`" :amount="18289" :title="$t('SecondPage.upTo46')" :percent="28"></EducationChart>
        </div>
      </div>
      <div class="col-6">
        <div class="shadow-1 border-200 border-1 p-2 border-round flex flex-column row-gap-1">
          <EducationChart :color="`green`" :amount="53704" :title="$t('SecondPage.men')" :percent="83"></EducationChart>
          <EducationChart :color="`yellow`" :amount="11298" :title="$t('SecondPage.women')" :percent="17"></EducationChart>
        </div>
      </div>
      <div class="col-6 flex justify-content-end align-items-end pb-3">
        <a class="text-sm text-blue-600" href="https://exodim.railway.uz" target="_blank">{{$t('SecondPage.More')}} <i
            class='bx bx-right-top-arrow-circle ml-2'></i></a>
      </div>
    </div>
  </OverlayPanel>
  <OverlayPanel ref="overall4_ref" style="width:400px">
    <div class="grid">
      <div v-for="item in other_wagon_list" :key="item.id" class="col-12 py-1 ">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full no-underline">
            <span><i class='bx bxs-circle text-sm mr-2'></i> {{ item.label }}</span>
            <span class="font-bold">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </OverlayPanel>

  <OverlayPanel ref="overall21_ref" style="width:400px">
    <div class="grid">
      <div v-for="item in jdpas" :key="item.id" class="col-12 py-1 ">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full no-underline">
            <span><i class='bx bxs-circle text-sm mr-2'></i> {{ item.label }}</span>
            <span class="font-bold">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </OverlayPanel>

  <OverlayPanel ref="overall8_ref" style="width:400px">
    <div class="grid">
      <div v-for="item in mtu_wagon_list" :key="item.id" class="col-12 py-1 ">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full no-underline">
            <span><i class='bx bxs-circle text-sm mr-2'></i> {{ item.label }}</span>
            <span class="font-bold">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </OverlayPanel>

  <OverlayPanel ref="overall90_ref" style="width:400px">
    <div class="grid">
      <div  class="col-12 py-1 ">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full no-underline">
            <span><i class='bx bxs-circle text-sm mr-2'></i>1. {{ $t('SecondPage.MainRoad') }}</span>
            <span class="font-bold">5 314 {{ $t('SecondPage.km') }}</span>
          </div>
          <div class="pl-4 flex justify-content-between border-round min-h-full no-underline">
            <span>1.1 {{ $t('SecondPage.OneWay') }}</span>
            <span class="font-bold">4 839 {{ $t('SecondPage.km') }}</span>
          </div>
          <div class="pl-4 flex justify-content-between border-round min-h-full no-underline">
            <span>1.2 {{ $t('SecondPage.TwoWay') }}</span>
            <span class="font-bold">475 {{ $t('SecondPage.km') }}</span>
          </div>
          <div class="mt-4 flex justify-content-between border-round min-h-full no-underline">
          <span><i class='bx bxs-circle text-sm mr-2'></i>2. {{ $t('SecondPage.ResSendWay') }}</span>
          <span class="font-bold">2 172 {{ $t('SecondPage.km') }}</span>
        </div>


        </div>
      </div>
    </div>
  </OverlayPanel>

  <span v-if="stik_dialog" >
    <div :class="active_stik_dialog && 'active_dialog'" class="stiks_dialog shadow-1 border-1 border-300 border-round pb-1 bg-white border-1 border-300 border-round overflow-hidden " >
      <h2 class="w-full text-center my-0 text-500 font-bold  pt-1 pb-1 relative">{{selected_stik.name}}
        <i  class='bx bx-x absolute top-0 right-0 mt-1 mr-2 text-3xl cursor-pointer' @click="close_dialog"></i>
      </h2>
      <table class="w-full">
        <thead>
          <tr style="border-bottom:10px solid transparent">
            <th style="width:150px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative">

                {{ $t('SecondPage.Cargo') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0px; right:4px;font-size:10px; font-style:italic" >{{ $t('SecondPage.tonn') }}</span>
              </div>
            </th>

             <th style="width:150px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative">

                {{ $t('SecondPage.Wagon') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0px; right:4px;font-size:10px; font-style:italic" ></span>
              </div>
            </th>
             <th style="width:150px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative font-bold">

                {{ $t('SecondPage.Train') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0px; right:4px;font-size:10px; font-style:italic" ></span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in selected_stik.data" :id="item.id">
              <td v-for="sub_item in item.data" :key="sub_item.name">
                 <div class="bg-white p-2 border-1 border-300 shadow-1 border-round">
                    <div class="font-bold mb-2 text-red-600">{{ sub_item.count}}<span
                        class="text-sm font-medium"></span></div>
                    <div class="text-sm font-bold w-full text-right text-500">{{item.year}}</div>
              </div>
              </td>
            </tr>
        <tr>
              <td colspan="3">
                 <div :class="selected_stik.is_increment? 'bg-green-100' : 'bg-red-100'" class=" p-2 border-1 border-300 shadow-1 border-round  py-2">
                    <div :class="selected_stik.is_increment? 'text-green-600' : 'text-red-600'"  class="font-bold mb-2  text-center text-xl">{{selected_stik.percent}} <i :class="selected_stik.is_increment? 'bxs-arrow-from-bottom' : 'bxs-arrow-from-top'" class='bx  text-xl'></i></div>

              </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </span>

  <span v-show="general_stik_dialog" >
    <div :class="general_stik_dialog && 'active_dialog'" class="stiks_dialog shadow-1 border-1 border-300 border-round pb-1 bg-white border-1 border-300 border-round overflow-hidden" >
      <h2 class="w-full text-center my-0 text-500 font-bold  pt-1 pb-1 relative">{{general_stik_list?.name}}
        <i  class='bx bx-x absolute top-0 right-0 mt-1 mr-2 text-3xl cursor-pointer' @click="general_stik_dialog=false"></i>
      </h2>
      <table class="w-full">
        <thead>
          <tr style="border-bottom:10px solid transparent">
            <th style="width:200px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative">

                {{ $t('SecondPage.Export') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0; right:4px;font-size:10px; font-style:italic" >{{ $t('SecondPage.mlnTonn') }}</span>
              </div>
            </th>

             <th style="width:200px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative">

                {{ $t('SecondPage.Import') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0px; right:4px;font-size:10px; font-style:italic" >{{ $t('SecondPage.mlnTonn') }}</span>
              </div>
            </th>
             <th style="width:200px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative">

                {{ $t('SecondPage.Transit') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0px; right:4px;font-size:10px; font-style:italic" >{{ $t('SecondPage.mlnTonn') }}</span>
              </div>
            </th>

              <th style="width:200px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative">

                {{ $t('SecondPage.Local') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0px; right:4px;font-size:10px; font-style:italic" >{{ $t('SecondPage.mlnTonn') }}</span>
              </div>
            </th>
             <th style="width:200px">
              <div class="bg-gray p-2 border-1 border-200 border-round text-500 relative">

                {{ $t('SecondPage.CargoTransportation') }} <span class="text-sm font-medium text-blue-500 absolute " style="bottom:0px; right:4px;font-size:10px; font-style:italic" >{{ $t('SecondPage.mlnTonn') }}</span>
              </div>
            </th>

          </tr>
        </thead>
        <tbody>
            <tr v-for="item in general_stik_list.data" :id="item.id">
              <td v-for="sub_item in item.data" :key="sub_item.name">
                 <div class="bg-white p-2 border-1 border-300 shadow-1 border-round">
                    <div class="font-bold mb-2 text-red-600">{{ sub_item.count}}<span
                        class="text-sm font-medium"></span></div>
                    <div class="text-sm font-bold w-full text-right text-500 font-italic">{{item.year}}</div>
              </div>
              </td>
            </tr>
        <tr>
              <td colspan="5">
                 <div :class="general_stik_list.is_increment? 'bg-green-100' : 'bg-red-100'" class=" p-2 border-1 border-300 shadow-1 border-round  py-2">
                    <div :class="general_stik_list.is_increment? 'text-green-600' : 'text-red-600'"  class="font-bold mb-2  text-center text-xl">{{general_stik_list.percent}} <i :class="general_stik_list.is_increment? 'bxs-arrow-from-bottom' : 'bxs-arrow-from-top'" class='bx  text-xl'></i></div>

              </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </span>
</template>

<script>
import NumberAnimation from "@/components/NumberAnimation/NumberAnimation.vue";
import EducationChart from "@/components/InformationCard/EducationChart.vue";

export default {
  name: "InformationCard",
  props:{
    switch_data:{
      type:Object,
      default:null,
    }
  },
  components: {
    NumberAnimation,
    EducationChart,
  },
  data() {
    return {
      general_data: [
        {
          id: 0,
          label: this.$t('SecondPage.DistanceOfRailways'),
          value: 7486,
          extension_value: this.$t('SecondPage.km'),
        },
        {
          id: 1,
          label: this.$t('SecondPage.EngRoad'),
          value: 3328.73,
          extension_value: this.$t('SecondPage.km') + ' (45%)'
        },
        {
          id: 2,
          label: this.$t('SecondPage.CountLocomotives'),
          value: 471,
          extension_value: this.$t('SecondPage.CountWord')
        },
        {
          id: 6,
          label: this.$t('SecondPage.CountStantions'),
          value: 270,
          extension_value: this.$t('SecondPage.CountWord')
        },
        {
          id: 3,
          label: this.$t('SecondPage.BorderCross'),
          value: 18,
          extension_value: this.$t('SecondPage.CountWord')
        },
        {
          id: 4,
          label: this.$t('SecondPage.CountLocDepo'),
          value: 8,
          show_map: false,
          extension_value: this.$t('SecondPage.CountWord')
        }, {
          id: 5,
          label: this.$t('SecondPage.wagonsDepo'),
          value: 6,
          show_map: false,
          extension_value: this.$t('SecondPage.CountWord')

        },
        {
          id: 8,

          label: this.$t('SecondPage.AvailableWagons'),
          value: 22256,
          extension_value: this.$t('SecondPage.CountWord'),
        },
        {
          id: 7,
          label: this.$t('SecondPage.CountEmpl'),
          value: 65002,
          extension_value: this.$t('SecondPage.countLive'),

        },


      ],
      visible: true,
      station_list: [
        {
          id: 6,
          label: this.$t('SecondPage.Stations'),
          value: "38",
          active:false,
        },
        {
          id: 0,

          label: this.$t('SecondPage.PassengerStat'),
          value: "4",
        },
        {
          id: 1,

          label: this.$t('SecondPage.SortingStat'),
          value: "15 ",
          active:false,
        }, {
          id: 2,

          label: this.$t('SecondPage.PlotStat'),
          value: "11",
        },
        {
          id: 3,

            label: this.$t('SecondPage.LoadStat'),
          value: "60",
        },
        {
          id: 4,
          label: this.$t('SecondPage.MidStat'),
          value: "133",
        },
        {
          id: 5,
          label: this.$t('SecondPage.Razezds'),
          value: "57",
        },


      ],
      sorted_station_list: [
        {
          id: 0,
          label: this.$t('SecondPage.Chukursay'),
          value: ``,
          path: './schema/stations/Чукурсай 2.svg',
        },
        {
          id: 1,

          label: this.$t('SecondPage.Xavast'),
          value: ``,
          path: './schema/stations/Ховос.svg',
        },
        {
          id: 2,
          label: this.$t('SecondPage.Kokand'),
          value: ``,
          path: './schema/stations/Қўқон.svg',
        },
        {
          id: 3,
          label: this.$t('SecondPage.Bukhara'),
          value: ``,
          path: './schema/stations/Бухоро 1.svg'
        },
        {
          id: 4,

          label: this.$t('SecondPage.Karshi'),
          value: ``,
          path: './schema/stations/КАРШИ.svg'
        },
        {
          id: 5,
          label: this.$t('SecondPage.Termez'),
          value: ``,
          path: './schema/stations/Термиз.svg'
        },

        {
          id: 6,
          label: this.$t('SecondPage.Okhangaron'),
          value: ``,
          path: './schema/stations/Охангарон.svg'
        },
        {
          id: 7,
          label: this.$t('SecondPage.Marokand'),
          value: ``,
          path: './schema/stations/МАРОКАНД.svg'
        },
        {
          id: 8,
          label: this.$t('SecondPage.Okhunboboyev'),
          value: ``,
          path: './schema/stations/Охунбобоев.svg'
        },
        {
          id: 9,
          label: this.$t('SecondPage.Kungirot'),
          value: ``,
          path: './schema/stations/КУНГРАД.svg'
        },
        {
          id: 10,
          label: this.$t('SecondPage.Misken'),
          value: ``,
          path: './schema/stations/Мискин.svg'
        },
        {
          id: 11,
          label: this.$t('SecondPage.Nukus'),
          value: ``,
          path: './schema/stations/НУКУС.svg'
        },
        {
          id: 12,
          label: this.$t('SecondPage.Binokor'),
          value: ``,
          path: './schema/stations/Бинокор.svg'
        },
        {
          id: 13,
          label: this.$t('SecondPage.Navoi'),
          value: ``,
          path: './schema/stations/Навоий (2).svg'
        },
        {
          id: 14,
          label: this.$t('SecondPage.Kumkurgan'),
          value: ``,
          path: './schema/stations/Қумқўрғон.svg'
        },
      ],
      locomotive_list: [
        {
          id: 0,
          label: this.$t('SecondPage.ElecLoc'),
          value: `154 та`,
        },
        {
          id: 1,
          label: this.$t('SecondPage.MainlineLoc'),
          value: `104 та`,
        },
        {
          id: 2,
          label: this.$t('SecondPage.ShuntLoc'),
          value: `199 та`,
        }, {
          id: 4,
          label: this.$t('SecondPage.ElecTrains'),
          value: `14 та`,
        },

      ],
      wagon_list: [
        {
          id: 0,
          label: this.$t('SecondPage.CloseWag'),
          value: `4753 та`,
        },
        {
          id: 1,
          label: this.$t('SecondPage.Platform'),
          value: `804 та`,
        },
        {
          id: 2,
          label: this.$t('SecondPage.MidWagon'),
          value: `6330 та`,
        }, {
          id: 4,
          label: this.$t('SecondPage.Cistern'),
          value: `3426 та`,
        },
        {
          id: 6,

          label: this.$t('SecondPage.RefWagons'),
          value: `1111 та`,
        },
        {
          id: 15,

          label: this.$t('SecondPage.OtherWagons'),
          value: `5541 та`,
        },

        {
          id: 16,
          label: this.$t('SecondPage.PassengerWag'),
          value: `485 та`,
        },

      ],
      jdpas:[
        {
          id:0,
          label:this.$t('SecondPage.UsingWag'),
          value: 322,
        },
        {
          id:1,
          label:this.$t('SecondPage.SetWagons'),
          value:163,
        },
    ],
      other_wagon_list:[
        {
          id:0,
          label:this.$t('SecondPage.Zernovoz'),
          value:1353,
        },
        {
          id:1,
          label:this.$t('SecondPage.Sementovoz'),
          value:1905,
        },
        {
          id:2,
          label:this.$t('SecondPage.Menerelovoz'),
          value:360,
        },
        {
          id:3,
          label:this.$t('SecondPage.FitingPlat'),
          value:1079,
        },
        {
          id:4,
          label:this.$t('SecondPage.Xopper'),
          value:205,
        },



        {
          id:5,
          label:this.$t('SecondPage.Dumpkar'),
          value:170,
        },

        {
          id:6,
          label:this.$t('SecondPage.Avtomobilovoz'),
          value:232,
        },
        {
          id:7,
          label:this.$t('SecondPage.Transporter'),
          value:57,
        },

        {
          id:8,
          label:this.$t('SecondPage.AndOtherWag'),
          value:180,
        },
      ],
      mtu_wagon_list:[
        {
          id:0,
          label:this.$t('SecondPage.WDFTashkent'),
          value:2980,
        },
        {
          id:1,
          label:this.$t('SecondPage.WDFKokand'),
          value:4331,
        },
        {
          id:2,
          label:this.$t('SecondPage.WDFBukhara'),
          value:6430,
        },
        {
          id:3,
          label:this.$t('SecondPage.WDFKarshi'),
          value:5295,
        }

      ],
      overall_list: [],
      selected_id: null,
      selected_data_id: null,
      status: false,
      active_card: true,
      sorted_station: false,
      stik_dialog:false,
      general_stik_dialog:false,

      active_stik_dialog:false,


      station_line_list: [
        {
          id: 'uchas11',
          name: this.$t('SecondPage.uchas11'),
          color: '#996633',
          map: {
            x: -3034,
            y: -889,
            zoom: 4,
          }
        },
        {
          id: 'uchas10',
          name: this.$t('SecondPage.uchas10'),
          color: '#cccccc',
          map: {
            x: -2256,
            y: -1008,
            zoom: 3.6,
          }
        },
        {
          id: 'uchas12',
          name: this.$t('SecondPage.uchas12'),
          color: '#faff81',
          map: {
            x: -3518,
            y: -897,
            zoom: 4.3,
          }
        },
        {
          id: 'uchas9',
          name: this.$t('SecondPage.uchas9'),
          color: '#ff99cc',
          map: {
            x: -3233,
            y: -1957,
            zoom: 5,
          }
        },
        {
          id: 'uchas13',
          name: this.$t('SecondPage.uchas13'),
          color: '#000000',
          map: {
            x: -2252,
            y: -727,
            zoom: 3,
          }
        },
        {
          id: 'uchas14',

          name: this.$t('SecondPage.uchas14'),
          color: '#9933cc',
          map: {
            x: -4299,
            y: -1154,
            zoom: 4.3,
          }
        },
        {
          id: 'uchas5',
          name: this.$t('SecondPage.uchas5'),
          color: '#ffcc00',
          map: {
            x: -1016,
            y: -1061,
            zoom: 3,
          }
        },
        {
          id: 'uchas3',
          name: this.$t('SecondPage.uchas3'),
          color: '#cc3399',
          map: {
            x: -741,
            y: -769,
            zoom: 3,
          }
        },
        {
          id: 'uchas2',
          name: this.$t('SecondPage.uchas2'),
          color: '#00ccff',
          map: {
            x: -82,
            y: -515,
            zoom: 3,
          }
        },
        {
          id: 'uchas1',
          name: this.$t('SecondPage.uchas1'),
          color: '#6600cc',
          map: {
            x: 131,
            y: -250,
            zoom: 3,
          }
        },
        {
          id: 'uchas6',
          name: this.$t('SecondPage.uchas6'),
          color: '#33cc66',
          map: {
            x: -1666,
            y: -1580,
            zoom: 3.6,
          }
        },

        {
          id: 'uchas7',
          name: this.$t('SecondPage.uchas7'),
          color: '#6699ff',
          map: {
            x: -1926,
            y: -1828,
            zoom: 3.6,
          }
        },
        {
          id: 'uchas8',
          name: this.$t('SecondPage.uchas8'),
          color: '#ff0000',
          map: {
            x: -1868,
            y: -1908,
            zoom: 3.6,
          }
        },
        {
          id: 'uchas4',
          name: this.$t('SecondPage.uchas4'),
          color: '#000066',
          map: {
            x: -1539,
            y: -1273,
            zoom: 3.6,
          }
        },

      ],
      stik_data_list:[
        {
          id:'stik1',

          name:this.$t('SecondPage.stik1'),
          percent:'+23%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'32 232 341',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'546 311',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'9 584',
                },
              ]
            },
            {

              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'39 598 991',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'671 169',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'11 775',
                },
              ]
            },
          ]
        },
        {
          id:'stik2',
          name:this.$t('SecondPage.stik2'),
          percent:'0%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:0,
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:0,
                },
              ]
            },
          ]
        },
        {
          id:'stik3',
          name:this.$t('SecondPage.stik3'),
          percent:'-15%',
          is_increment:false,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'2 274 864',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'38 557',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'676',
                },
              ]
            },
            {

              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'1 940 506',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'32 889',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'577',
                },
              ]
            },
          ]
        },
        {
          id:'stik4',
          name:this.$t('SecondPage.stik4'),
          percent:'-55%',
          is_increment:false,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'151 838',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'2 573',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'45',
                },
              ]
            },
            {

              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'66 682',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'1 130',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'20',
                },
              ]
            },
          ]
        },
        {
          id:'stik5',
          name:this.$t('SecondPage.stik5'),
          percent:'+92%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'79 880',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'1 353',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'24',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'154 101',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'2 611',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'46',
                },
              ]
            },
          ]
        },
        {
          id:'stik6',

          name:this.$t('SecondPage.stik6'),
          percent:'+31%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'2 633 839',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'44 641',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'783',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'3 464 705',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'58 723',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'1 030',
                },
              ]
            },
          ]
        },
        {
          id:'stik7',
          name:this.$t('SecondPage.stik7'),
          percent:'+20%',
          is_increment:true,

          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'439 117',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'7 443',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'131',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'522 676',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'8 858',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'155',
                },
              ]
            },
          ]
        },
        {
          id:'stik8',

          name:this.$t('SecondPage.stik8'),
          percent:'+10%',
          is_increment:true,
          data:[
            {

              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'2 447 322',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'41 480',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'728',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'2 694 630',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'45 671',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'801',
                },
              ]
            },
          ]
        },
        {
          id:'stik9',
          name:this.$t('SecondPage.stik9'),
          percent:'+2%',
          is_increment:true,
          data:[
            {

              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'4 058 174',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'68 782',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'1 207',
                },
              ]
            },
            {

              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'4 154 021',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'70 407',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'1 235',
                },
              ]
            },
          ]
        },
        {
          id:'stik10',
          name:this.$t('SecondPage.stik10'),
          percent:'-7%',
          is_increment:false,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'16 836',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'285',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'5',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'15 680',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'266',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'5',
                },
              ]
            },
          ]
        },
        {
          id:'stik11',
          name:this.$t('SecondPage.stik11'),
          percent:'+7%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'142 518',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'2 415',
                },
                {
                  name: this.$t('SecondPage.Train'),

                  count:'42',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'152 939',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'2 592',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'45',
                },
              ]
            },
          ]
        },
        {
          id:'stik12',
          name:this.$t('SecondPage.stik12'),
          percent:'-57%',
          is_increment:false,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'151 838',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'2 573',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'45',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'66 682',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'1 130',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'20',
                },
              ]
            },
          ]
        },
        {

          id:this.$t('SecondPage.stik13'),
          name:'Учкурган',
          percent:'+72%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'284 507',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'4 822',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'85',
                },
              ]
            },
            {

              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'489 416',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'8 295',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'146',
                },
              ]
            },
          ]
        },
        {
          id:'stik14',

          name:this.$t('SecondPage.stik14'),
          percent:'0%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:85,
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:0,
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:0,
                },
              ]
            },
          ]
        },
        {
          id:'stik15',
          name:this.$t('SecondPage.stik15'),
          percent:'+2%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'4 204 113',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'71 256',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'1 250',
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'4 263 648',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'72 265',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:'1 267',
                },
              ]
            },
          ]
        },
        {
          id:'stik16',
          name:this.$t('SecondPage.stik16'),
          percent:'+50%',
          is_increment:true,
          data:[
            {
              year: this.$t('SecondPage.year22'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'1 238 571',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'20 992',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:368,
                },
              ]
            },
            {
              year: this.$t('SecondPage.year23'),
              data:[
                {
                  name: this.$t('SecondPage.Cargo'),
                  count:'1 847 310',
                },
                {
                  name: this.$t('SecondPage.Wagon'),
                  count:'31 310',
                },
                {
                  name: this.$t('SecondPage.Train'),
                  count:549,
                },
              ]
            },
          ]
        },
      ],

      general_stik_list:{
        id:'0',

        name:this.$t('SecondPage.OveralIndic'),
        percent:'+7%',
        is_increment:true,
        data:[
          {

            year:this.$t('SecondPage.year22'),
            data:[
              {
                name:this.$t('SecondPage.Export'),
                count:'10.9',
              },
              {
                name:this.$t('SecondPage.Import'),
                count:'19.5',
              },
              {
                name:this.$t('SecondPage.Transit'),
                count:'10.2',
              },
              {
                name:this.$t('SecondPage.Local'),
                count:'61.7',
              },
              {
                name:this.$t('SecondPage.CargoTransportation'),
                count:'102,3',
              },
            ]
          },
          {
            year:this.$t('SecondPage.year23'),
            data:[
              {
                name:this.$t('SecondPage.Export'),
                count:'12.4',
              },
              {
                name:this.$t('SecondPage.Import'),
                count:'24.6',
              },
              {
                name:this.$t('SecondPage.Transit'),
                count:'11.6',
              },
              {
                name:this.$t('SecondPage.Local'),
                count:'60.8',
              },
              {
                name:this.$t('SecondPage.CargoTransportation'),
                count:'109,4',
              },
            ]
          },
        ]
      },
      selected_stik:null,
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
      } else if (id === 8) {
        this.overall_list = this.wagon_list;
        this.$refs.overal_ref.toggle(event);
      } else if (id === 7) {
        this.$refs.overall3_ref.toggle(event);
      }else if (id === 5) {
        this.$refs.overall8_ref.toggle(event);
      }else if (id === 3) {
        this.general_stik_dialog = true;
      }else if(id === 0){
        this.$refs.overall90_ref.toggle(event);
      }

      if (id === 4) {
        let anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', 'https://uzdepo.uz/uzel/lokomotiv.php?depo=%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD');
        anchorTag.setAttribute('target', '_blank');
        document.body.appendChild(anchorTag);

        anchorTag.click();
      }
    },

    open_modal( event ,id){
      if(id===15){
        this.$refs.overall4_ref.toggle(event);
      }
    else
      if(id===16){
        this.$refs.overall21_ref.toggle(event);
      }
    },
    control_overall2(event, id) {
        if(id === 1){
          this.$refs.overall2_ref.toggle(event);
          this.$emit("changeMap", 'sorts');
        }else if(id === 6){
          this.$emit("changeTrainStation", this.station_list[0].active? 'vokzals': 'of');
        }



    },

    change_card() {
      this.active_card = !this.active_card;
      this.$emit("changeCard", this.active_card);
      this.$emit("changeTrainStation", 'of');
      if (!this.active_card) {
        this.selected_id = null;
      } else {
        this.general_data[4].show_map = false;
        this.general_data[5].show_map = false;
        this.general_data[6].show_map = false;
        this.station_list[0].active =false;
        this.station_list[2].active =false;

      }


    },
    change_checkbox(value, x, y, zoom) {
      let data = {
        id: value.target.value,
        x,
        y,
        zoom,
      }
      this.selected_id = [value.target.value];
      this.$emit('listenMap', data)
    },

    change_map(event, id) {
      this.general_stik_dialog = false;
      if (id === 4) {
        this.$emit("changeMap", 'tchs');
      } else if (id === 5) {
        this.$emit("changeMap", 'vchds');
      } else if (id === 3) {
        this.$emit("changeMap", 'stiks');
      }
    },

    show_dialog(stik_id){
      this.selected_stik = this.stik_data_list.filter((item)=> item.id ===stik_id)[0];
      console.log(this.selected_stik)


      this.stik_dialog=true;
      setTimeout(()=>{
        this.active_stik_dialog = true;
      },100)
    },
    close_dialog(){
      this.$emit("closeInfoMap")
      this.active_stik_dialog=false;
      setTimeout(()=>{
        this.stik_dialog = false;
      },300)
    },

    show_general_dialog(){
      this.general_stik_dialog = true;
    },



  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">

.information-card {
  width: 600px;
  height: 320px;
  position: absolute;
  transform-origin: 0 0;
  transform: scale(1) translate(0px, 0px);
  bottom: 10px;
  left: 10px;
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

.stiks_dialog {
  min-width: 400px;
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0;
  transition:all 0.225s linear;
  transform:translateY(-100px);
}

.active_dialog{
  opacity: 1;
  transform:translateY(0px);
}
</style>
