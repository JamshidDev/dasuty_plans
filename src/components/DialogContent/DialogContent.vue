<template>
  <span v-if="dialog_visible">
     <div class="dialog-container shadow-2" :class="active_dialog && 'open_dialog'">
    <div class="header flex justify-content-between align-items-center">
      <span class="text-2xl font-semibold">{{ selected_mtu_list.name }}</span>
      <i @click="close_dialog()" class='bx bx-x text-4xl cursor-pointer'></i>
    </div>
    <div class="body grid pt-4">
      <template v-for="item in selected_mtu_list.data" :key="item.id">
        <div class="col-6" @click="control_overall2($event,item.iscollapse, item?.nodes_list, item.id)">
          <div v-if="item?.multiple_label" class="card_box p-3 border-round shadow-1 min-h-full"
               :class="item.iscollapse? 'bg-blue-100 cursor-pointer' : 'gray-bg'">
          <div class="title font-bold">
            {{ item.labels.value1 ?? '' }}
          </div>
          <div class="text-sm">
            {{ item.labels.label1 }}
          </div>
             <div class="title font-bold mt-2">
            {{ item.labels.value2 }}
          </div>
          <div class="text-sm">
            {{ item.labels.label2 }}
          </div>
        </div>

        <div @click="open_overal_worker($event,item.id, selected_mtu_list.index)"  v-else class="card_box p-3 border-round shadow-1 min-h-full"
             :class="item.iscollapse? 'bg-blue-100 cursor-pointer' : 'gray-bg'">
          <div class="title font-bold">
            {{ item.value }}
          </div>
          <div class="my-3">

          </div>
          <div class="text-sm">
            {{ item.label }}
          </div>
        </div>
      </div>
      </template>

    </div>
  </div>

  </span>


  <span v-if="time_line_dialog">
      <div class="map_info_card shadow-1 border-1 border-blue-200" @click="show_animation=!show_animation">
        <div class="mt-0 text-500 mb-2">
          <div class="text-red-500 font-bold w-full text-center" v-if="is_show_one">Олдинги ҳолат</div>
          <div class="text-green-600 font-bold w-full text-center" v-else>Ҳозирги ҳолат</div>
          <div class="flex justify-content-evenly text-900 font-bold mt-1">
            <span>Ахтачи</span>
            <span><i class='bx bx-right-arrow-alt'></i></span>
            <span>Нукус</span>
          </div>
        </div>
         <div class="relative overflow-hidden w-full min-h-full">
            <Timeline v-if="is_show_one" class="w-full" :value="timeline_one">
              <template #opposite="slotProps">
        <small class="text-blue-600 font-bold">{{ slotProps.item.date }}</small>
    </template>
    <template #content="slotProps" class="h-3rem">
        <div class="flex justify-content-between w-full px-2 align-items-center border-round"  :class="slotProps.item.show? 'bg-blue-100' : 'bg-transparent'">
          <span>{{ slotProps.item.status }}</span> <i class='bx bxs-left-arrow-circle text-lg' :class="slotProps.item.show? 'text-primary' : 'text-white'"></i>
        </div>
    </template>
          </Timeline>
            <Timeline v-else class="w-full" :value="timeline_two_text">
              <template #opposite="slotProps">
        <small class="text-blue-600 font-bold" :class="slotProps.item.stroke && 'line-through'">{{ slotProps.item.date }}</small>
    </template>
    <template #content="slotProps" class="h-3rem">
        <div  class="flex justify-content-between w-full px-2 align-items-center border-round"  :class="slotProps.item.show? 'bg-blue-100' : 'bg-transparent'">
          <span :class="slotProps.item.stroke && 'line-through'">{{ slotProps.item.status }}</span> <i class='bx bxs-left-arrow-circle text-lg' :class="[slotProps.item.show? 'text-primary' : 'text-white' ]"></i>
        </div>
    </template>
          </Timeline>

         </div>
        <div class="flex justify-content-evenly text-sm mt-3 font-bold">
          <span class="pl-4">Умумий вақт</span>
          <span v-if="is_show_one" class=" pl-4">12 кун</span>
          <span v-else class=" pl-4">6 кун</span>
        </div>
      </div>
    </span>

  <OverlayPanel ref="overall2_ref" style="width:400px">
    <div class="grid" >
      <div v-for="item in selected_overall_list" :key="item.id" class="col-12 py-1">
        <div class="flex flex-column">
          <div class="flex justify-content-between border-round min-h-full">
            <span><i class='bx bxs-circle text-sm mr-2'></i> {{ item.label }}</span>
            <span class="font-bold">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </OverlayPanel>

  <OverlayPanel ref="overall12_ref" style="width:600px">
    <div class="grid w-full" v-if="selected_mtu">
      <div class="col-6" v-for="item in selected_mtu.data" :key="item">
        <div class="shadow-1 border-200 border-1 p-2 border-round flex flex-column row-gap-1">
          <EducationChart v-for="sub_item in item.chart_list" :key="sub_item" :color="sub_item.color" :amount="sub_item.value" :title="sub_item.label" :percent="sub_item.percent"></EducationChart>
        </div>
      </div>
      <div class="col-6 flex justify-content-end align-items-end pb-3">
        <a class="text-sm text-blue-600" href="https://exodim.railway.uz" target="_blank">Батафсил <i
            class='bx bx-right-top-arrow-circle ml-2'></i></a>
      </div>
    </div>
  </OverlayPanel>

