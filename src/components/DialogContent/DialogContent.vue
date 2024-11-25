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
              <div class="title font-bold ">
            {{ item.labels.value2 }}
          </div>
          <div class="text-sm">
            {{ item.labels.label2 }}
          </div>
          <div class="title font-bold mt-2">
            {{ item.labels.value1 ?? '' }}
          </div>
          <div class="text-sm">
            {{ item.labels.label1 }}
          </div>

        </div>

        <div @click="open_overal_worker($event,item.id, selected_mtu_list.index)" v-else
             class="card_box p-3 border-round shadow-1 min-h-full"
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

          <div class="text-red-500 font-bold w-full text-center" v-if="is_show_one">{{ $t('SecondPage.BefMoment') }}</div>
          <div class="text-green-600 font-bold w-full text-center" v-else>{{$t('SecondPage.CurrMoment')}}</div>
          <div class="flex justify-content-evenly text-900 font-bold mt-1">
            <span>{{ $t('SecondPage.Axtachi') }}</span>
            <span><i class='bx bx-right-arrow-alt'></i></span>
            <span>{{ $t('SecondPage.Nukus') }}</span>
          </div>
        </div>
         <div class="relative overflow-hidden w-full min-h-full">
            <Timeline v-if="is_show_one" class="w-full" :value="timeline_one">
              <template #opposite="slotProps">
        <small class="text-blue-600 font-bold">{{ slotProps.item.date }}</small>
    </template>
    <template #content="slotProps" class="h-3rem">
        <div class="flex justify-content-between w-full px-2 align-items-center border-round"
             :class="slotProps.item.show? 'bg-blue-100' : 'bg-transparent'">
          <span>{{ slotProps.item.status }}</span> <i class='bx bxs-left-arrow-circle text-lg'
                                                      :class="slotProps.item.show? 'text-primary' : 'text-white'"></i>
        </div>
    </template>
          </Timeline>
            <Timeline v-else class="w-full" :value="timeline_two_text">
              <template #opposite="slotProps">
        <small class="text-blue-600 font-bold" :class="slotProps.item.stroke && 'line-through text-red-600'">{{
		        slotProps.item.date
	        }}</small>
    </template>
    <template #content="slotProps" class="h-3rem">
        <div class="flex justify-content-between w-full px-2 align-items-center border-round"
             :class="slotProps.item.show? 'bg-blue-100' : 'bg-transparent'">
          <span :class="slotProps.item.stroke && 'line-through text-red-600'">{{ slotProps.item.status }}</span> <i
		        class='bx bxs-left-arrow-circle text-lg'
		        :class="[slotProps.item.show? 'text-primary' : 'text-white' ]"></i>
        </div>
    </template>
          </Timeline>

         </div>
         <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span>{{$t('SecondPage.distance')}}</span>
          <span>1587 {{$t('SecondPage.km')}}</span>
        </div>
        <div class="flex justify-content-between text-sm1 font-bold">
          <span>{{$t('SecondPage.OverallTime')}}</span>
          <span v-if="is_show_one">12 {{$t('SecondPage.day')}}</span>
          <span v-else>5-6 {{$t('SecondPage.day')}}</span>
        </div>
      </div>
    </span>
	
	<span v-if="is_route1">
      <div class="map_info_card shadow-1 border-1 border-blue-200">
        <div class="mt-0 text-500 mb-2">
          <div class="font-bold w-full text-center">{{ $t('SecondPage.QashOxun') }}</div>
          <div class="flex justify-content-evenly text-900 font-bold mt-3 mb-3">
            <span>{{$t('SecondPage.Before')}}</span>
            <span><i class='bx bx-right-arrow-alt'></i></span>
            <span>{{$t('SecondPage.Current')}}</span>
          </div>
        </div>
         <div class="relative overflow-hidden w-full min-h-full">
            <Timeline class="w-full" :value="1">
                <template #opposite="slotProps">

                    <small class="text-red-600 font-bold">55 {{$t('SecondPage.hour')}}</small>
	            </template>
			    <template #content="slotProps" class="h-3rem">
			        <div class="flex justify-content-between w-full px-2 align-items-center border-round">
			          <span class="text-green-600 font-bold">36 {{$t('SecondPage.hour')}}</span>
			        </div>
			    </template>
          </Timeline>
         </div>
         <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span>{{$t('SecondPage.distance')}}</span>
          <span>852 км</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Дизел топливасидан иқтисодий самарадорлик</span>
          <span>281,25 тн</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Электр энергиясидан иқтисодий самарадорлик</span>
          <span>1125 кВт</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Тежалган ёқилғи</span>
          <span>87.3 тн</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Жами иқтисод, млн.сўм</span>
          <span>1513,7</span>
        </div>
      </div>
    </span>
	<span v-if="is_route2">
      <div class="map_info_card shadow-1 border-1 border-blue-200">
        <div class="mt-0 text-500 mb-2">

          <div class="font-bold w-full text-center">{{ $t('SecondPage.QarShUz') }}</div>
          <div class="flex justify-content-evenly text-900 font-bold mt-3 mb-3">
            <span>{{$t('SecondPage.Before')}}</span>
            <span><i class='bx bx-right-arrow-alt'></i></span>
            <span>{{$t('SecondPage.Current')}}</span>
          </div>
        </div>
         <div class="relative overflow-hidden w-full min-h-full">
            <Timeline class="w-full" :value="1">
                <template #opposite="slotProps">
                    <small class="text-red-600 font-bold">42 {{$t('SecondPage.hour')}}</small>
	            </template>
			    <template #content="slotProps" class="h-3rem">
			        <div class="flex justify-content-between w-full px-2 align-items-center border-round">
			          <span class="text-green-600 font-bold">24 {{$t('SecondPage.hour')}}</span>
			        </div>
			    </template>
          </Timeline>
         </div>
         <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span>{{$t('SecondPage.distance')}}</span>
          <span>490 {{$t('SecondPage.km')}}</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Тежалган ёқилғи</span>
          <span>149.7 тн</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Жами иқтисод, млн.сўм</span>
          <span>2657,7</span>
        </div>
      </div>
    </span>
	<span v-if="is_route3">
      <div class="map_info_card shadow-1 border-1 border-blue-200">
        <div class="mt-0 text-500 mb-2">
          <div class="font-bold w-full text-center">{{ $t('SecondPage.QumUz') }}</div>
          <div class="flex justify-content-evenly text-900 font-bold mt-3 mb-3">
            <span>{{$t('SecondPage.Before')}}</span>
            <span><i class='bx bx-right-arrow-alt'></i></span>
            <span>{{$t('SecondPage.Current')}}</span>
          </div>
        </div>
         <div class="relative overflow-hidden w-full min-h-full">
            <Timeline class="w-full" :value="1">
                <template #opposite="slotProps">
                    <small class="text-red-600 font-bold">45 {{$t('SecondPage.hour')}}</small>
	            </template>
			    <template #content="slotProps" class="h-3rem">
			        <div class="flex justify-content-between w-full px-2 align-items-center border-round">
			          <span class="text-green-600 font-bold">26 {{$t('SecondPage.hour')}}</span>
			        </div>
			    </template>
          </Timeline>
         </div>
         <div class="flex justify-content-between text-sm mt-3 font-bold">
          <span>{{$t('SecondPage.distance')}}</span>
          <span>742 {{$t('SecondPage.km')}}</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Тежалган ёқилғи</span>
          <span>228.7 тн</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Жами иқтисод, млн.сўм</span>
          <span>3710,0</span>
        </div>
      </div>
    </span>
	<span v-if="is_route4">
      <div class="map_info_card shadow-1 border-1 border-blue-200">
        <div class="mt-0 text-500 mb-2">
          <div class="font-bold w-full text-center">{{ $t('SecondPage.NavOzo') }}</div>
          <div class="flex justify-content-evenly text-900 font-bold mt-3 mb-3">
            <span>{{$t('SecondPage.Before')}}</span>
            <span><i class='bx bx-right-arrow-alt'></i></span>
            <span>{{$t('SecondPage.Current')}}</span>
          </div>
        </div>
         <div class="relative overflow-hidden w-full min-h-full">
            <Timeline class="w-full" :value="1">
                <template #opposite="slotProps">
                    <small class="text-red-600 font-bold">45 {{$t('SecondPage.hour')}}</small>
	            </template>
			    <template #content="slotProps" class="h-3rem">
			        <div class="flex justify-content-between w-full px-2 align-items-center border-round">
			          <span class="text-green-600 font-bold">26 {{$t('SecondPage.hour')}}</span>
			        </div>
			    </template>
          </Timeline>
         </div>
         <div class="flex justify-content-between text-sm mt-3 font-bold">
          <span>{{$t('SecondPage.distance')}}</span>
          <span>562 {{$t('SecondPage.km')}}</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Тежалган ёқилғи</span>
          <span>39.5 тн</span>
        </div>
        <div class="flex justify-content-between text-sm mt-3 font-bold">

          <span :style="{maxWidth: '250px'}">Жами иқтисод, млн.сўм</span>
          <span>703,1</span>
        </div>
      </div>
    </span>
	
	<OverlayPanel ref="overall2_ref" style="width:400px">
		<div class="grid">
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
					<EducationChart v-for="sub_item in item.chart_list" :key="sub_item" :color="sub_item.color"
					                :amount="sub_item.value" :title="sub_item.label"
					                :percent="sub_item.percent"></EducationChart>
				</div>
			</div>
			<div class="col-6 flex justify-content-end align-items-end pb-3">

				<a class="text-sm text-blue-600" href="https://exodim.railway.uz" target="_blank">{{$t('SecondPage.More')}} <i
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
				{status: 'Қўқон', date: '26 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Поп', date: '9  соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Ангрен', date: '5 соат', icon: 'pi pi-cog', show: false},
				{status: 'Оҳангарон', date: '3.5 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Ўзбекистон', date: '7 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Хаваст', date: '45 соат', icon: 'pi pi-cog', show: false},
				{status: 'Мароканд', date: '22 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Бухоро', date: '44 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Мискин', date: '18 соат', icon: 'pi pi-cog', show: false},
				// {status: 'Нукус', date: '0 дақиқа', icon: 'pi pi-shopping-cart',show: false},
			],
			timeline_two_text: [
				{status: 'Ахтачи', date: '25 соат', icon: 'pi pi-shopping-cart', show: false, stroke: false,},
				{status: 'Охунбобоев', date: '30 соат', icon: 'pi pi-cog', show: false, stroke: false,},
				{status: 'Қўқон', date: '20 соат', icon: 'pi pi-shopping-cart', show: false, stroke: true,},
				{status: 'Поп', date: '9  соат', icon: 'pi pi-shopping-cart', show: false, stroke: false,},
				{status: 'Ангрен', date: '5 соат', icon: 'pi pi-cog', show: false, stroke: false,},
				{status: 'Оҳангарон', date: '3.5 соат', icon: 'pi pi-shopping-cart', show: false, stroke: true,},
				{status: 'Ўзбекистон', date: '7 соат', icon: 'pi pi-shopping-cart', show: false, stroke: true,},
				{status: 'Хаваст', date: '35 соат', icon: 'pi pi-cog', show: false, stroke: true,},
				{status: 'Мароканд', date: '22 соат', icon: 'pi pi-shopping-cart', show: false, stroke: false,},
				{status: 'Бухоро', date: '34 соат', icon: 'pi pi-shopping-cart', show: false, stroke: false,},
				{status: 'Мискин', date: '18 соат', icon: 'pi pi-cog', show: false, stroke: false,},
				// {status: 'Нукус', date: '0 дақиқа', icon: 'pi pi-shopping-cart',show: false},
			],
			timeline_two: [
				{status: 'Ахтачи', date: '18 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Охунбобоев', date: '9 соат', icon: 'pi pi-cog', show: false},
				{status: 'Поп', date: '8.5 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Ангрен', date: '4 соат', icon: 'pi pi-cog', show: false},
				{status: 'Мароканд', date: '36 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Бухоро', date: '44 соат', icon: 'pi pi-shopping-cart', show: false},
				{status: 'Мискин', date: '18 соат', icon: 'pi pi-cog', show: false},
				// {status: 'Нукус', date: '0 дақиқа', icon: 'pi pi-shopping-cart',show: false},
			],
			timeline_two_index: [0, 1, 3, 4, 8, 9, 10,],

      mtu_data: [
        {
          name: this.$t('SecondPage.ToshkentMtu'),
          index: 0,
          data: [
            {
              id: 0,
              label:  this.$t('SecondPage.DistanceOfRailways'),
              value: `1654,6 ` +  this.$t('SecondPage.km'),
              iscollapse: false,
            },
            {
              id: 1,
              label:  this.$t('SecondPage.EngRoad'),
              value: `1327,8 км  (80%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label:  this.$t('SecondPage.AssignedLoc'),
              value: `174 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.ElecLoc'),
                  value: "93 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 1,
                  label:  this.$t('SecondPage.MainlineLoc'),
                  value: "3 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 2,
                  label:  this.$t('SecondPage.ShuntLoc'),
                  value: "65 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 3,
                  label:  this.$t('SecondPage.ElecTrains'),
                  value: "13 " +  this.$t('SecondPage.CountWord')
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.CountOfSortingStat'),
                value1: `3 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.TotalStat'),
                value2: `58 ` +  this.$t('SecondPage.CountWord'),
              },

              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.Chukursay'),
                  value: ""
                },
                {
                  id: 1,
                  label:  this.$t('SecondPage.Xavast'),
                  value: ""
                },
                {
                  id: 2,
                  label:  this.$t('SecondPage.Okhangaron'),
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label:  this.$t('SecondPage.CountLocDepo'),
              value: `2 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: this.$t('SecondPage.Toshkent'),
                  value: ""
                },
                {
                  id: 1,
                  label: this.$t('SecondPage.Tinchlik'),
                  value: ""
                },
              ]
            },
            {
              id: 5,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.NumberOfWagons'),
                value1: `2980 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.wagonsDepo'),
                value2: `1 ` +  this.$t('SecondPage.CountWord'),
              },

              iscollapse: false,
            },
            {
              id: 6,
              label:  this.$t('SecondPage.CountEmpl'),
              value: `8045 ` +  this.$t('SecondPage.countLive'),
              iscollapse: true,
            },
          ]
        },
        {
          name: this.$t('SecondPage.QoqonMtu'),
          index: 1,
          data: [
            {
              id: 0,
              label:  this.$t('SecondPage.DistanceOfRailways'),
              value: `981,7 ` +  this.$t('SecondPage.km'),
              iscollapse: false,
            },
            {
              id: 1,
              label:  this.$t('SecondPage.EngRoad'),
              value: `587,31 км (60%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label:  this.$t('SecondPage.AssignedLoc'),
              value: `63 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.ElecLoc'),
                  value: "25 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 1,
                  label:  this.$t('SecondPage.MainlineLoc'),
                  value: "9 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 2,
                  label:  this.$t('SecondPage.ShuntLoc'),
                  value: "28 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 3,
                  label:  this.$t('SecondPage.ElecTrains'),
                  value: "1 " +  this.$t('SecondPage.CountWord')
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.CountOfSortingStat'),
                value1: `2 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.TotalStat'),
                value2: `38 ` +  this.$t('SecondPage.CountWord'),
              },
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: this.$t('SecondPage.Kokand'),
                  value: ""
                },
                {
                  id: 1,
                  label: this.$t('SecondPage.Okhunboboyev'),
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label:  this.$t('SecondPage.CountLocDepo'),
              value: `1 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: this.$t('SecondPage.Andijon'),
                  value: ""
                },
              ]
            },
            {
              id: 5,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.NumberOfWagons'),
                value1: `4331 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.wagonsDepo'),
                value2: `1 ` +  this.$t('SecondPage.CountWord'),
              },
              iscollapse: false,
            },
            {
              id: 6,
              label:  this.$t('SecondPage.CountEmpl'),
              value: `6076 ` +  this.$t('SecondPage.countLive'),
              iscollapse: true,

            },
          ]
        },
        {
          name: this.$t('SecondPage.BuxoroMtu'),
          index: 2,
          data: [
            {
              id: 0,
              label:  this.$t('SecondPage.DistanceOfRailways'),
              value: `2037,2 ` +  this.$t('SecondPage.km'),
              iscollapse: false,
            },
            {
              id: 1,
              label:  this.$t('SecondPage.EngRoad'),
              value: `728,92 км (35,7%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label:  this.$t('SecondPage.AssignedLoc'),
              value: `90 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.ElecLoc'),
                  value: "7 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 1,
                  label:  this.$t('SecondPage.MainlineLoc'),
                  value: "37 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 2,
                  label:  this.$t('SecondPage.ShuntLoc'),
                  value: "46 " +  this.$t('SecondPage.CountWord')
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.CountOfSortingStat'),
                value1: `4 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.TotalStat'),
                value2: `69 ` +  this.$t('SecondPage.CountWord'),
              },

              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: this.$t('SecondPage.Bukhara'),
                  value: ""
                },
                {
                  id: 1,
                  label: this.$t('SecondPage.Marokand'),
                  value: ""
                },
                {
                  id: 2,
                  label: this.$t('SecondPage.Navoi'),
                  value: ""
                },
                {
                  id: 3,
                  label: this.$t('SecondPage.Binokor'),
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label:  this.$t('SecondPage.CountLocDepo'),
              value: `2 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: this.$t('SecondPage.Bukhara'),
                  value: ""
                },
                {
                  id: 1,
                  label: this.$t('SecondPage.Tinchlik'),
                  value: ""
                },
              ]
            },
            {
              id: 5,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.NumberOfWagons'),
                value1: `6430 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.wagonsDepo'),
                value2: `1 ` +  this.$t('SecondPage.CountWord'),
              },
              iscollapse: false,
            },
            {
              id: 6,
              label:  this.$t('SecondPage.CountEmpl'),
              value: `9812 ` +  this.$t('SecondPage.countLive'),
              iscollapse: true,
            },
          ]
        },
        {
          name: this.$t('SecondPage.KungirotMtu'),
          index: 3,
          data: [
            {
              id: 0,
              label:  this.$t('SecondPage.DistanceOfRailways'),
              value: `1491,7 ` +  this.$t('SecondPage.km'),
              iscollapse: false,
            },
            // {
            //   id: 1,
            //   label:  this.$t('SecondPage.EngRoad'),
            //   value: 'hidden',
            //   iscollapse:false,
            // },
            {
              id: 2,
              label:  this.$t('SecondPage.AssignedLoc'),
              value: `59 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 1,
                  label:  this.$t('SecondPage.MainlineLoc'),
                  value: "35 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 2,
                  label:  this.$t('SecondPage.ShuntLoc'),
                  value: "24 " +  this.$t('SecondPage.CountWord')
                },
              ]
            },
            {
              id: 3,

              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.CountOfSortingStat'),
                value1: `3 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.TotalStat'),
                value2: `49 ` +  this.$t('SecondPage.CountWord'),
              },

              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: this.$t('SecondPage.Misken'),
                  value: ""
                },
                {
                  id: 1,
                  label: this.$t('SecondPage.Kungirot'),
                  value: ""
                },
                {
                  id: 2,
                  label: this.$t('SecondPage.Nukus'),
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label:  this.$t('SecondPage.CountLocDepo'),
              value: `2 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label: this.$t('SecondPage.Urganch'),
                  value: ""
                },
                {
                  id: 1,
                  label: this.$t('SecondPage.Kungirot'),
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label:  this.$t('SecondPage.wagonsDepo'),
              value: `1 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: false,
            },
            {
              id: 6,
              label:  this.$t('SecondPage.CountEmpl'),
              value: `5560 ` +  this.$t('SecondPage.countLive'),
              iscollapse: true,
            },
          ]
        },
        {
          name: this.$t('SecondPage.QarshiMtu'),
          index: 4,
          data: [
            {
              id: 0,
              label:  this.$t('SecondPage.DistanceOfRailways'),
              value: `722,8 ` +  this.$t('SecondPage.km'),
              iscollapse: false,
            },
            {
              id: 1,
              label:  this.$t('SecondPage.EngRoad'),
              value: `440,3 км (61%)`,
              iscollapse: false,
            },
            {
              id: 2,
              label:  this.$t('SecondPage.AssignedLoc'),
              value: `40 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.ElecLoc'),
                  value: "18 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 1,
                  label:  this.$t('SecondPage.MainlineLoc'),
                  value: "6 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 2,
                  label:  this.$t('SecondPage.ShuntLoc'),
                  value: "16 " +  this.$t('SecondPage.CountWord')
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.CountOfSortingStat'),
                value1: `1 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.TotalStat'),
                value2: `30 ` +  this.$t('SecondPage.CountWord'),
              },
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.Karshi'),
                  value: ""
                },
              ]
            },
            {
              id: 4,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.NumberOfWagons'),
                value1: `5295 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.wagonsDepo'),
                value2: `1 ` +  this.$t('SecondPage.CountWord'),
              },
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.Karshi'),
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label:  this.$t('SecondPage.wagonsDepo'),
              value: `1 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: false,
            },
            {
              id: 6,
              label:  this.$t('SecondPage.CountEmpl'),
              value: `4469  ` +  this.$t('SecondPage.countLive'),
              iscollapse: false,
            },
            {
              id: 7,
              label:  this.$t('SecondPage.AvailableWagons'),
              value: `8045 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
            },
          ]
        },
        {
          name: this.$t('SecondPage.TermizMtu'),
          index: 5,
          data: [
            {
              id: 0,
              label:  this.$t('SecondPage.DistanceOfRailways'),
              value: `600,9 ` +  this.$t('SecondPage.km'),
              iscollapse: false,
            },
            {
              id: 1,
              label:  this.$t('SecondPage.EngRoad'),
              value: `244,4 ` +  this.$t('SecondPage.km'),
              iscollapse: false,
            },
            {
              id: 2,
              label:  this.$t('SecondPage.AssignedLoc'),
              value: `45 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.ElecLoc'),
                  value: "11 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 1,
                  label:  this.$t('SecondPage.MainlineLoc'),
                  value: "14 " +  this.$t('SecondPage.CountWord')
                },
                {
                  id: 2,
                  label:  this.$t('SecondPage.ShuntLoc'),
                  value: "20 " +  this.$t('SecondPage.CountWord')
                },
              ]
            },
            {
              id: 3,
              multiple_label: true,
              labels: {
                label1:  this.$t('SecondPage.CountOfSortingStat'),
                value1: `2 ` +  this.$t('SecondPage.CountWord'),
                label2:  this.$t('SecondPage.TotalStat'),
                value2: `26 ` +  this.$t('SecondPage.CountWord'),
              },
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.Termez'),
                  value: ""
                },
                {
                  id: 1,
                  label:  this.$t('SecondPage.Kumkurgan'),
                  value: ""
                },
              ]
            },
            {
              id: 4,
              label:  this.$t('SecondPage.CountLocDepo'),
              value: `1 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: true,
              nodes_list: [
                {
                  id: 0,
                  label:  this.$t('SecondPage.Termez'),
                  value: ""
                },
              ]
            },
            {
              id: 5,
              label:  this.$t('SecondPage.wagonsDepo'),
              value: `1 ` +  this.$t('SecondPage.CountWord'),
              iscollapse: false,
            },
            {
              id: 6,
              label:  this.$t('SecondPage.CountEmpl'),
              value: `3591  ` +  this.$t('SecondPage.countLive'),
              iscollapse: true,
            },
          ]
        },
      ],
			selected_mtu_list: [],
			selected_overall_list: [],
			timeline_timeout: null,
			is_show_one: true,
			time_line_dialog: false,
			is_route1: false,
			is_route2: false,
			is_route3: false,
			is_route4: false,

      mtu_worker_list: [
        {
          id: 1,
          name:  this.$t('SecondPage.ToshkentMtu'),
          data: [
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.HigherEdu'),
                  value: 1562,
                  percent: 20,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.SecEdu'),
                  value: 3981,
                  percent: 50,
                  color: 'yellow',
                },
                {
                  label:  this.$t('SecondPage.VocEdu'),
                  value: 2404,
                  percent: 30,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.till31'),
                  value: 1790,
                  percent: 22,
                  color: 'green',

                },
                {
                  label:  this.$t('SecondPage.till45'),
                  value: 4162,
                  percent: 52,
                  color: 'yellow',

                },
                {
                  label:  this.$t('SecondPage.upTo46'),
                  value: 2049,
                  percent: 26,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.men'),
                  value: 6748,
                  percent: 84,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.women'),
                  value: 1253,
                  percent: 16,
                  color: 'yellow',
                },
              ]
            },


          ]
        },
        {
          id: 2,
          name: this.$t('SecondPage.QoqonMtu'),
          data: [
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.HigherEdu'),
                  value: 986,
                  percent: 16,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.SecEdu'),
                  value: 3394,
                  percent: 56,
                  color: 'yellow',
                },
                {
                  label:  this.$t('SecondPage.VocEdu'),
                  value: 1669,
                  percent: 28,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.till31'),
                  value: 2016,
                  percent: 33,
                  color: 'green',

                },
                {
                  label:  this.$t('SecondPage.till45'),
                  value: 2576,
                  percent: 43,
                  color: 'yellow',

                },
                {
                  label:  this.$t('SecondPage.upTo46'),
                  value: 1466,
                  percent: 24,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.men'),
                  value: 5352,
                  percent: 88,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.women'),
                  value: 709,
                  percent: 12,
                  color: 'yellow',
                },
              ]
            },


          ]
        },
        {
          id: 3,
          name: this.$t('SecondPage.BuxoroMtu'),
          data: [
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.HigherEdu'),
                  value: 1424,
                  percent: 15,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.SecEdu'),
                  value: 6035,
                  percent: 62,
                  color: 'yellow',
                },
                {
                  label:  this.$t('SecondPage.VocEdu'),
                  value: 2322,
                  percent: 24,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.till31'),
                  value: 2597,
                  percent: 26,
                  color: 'green',

                },
                {
                  label:  this.$t('SecondPage.till45'),
                  value: 5215,
                  percent: 53,
                  color: 'yellow',

                },
                {
                  label:  this.$t('SecondPage.upTo46'),
                  value: 1990,
                  percent: 20,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.men'),
                  value: 8409,
                  percent: 86,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.women'),
                  value: 1393,
                  percent: 14,
                  color: 'yellow',
                },
              ]
            },


          ]
        },
        {
          id: 4,
          name: this.$t('SecondPage.KungirotMtu'),
          data: [
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.HigherEdu'),
                  value: 847,
                  percent: 15,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.SecEdu'),
                  value: 2807,
                  percent: 51,
                  color: 'yellow',
                },
                {
                  label:  this.$t('SecondPage.VocEdu'),
                  value: 1889,
                  percent: 34,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.till31'),
                  value: 1223,
                  percent: 22,
                  color: 'green',

                },
                {
                  label:  this.$t('SecondPage.till45'),
                  value: 2958,
                  percent: 53,
                  color: 'yellow',

                },
                {
                  label:  this.$t('SecondPage.upTo46'),
                  value: 1376,
                  percent: 25,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.men'),
                  value: 4751,
                  percent: 85,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.women'),
                  value: 806,
                  percent: 15,
                  color: 'yellow',
                },
              ]
            },


          ]
        },
        {
          id: 5,
          name: this.$t('SecondPage.QarshiMtu'),
          data: [
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.HigherEdu'),
                  value: 1002,
                  percent: 22,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.SecEdu'),
                  value: 1684,
                  percent: 38,
                  color: 'yellow',
                },
                {
                  label:  this.$t('SecondPage.VocEdu'),
                  value: 1753,
                  percent: 39,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.till31'),
                  value: 765,
                  percent: 17,
                  color: 'green',

                },
                {
                  label:  this.$t('SecondPage.till45'),
                  value: 2448,
                  percent: 55,
                  color: 'yellow',

                },
                {
                  label:  this.$t('SecondPage.upTo46'),
                  value: 1247,
                  percent: 28,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.men'),
                  value: 4029,
                  percent: 90,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.women'),
                  value: 431,
                  percent: 10,
                  color: 'yellow',
                },
              ]
            },


          ]
        },
        {
          id: 6,
          name: this.$t('SecondPage.TermizMtu'),
          data: [
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.HigherEdu'),
                  value: 920,
                  percent: 26,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.SecEdu'),
                  value: 1642,
                  percent: 46,
                  color: 'yellow',
                },
                {
                  label:  this.$t('SecondPage.VocEdu'),
                  value: 1019,
                  percent: 28,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.till31'),
                  value: 654,
                  percent: 18,
                  color: 'green',

                },
                {
                  label:  this.$t('SecondPage.till45'),
                  value: 2125,
                  percent: 59,
                  color: 'yellow',

                },
                {
                  label:  this.$t('SecondPage.upTo46'),
                  value: 806,
                  percent: 22,
                  color: 'blue',
                },
              ]
            },
            {
              chart_list: [
                {
                  label:  this.$t('SecondPage.men'),
                  value: 3232,
                  percent: 90,
                  color: 'green',
                },
                {
                  label:  this.$t('SecondPage.women'),
                  value: 353,
                  percent: 10,
                  color: 'yellow',
                },
              ]
            },


          ]
        },
      ],
			selected_mtu: null,
		}
	},
	methods: {
		go_push_element(pointX, pointY, scale) {
			this.pointX = pointX;
			this.pointY = pointY;
			this.scale = scale;
			this.zoo_element.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`
		},
		control_dialog(event) {
			this.$refs.overall_content.toggle(event);
		},
		control_overall2(event, isShow, list, id) {
			if (isShow && id !== 6) {
				this.selected_overall_list = list;
				this.$refs.overall2_ref.toggle(event);
			}
			
		},
		
		open_overal_worker(event, id, index) {
			if (id === 6) {
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
			for (let i = 0; i < this.timeline_one.length; i++) {
				this.timeline_one[i].show = false;
			}
			clearTimeout(this.timeline_timeout);
			this.show_animation = true;
			
			
			await new Promise(resolve => {
				this.timeline_timeout = setTimeout(resolve, 600);
				return this.timeline_timeout;
			});
			
			for (let i = 0; i < this.timeline_one.length; i++) {
				
				if (i > 0) {
					this.timeline_one[i - 1].show = false;
				}
				this.timeline_one[i].show = true;
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
			for (let i = 0; i < this.timeline_two_text.length; i++) {
				this.timeline_two_text[i].show = false;
			}
			clearTimeout(this.timeline_timeout);
			this.show_animation = true;
			
			await new Promise(resolve => {
				this.timeline_timeout = setTimeout(resolve, 600);
				return this.timeline_timeout;
			});
			
			for (let i = 0; i < this.timeline_two.length; i++) {
				
				if (i > 0) {
					this.timeline_two_text[this.timeline_two_index[i - 1]].show = false;
				}
				this.timeline_two_text[this.timeline_two_index[i]].show = true;
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
			this.is_route1 = false;
			this.is_route2 = false;
			this.is_route3 = false;
			this.is_route4 = false;
		},
		
		async route1_timeline() {
			this.is_route1 = true;
		},
		async route2_timeline() {
			this.is_route2 = true;
		},
		async route3_timeline() {
			this.is_route3 = true;
		},
		async route4_timeline() {
			this.is_route4 = true;
		},
		
	},
	mounted() {
		this.selected_mtu_list = this.mtu_data[0];
		
	}
}
</script>


<style lang="scss">

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
	bottom: 0;
	right: 20px;
	background: #ffffff;
	background-filter: blur(12px);
	border: 1px solid rgba(120, 122, 126, 0.16);
	z-index: 1000;
	border-radius: 12px;
	
	transform: translateY(-55px);
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