</template>
<script>
import EducationChart from "@/components/InformationCard/EducationChart.vue";

export default {
  components: {EducationChart},
  data() {
    return {
      switchOne: false,
      switchTwo: true,
      dialog_visible: false,
      map_info_visible: true,
      active_dialog: false,
      show_animation: false,
      timeline_one: [
        {status: 'Ахтачи', date: '25 соат', icon: 'pi pi-shopping-cart', show: false},
        {status: 'Охунбобоев', date: '39 соат', icon: 'pi pi-cog', show: false},
        {status: 'Қўқон', date: '26 соат', icon: 'pi pi-shopping-cart',show: false},
        {status: 'Поп', date: '9  соат', icon: 'pi pi-shopping-cart', show: false},
        {status: 'Ангрен', date: '5 соат', icon: 'pi pi-cog',show: false},
        {status: 'Оҳангарон', date: '3.5 соат', icon: 'pi pi-shopping-cart',show: false},
        {status: 'Ўзбекистон', date: '7 соат', icon: 'pi pi-shopping-cart',show: false},
        {status: 'Хаваст', date: '45 соат', icon: 'pi pi-cog',show: false},
        {status: 'Мароканд', date: '22 соат', icon: 'pi pi-shopping-cart',show: false},
        {status: 'Бухоро', date: '44 соат', icon: 'pi pi-shopping-cart',show: false},
        {status: 'Мискин', date: '18 соат', icon: 'pi pi-cog',show: false},
        // {status: 'Нукус', date: '0 дақиқа', icon: 'pi pi-shopping-cart',show: false},
      ],
      timeline_two_text: [
        {status: 'Ахтачи', date: '25 соат', icon: 'pi pi-shopping-cart', show: false, stroke:false,},
        {status: 'Охунбобоев', date: '39 соат', icon: 'pi pi-cog', show: false, stroke:false,},
        {status: 'Қўқон', date: '26 соат', icon: 'pi pi-shopping-cart',show: false, stroke:true,},
        {status: 'Поп', date: '9  соат', icon: 'pi pi-shopping-cart', show: false, stroke:false,},
        {status: 'Ангрен', date: '5 соат', icon: 'pi pi-cog',show: false,stroke:false,},
        {status: 'Оҳангарон', date: '3.5 соат', icon: 'pi pi-shopping-cart',show: false,stroke:true,},
        {status: 'Ўзбекистон', date: '7 соат', icon: 'pi pi-shopping-cart',show: false, stroke:true,},
        {status: 'Хаваст', date: '45 соат', icon: 'pi pi-cog',show: false,stroke:true,},
        {status: 'Мароканд', date: '22 соат', icon: 'pi pi-shopping-cart',show: false, stroke:false,},
        {status: 'Бухоро', date: '44 соат', icon: 'pi pi-shopping-cart',show: false,stroke:false,},
        {status: 'Мискин', date: '18 соат', icon: 'pi pi-cog',show: false,stroke:false,},
        // {status: 'Нукус', date: '0 дақиқа', icon: 'pi pi-shopping-cart',show: false},
      ],
      timeline_two: [
        {status: 'Ахтачи', date: '18 соат', icon: 'pi pi-shopping-cart', show: false},
        {status: 'Охунбобоев', date: '9 соат', icon: 'pi pi-cog', show: false},
        {status: 'Поп', date: '8.5 соат', icon: 'pi pi-shopping-cart', show: false},
        {status: 'Ангрен', date: '4 соат', icon: 'pi pi-cog',show: false},
        {status: 'Мароканд', date: '36 соат', icon: 'pi pi-shopping-cart',show: false},
        {status: 'Бухоро', date: '44 соат', icon: 'pi pi-shopping-cart',show: false},
        {status: 'Мискин', date: '18 соат', icon: 'pi pi-cog',show: false},
        // {status: 'Нукус', date: '0 дақиқа', icon: 'pi pi-shopping-cart',show: false},
      ],
      timeline_two_index :[0,1,3,4,8,9,10,],
      mtu_data: [
        {
          name: 'Тошкент МТУ',
          index:0,
          data: [
            {
              id: 0,
              label: `Мавжуд темир йўл узунлиги `,
              value: `1654,6 км`,
              iscollapse: false,
            },
            {
              id: 1,
              label: `Электрлаштирилган йўл `,
              value: `1327,8 км  (80%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label: `Бириктирилган локомотивлар сони`,
              value: `174 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Электровозлар ",
                  value: "93 та"
                },
                {
                  id: 1,
                  label: "Магистрал тепловоз  ",
                  value: "3 та"
                },
                {
                  id: 2,
                  label: "Манёвр тепловоз ",
                  value: "65 та"
                },
                {
                  id: 3,
                  label: "Электропоездлар ",
                  value: "13 та"
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1: `Саралаш станциялар сони`,
                value1: `3 та`,
                label2: 'Умумий стансиялар сони',
                value2: `58 та`,
              },

              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Чуқурсой ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Хаваст",
                  value: ""
                },
                {
                  id: 2,
                  label: "Охангарон",
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label: `Локомотив деполар сони`,
              value: `2 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Тошкент ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Тинчлик",
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label: `Вагон деполари сони`,
              value: `1 та`,
              iscollapse: false,
            },
            {
              id: 6,
              label: `Ходимлар сони`,
              value: `8045 нафар`,
              iscollapse: true,
            },
          ]
        },
        {
          name: 'Қўқон МТУ ',
          index:1,
          data: [
            {
              id: 0,
              label: `Мавжуд темир йўл узунлиги `,
              value: `981,7 км`,
              iscollapse: false,
            },
            {
              id: 1,
              label: `Электрлаштирилган йўл `,
              value: `587,31 км (60%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label: `Бириктирилган локомотивлар сони`,
              value: `63 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Электровозлар ",
                  value: "25 та"
                },
                {
                  id: 1,
                  label: "Магистрал тепловоз  ",
                  value: "9 та"
                },
                {
                  id: 2,
                  label: "Манёвр тепловоз ",
                  value: "28 та"
                },
                {
                  id: 3,
                  label: "Электропоездлар ",
                  value: "1 та"
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1: `Саралаш станциялар сони`,
                value1: `2 та`,
                label2: 'Умумий стансиялар сони',
                value2: `38 та`,
              },
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Қўқон  ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Охунбобоев",
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label: `Локомотив деполар сони`,
              value: `1 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Андижон ",
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label: `Вагон деполари сони`,
              value: `1 та`,
              iscollapse: false,
            },
            {
              id: 6,
              label: `Ходимлар сони`,
              value: `6076 нафар`,
              iscollapse: true,

            },
          ]
        },
        {
          name: 'Бухоро МТУ ',
          index:2,
          data: [
            {
              id: 0,
              label: `Мавжуд темир йўл узунлиги `,
              value: `2037,2 км`,
              iscollapse: false,
            },
            {
              id: 1,
              label: `Электрлаштирилган йўл `,
              value: `728,92 км (35,7%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label: `Бириктирилган локомотивлар сони`,
              value: `90 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Электровозлар ",
                  value: "7 та"
                },
                {
                  id: 1,
                  label: "Магистрал тепловоз  ",
                  value: "37 та"
                },
                {
                  id: 2,
                  label: "Манёвр тепловоз ",
                  value: "46 та"
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1: `Саралаш станциялар сони`,
                value1: `4 та`,
                label2: 'Умумий стансиялар сони',
                value2: `69 та`,
              },

              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Бухоро  ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Мароқанд",
                  value: ""
                },
                {
                  id: 2,
                  label: "Навоий",
                  value: ""
                },
                {
                  id: 3,
                  label: "Бинокор",
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label: `Локомотив деполар сони`,
              value: `2 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Бухоро ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Тинчлик ",
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label: `Вагон деполари сони`,
              value: `1 та`,
              iscollapse: false,
            },
            {
              id: 6,
              label: `Ходимлар сони`,
              value: `9812 нафар`,
              iscollapse: true,
            },
          ]
        },
        {
          name: 'Қўнғирод МТУ',
          index:3,
          data: [
            {
              id: 0,
              label: `Мавжуд темир йўл узунлиги `,
              value: `1491,7 км`,
              iscollapse: false,
            },
            // {
            //   id: 1,
            //   label: `Электрлаштирилган йўл `,
            //   value: 'hidden',
            //   iscollapse:false,
            // },
            {
              id: 2,
              label: `Бириктирилган локомотивлар сони`,
              value: `59 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 1,
                  label: "Магистрал тепловоз  ",
                  value: "35 та"
                },
                {
                  id: 2,
                  label: "Манёвр тепловоз ",
                  value: "24 та"
                },
              ]
            },
            {
              id: 3,

              multiple_label: true,
              labels: {
                label1: `Саралаш станциялар сони`,
                value1: `3 та`,
                label2: 'Умумий стансиялар сони',
                value2: `49 та`,
              },

              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Мискен  ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Қўнғирот",
                  value: ""
                },
                {
                  id: 2,
                  label: "Нукус",
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label: `Локомотив деполар сони`,
              value: `2 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Ургенч ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Кунграт ",
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label: `Вагон деполари сони`,
              value: `1 та`,
              iscollapse: false,
            },
            {
              id: 6,
              label: `Ходимлар сони`,
              value: `5560 нафар`,
              iscollapse: true,
            },
          ]
        },
        {
          name: 'Қарши МТУ ',
          index:4,
          data: [
            {
              id: 0,
              label: `Мавжуд темир йўл узунлиги `,
              value: `722,8 км`,
              iscollapse: false,
            },
            {
              id: 1,
              label: `Электрлаштирилган йўл `,
              value: `440,3 км (61%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label: `Бириктирилган локомотивлар сони`,
              value: `40 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Электровозлар   ",
                  value: "18 та"
                },
                {
                  id: 1,
                  label: "Магистрал тепловоз  ",
                  value: "6 та"
                },
                {
                  id: 2,
                  label: "Манёвр тепловоз ",
                  value: "16 та"
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1: `Саралаш станциялар сони`,
                value1: `1 та`,
                label2: 'Умумий стансиялар сони',
                value2: `30 та`,
              },
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Қарши  ",
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label: `Локомотив деполар сони`,
              value: `1 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Қарши ",
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label: `Вагон деполари сони`,
              value: `1 та`,
              iscollapse: false,
            },
            {
              id: 6,
              label: `Ходимлар сони`,
              value: `4469  нафар`,
              iscollapse: false,
            },
            {
              id: 7,
              label: `Мавжуд вагонлар сони`,
              value: `8045 та`,
              iscollapse: true,
            },
          ]
        },
        {
          name: 'Термез МТУ ',
          index:5,
          data: [
            {
              id: 0,
              label: `Мавжуд темир йўл узунлиги `,
              value: `600,9 км`,
              iscollapse: false,
            },
            {
              id: 1,
              label: `Электрлаштирилган йўл `,
              value: `244,4 км`,
              iscollapse: false,
            },
            {
              id: 2,
              label: `Бириктирилган локомотивлар сони`,
              value: `45 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Электровозлар ",
                  value: "11 та"
                },
                {
                  id: 1,
                  label: "Магистрал тепловоз  ",
                  value: "14 та"
                },
                {
                  id: 2,
                  label: "Манёвр тепловоз ",
                  value: "20 та"
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1: `Саралаш станциялар сони`,
                value1: `2 та`,
                label2: 'Умумий стансиялар сони',
                value2: `26 та`,
              },
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Термез ",
                  value: ""
                },
                {
                  id: 1,
                  label: "Қумқўрғон",
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label: `Локомотив деполар сони`,
              value: `1 та`,
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: "Термез ",
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label: `Вагон деполари сони`,
              value: `1 та`,
              iscollapse: false,
            },
            {
              id: 6,
              label: `Ходимлар сони`,
              value: `3591  нафар`,
              iscollapse: true,
            },
          ]
        },
      ],
      selected_mtu_list: [],
      selected_overall_list: [],
      timeline_timeout :null,
      is_show_one:true,
      time_line_dialog:false,
      mtu_worker_list:[
        {
          id:1,
          name:'MTU 1',
          data:[
            {
              chart_list:[
                {
                  label:'Олий малумотли',
                  value:1562,
                  percent:20,
                  color:'green',
                },
                {
                  label:'Ўрта малумотли',
                  value:3981,
                  percent:50,
                  color:'yellow',
                },
                {
                  label:'Ўрта махсус малумотли',
                  value:2404,
                  percent:30,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'31 ёшгача',
                  value:1790,
                  percent:22,
                  color:'green',

                },
                {
                  label:'32 ёшдан 45 ёшгача',
                  value:4162,
                  percent:52,
                  color:'yellow',

                },
                {
                  label:'46 ёшдан катталар',
                  value:2049,
                  percent:26,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'Эркаклар',
                  value:6748,
                  percent:84,
                  color:'green',
                },
                {
                  label:'Аёллар',
                  value:1253,
                  percent:16,
                  color:'yellow',
                },
              ]
            },


          ]
        },
        {
          id:2,
          name:'Қўқон МТУ ',
          data:[
            {
              chart_list:[
                {
                  label:'Олий малумотли',
                  value:986,
                  percent:16,
                  color:'green',
                },
                {
                  label:'Ўрта малумотли',
                  value:3394,
                  percent:56,
                  color:'yellow',
                },
                {
                  label:'Ўрта махсус малумотли',
                  value:1669,
                  percent:28,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'31 ёшгача',
                  value:2016,
                  percent:33,
                  color:'green',

                },
                {
                  label:'32 ёшдан 45 ёшгача',
                  value:2576,
                  percent:43,
                  color:'yellow',

                },
                {
                  label:'46 ёшдан катталар',
                  value:1466,
                  percent:24,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'Эркаклар',
                  value:5352,
                  percent:88,
                  color:'green',
                },
                {
                  label:'Аёллар',
                  value:709,
                  percent:12,
                  color:'yellow',
                },
              ]
            },


          ]
        },
        {
          id:3,
          name:'Бухоро МТУ  ',
          data:[
            {
              chart_list:[
                {
                  label:'Олий малумотли',
                  value:1424,
                  percent:15,
                  color:'green',
                },
                {
                  label:'Ўрта малумотли',
                  value:6035,
                  percent:62,
                  color:'yellow',
                },
                {
                  label:'Ўрта махсус малумотли',
                  value:2322,
                  percent:24,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'31 ёшгача',
                  value:2597,
                  percent:26,
                  color:'green',

                },
                {
                  label:'32 ёшдан 45 ёшгача',
                  value:5215,
                  percent:53,
                  color:'yellow',

                },
                {
                  label:'46 ёшдан катталар',
                  value:1990,
                  percent:20,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'Эркаклар',
                  value:8409,
                  percent:86,
                  color:'green',
                },
                {
                  label:'Аёллар',
                  value:1393,
                  percent:14,
                  color:'yellow',
                },
              ]
            },


          ]
        },
        {
          id:4,
          name:'Қўнғирод МТУ',
          data:[
            {
              chart_list:[
                {
                  label:'Олий малумотли',
                  value:847,
                  percent:15,
                  color:'green',
                },
                {
                  label:'Ўрта малумотли',
                  value:2807,
                  percent:51,
                  color:'yellow',
                },
                {
                  label:'Ўрта махсус малумотли',
                  value:1889,
                  percent:34,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'31 ёшгача',
                  value:1223,
                  percent:22,
                  color:'green',

                },
                {
                  label:'32 ёшдан 45 ёшгача',
                  value:2958,
                  percent:53,
                  color:'yellow',

                },
                {
                  label:'46 ёшдан катталар',
                  value:1376,
                  percent:25,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'Эркаклар',
                  value:4751,
                  percent:85,
                  color:'green',
                },
                {
                  label:'Аёллар',
                  value:806,
                  percent:15,
                  color:'yellow',
                },
              ]
            },


          ]
        },
        {
          id:5,
          name:'Қарши МТУ',
          data:[
            {
              chart_list:[
                {
                  label:'Олий малумотли',
                  value:1002,
                  percent:22,
                  color:'green',
                },
                {
                  label:'Ўрта малумотли',
                  value:1684,
                  percent:38,
                  color:'yellow',
                },
                {
                  label:'Ўрта махсус малумотли',
                  value:1753,
                  percent:39,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'31 ёшгача',
                  value:765,
                  percent:17,
                  color:'green',

                },
                {
                  label:'32 ёшдан 45 ёшгача',
                  value:2448,
                  percent:55,
                  color:'yellow',

                },
                {
                  label:'46 ёшдан катталар',
                  value:1247,
                  percent:28,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'Эркаклар',
                  value:4029,
                  percent:90,
                  color:'green',
                },
                {
                  label:'Аёллар',
                  value:431,
                  percent:10,
                  color:'yellow',
                },
              ]
            },


          ]
        },
        {
          id:6,
          name:'Термез МТУ',
          data:[
            {
              chart_list:[
                {
                  label:'Олий малумотли',
                  value:920,
                  percent:26,
                  color:'green',
                },
                {
                  label:'Ўрта малумотли',
                  value:1642,
                  percent:46,
                  color:'yellow',
                },
                {
                  label:'Ўрта махсус малумотли',
                  value:1019,
                  percent:28,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'31 ёшгача',
                  value:654,
                  percent:18,
                  color:'green',

                },
                {
                  label:'32 ёшдан 45 ёшгача',
                  value:2125,
                  percent:59,
                  color:'yellow',

                },
                {
                  label:'46 ёшдан катталар',
                  value:806,
                  percent:22,
                  color:'blue',
                },
              ]
            },
            {
              chart_list:[
                {
                  label:'Эркаклар',
                  value:3232,
                  percent:90,
                  color:'green',
                },
                {
                  label:'Аёллар',
                  value:353,
                  percent:10,
                  color:'yellow',
                },
              ]
            },


          ]
        },
      ],
      selected_mtu:null,
    }
  },
  methods: {
    control_dialog(event) {
      this.$refs.overall_content.toggle(event);
    },
    control_overall2(event, isShow, list, id) {
      if (isShow && id!==6) {
        this.selected_overall_list = list;
        this.$refs.overall2_ref.toggle(event);
      }

    },

    open_overal_worker(event,id, index){
        if(id===6){
          console.log(index)
          this.selected_mtu = this.mtu_worker_list[index];
          console.log(this.selected_mtu)

          this.$refs.overall12_ref.toggle(event);
        }

    },

    open_dialog(mtu_number) {
      this.selected_mtu_list = this.mtu_data[mtu_number];
      this.dialog_visible = true;
      setTimeout(() => {
        this.active_dialog = true;
      }, 300)
    },
    close_dialog() {
      this.active_dialog = false;
      setTimeout(() => {
        this.dialog_visible = false;
        this.$emit("closeDialog")
      }, 300)
    },
    async old_timeline_start() {
      this.time_line_dialog = true;
      this.is_show_one = true;
      for(let i=0; i<this.timeline_one.length; i++){
        this.timeline_one[i].show=false;
      }
      clearTimeout(this.timeline_timeout);
      this.show_animation = true;


      await new Promise(resolve => {
        this.timeline_timeout = setTimeout(resolve, 600);
        return this.timeline_timeout;
      });

      for(let i=0; i<this.timeline_one.length; i++){

        if(i>0){
          this.timeline_one[i-1].show=false;
        }
        this.timeline_one[i].show=true;
          await new Promise(resolve => {
            this.timeline_timeout = setTimeout(resolve, 600);
            return this.timeline_timeout;
          });





      }
      // setInterval(() => {
      //   this.show_animation = !this.show_animation
      // }, 6000)
    },
    async new_timeline_start() {
      this.time_line_dialog = true;
      this.is_show_one = false;
      for(let i=0; i<this.timeline_two_text.length; i++){
        this.timeline_two_text[i].show=false;
      }
      clearTimeout(this.timeline_timeout);
      this.show_animation = true;

      await new Promise(resolve => {
        this.timeline_timeout = setTimeout(resolve, 600);
        return this.timeline_timeout;
      });

      for(let i=0; i<this.timeline_two.length; i++){

        if(i>0){
          this.timeline_two_text[this.timeline_two_index[i-1]].show=false;
        }
        this.timeline_two_text[this.timeline_two_index[i]].show=true;
        await new Promise(resolve => {
          this.timeline_timeout = setTimeout(resolve, 600);
          return this.timeline_timeout;
        });





      }
      // setInterval(() => {
      //   this.show_animation = !this.show_animation
      // }, 6000)
    },
    async close_timeline() {
      this.time_line_dialog = false;
    },

  },
  mounted() {
    this.selected_mtu_list = this.mtu_data[0];


  }
}
</script>


<style  lang="scss">

.dialog-container {
  width: 500px;
  min-height: 100px;
  padding: 20px;
  position: fixed;
  top: 30px;
  right: 20px;
  background: #ffffff;
  background-filter: blur(12px);
  border: 1px solid #27272a;
  z-index: 1000;
  border-radius: 12px;

  transform: translateY(-100px);
  opacity: 0;
  transition: all 0.4s ease-out;
}

.p-timeline-event {
  min-height: 20px;
}


.open_dialog {
  transform: translateY(0px);
  opacity: 1;
}

.gray-bg {
  background: #F5F5F5;
}

.map_info_card {
  width: 400px;
  min-height: 200px;
  padding: 10px 20px;
  position: fixed;
  bottom: 10px;
  right: 20px;
  background: #ffffff;
  background-filter: blur(12px);
  border: 1px solid rgba(120, 122, 126, 0.16);
  z-index: 1000;
  border-radius: 12px;

  transform: translateY(-100px);
  opacity: 1;
  transition: all 0.2s ease-out;

}


.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-in;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(60px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>
