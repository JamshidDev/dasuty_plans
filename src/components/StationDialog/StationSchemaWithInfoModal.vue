<script setup>

import {computed, ref} from "vue"
import VueEasyLightbox from "vue-easy-lightbox"

const visible = ref(false)
const visibleRef = ref(false)
const indexRef = ref('uzbekistan')

const dataObject = ref( {
  'oqkoprik': {
    name:'Оқ кўприк',
    image:'/schema/png/OKKOPRIK.png',
    problems:[
      {
        id:1,
        text:`Тунги вақтда бир вақтнинг ўзида  поездларни чегара назоратидан ўтказиш имконияти мавжуд эмас. Бунинг натижасида кунлик 8-10 жуфт поезд ўртача 1-1.30 соатдан ва умумий 8соатдан 10-соатгача  туриб қолмоқда`
      },
    ],
    suggestions:[
      {
        id:1,
        text:`Тунги вақтда чегара назорати ишчи ходимлари сонини кўпайтириш, бир вақтнинг ўзида камида 3-4 та поезд кўрикдан ўтказиш имкониятини яратиш.`
      },
    ],
    info:[
      {
        id:1,
        text:`- Ўзбекистон йўналиши буйича 16 та поезд`
      },
      {
        id:2,
        text:`- Чукурсой йўналиши бўйича 19 та поезд`
      },
      {
        id:3,
        text:`- Сариагач йўналиши бўйича 32 та поезд`
      },
    ]
  },
  'chuqursoy': {
    name:'Чуқурсой',
    image:'/schema/png/chuquq-22.png',
    problems:[
      {
        id:1,
        text:`Бир вақтнинг ўзида жуфт ва тоқ поездларни ўтказиш имкониятини яратиш, ИКМ орқали ўтаётган поездлар тезлигини ошириш ва поездларни ИКМ дан қайта текширувдан ўтказмаслик имкониятини яратиш учун замонавий ИКМ қўрилмасига алмаштириш.`
      },
      {
        id:2,
        text:`АСОУП ва ПИ тизимиларини итегреция қилиш имкониятини жадаллаштириш, ПИ тизимига маълумотлар киритиш узоқ вақт талаб этади.`
      },
    ],
    suggestions:[
      {
        id:1,
        text:`Контейнерлар учун божхона расмийлаштирувини соддалаштириш ва Божхона назрат ўтказиш вақтларини қисқартириш.`
      },
      {
        id:2,
        text:`АСОУП тизимини янгилаш орқали ПИ тизимлари интеграция ишларини жадаллаштириш.`
      },
    ],
    info:[
      {
        id:1,
        text:`- Сариагач йўналиши бўйича 20 та поезд`
      },
      {
        id:2,
        text:`- Хаваст йўналиши буйича 6 та поезд`
      },
      {
        id:3,
        text:`- Ангрен-Бозсу- йўналиши бўйича 15 та поезд`
      },
    ]
  },
  'chuqursoyKeles': {
    name:'Келес-Чуқурсой перегони',
    image:'/schema/png/Chuqursoy.png',
    problems:[
      {
        id:1,
        text:`ИКМ(инспекцион кўрик мажмуаси) ўрнатилган бўлиб, ушбу икки йўлли перегонда бир вақтнинг ўзида тоқ ва жуфт йўналишга поездни ўтказиш имконияти мавжуд эмас, 10-30км/соат чегараланган тезлик ўртнатилган, ва кўрик пайтида нуқсонлар кўплиги(бир ойда ўртача 5-10 та поезд қайта текширувдан ўтказилади).`
      },
    ],
    suggestions:[
      {
        id:1,
        text:`Бир вақтнинг ўзида жуфт ва тоқ поездларни ўтказиш имкониятини яратиш, ИКМ орқали ўтаётган поездлар тезлигини ошириш ва поездларни ИКМ дан қайта текширувдан ўтказмаслик имкониятини яратиш учун замонавий ИКМ қўрилмасига алмаштириш.`
      },
    ]
  },
  'nazarbek': {
    name:'Назарбек-Далагузар перегони',
    image:'/schema/png/Chuqursoy.png',
    problems:[
      {
        id:1,
        text:`ИКМ(инспекцион кўрик мажмуаси) ўрнатилган бўлиб, ушбу икки йўлли перегонда бир вақтнинг ўзида  тоқ ва жуфт йўналишга поездни ўтказиш имконияти мавжуд эмас, 10-30км/соат чегараланган тезлик ўртнатилган, ва кўрик пайтида нуқсонлар кўплиги(бир ойда ўртача 5-10 та поезд қайта текширувдан ўтказилади).`
      },
    ],
    suggestions:[
      {
        id:1,
        text:`Бир вақтнинг ўзида жуфт ва тоқ поездларни ўтказиш имкониятини яратиш, ИКМ орқали ўтаётган поездлар тезлигини ошириш ва поездларни ИКМ дан қайта текширувдан ўтказмаслик имкониятини яратиш учун замонавий ИКМ қўрилмасига алмаштириш.`
      },
    ]
  },
  'uzbekistan': {
    name:'Ўзбекистон',
    image:'/schema/png/UZB.png',
    problems:[
      {
        id:1,
        text:`Контейнер вагонлардаги божхона назоратидан хужжатлари ўз вақтида тайёр бўлмаслиги. Ўртача кунлик 3-4 та поезд (150-200 та вагон) 8 соатдан 10 соатгача туриб қолмоқда.`
      },
      {
        id:2,
        text:`АСОУП ва ПИ тизимиларини итегреция қилиш имкониятини жадаллаштириш, ПИ тизимига маълумотлар киритиш узоқ вақт талаб этади.`
      },
    ],
    suggestions:[
      {
        id:1,
        text:`Контейнерлар учун божхона расмийлаштирувини соддалаштириш ва Божхона назрат ўтказиш вақтларини қисқартириш.`
      },
      {
        id:2,
        text:`АСОУП тизимини янгилаш орқали ПИ тизимлари интеграция ишларини жадаллаштириш.`
      },
    ],
    info:[
      {
        id:1,
        text:`- Хаваст йўналиши буйича 16 та поезд`
      },
      {
        id:2,
        text:`- Ангрен йўналиши буйича 6 та поезд`
      },
      {
        id:3,
        text:`- Сариагаш станцияси бўйича 12 та поезд`
      },
    ]
  },
  'general': {
    name:'Умумий муаммолар',
    problems:[
      {
        id:1,
        text:`- Локомотивлар парки поездлар оқимига нисбатан кам.`,
      },
      {
        id:2,
        text:`- Локомотив парки 85 тани ташкил қилади.`,
      },
      {
        id:3,
        text:`- Поездлар оқими кўпайганлиги сабабли кунлик локомативлар 110 та локомативни талаб этилади.`,
      },
      {
        id:4,
        text:`- Натижада “Ўзбекистон темир йўллари” АЖ худудида бир кунда ўртача 300 тадан 320 тагача тайёр поезларни ва 110тадан 120тагача поездлар локомотивлар етишмаслиги натижасида жўнатилмасдан қолиб кетмоқда.`,
      },

    ],
    suggestions:[],
    info:[]
  },

})

const onHide = ()=>{
  visibleRef.value = false
  visible.value = true
}

const openImage = ()=>{
  visible.value = false
  visibleRef.value = true
}

const images = computed(()=>{
  return [
    {
      src:dataObject.value[indexRef.value].image
    }
  ]
})

const selectedData = computed(()=>{
  return dataObject.value[indexRef.value]
})

const headerTitle = computed(()=> dataObject.value[indexRef.value].name)


const openStationSchemaModal = (key)=>{
  indexRef.value = key
  visible.value = false
  setTimeout(()=>{
    visible.value = true
  },200)
}

const closeEv = ()=>{
  visible.value = false
}

defineExpose({
  openStationSchemaModal,
  closeEv,
})
</script>

<template>
  <Dialog
      v-model:visible="visible"
      :header="headerTitle"
      :style="{ width:'600px' }"
      position="topleft"
      class="shadow-"
  >
    <div class="grid">
      <div class="col-12" v-if="selectedData.image">
        <img @click="openImage" class="cursor-pointer w-full border-1 border-blue-50 border-round-2xl" :src="selectedData.image" alt="">
      </div>
      <div class="col-12">
        <div class="bg-red-50 p-2 border-round-2xl flex flex-column text-red-600">
          <span v-if="indexRef !== 'general'" class="bg-red-100  text-red-600 border-round-2xl px-2  border-1 border-red-300 mb-2 mx-auto">Муаммолар</span>
          <span class="font-bold pl-2" v-if="indexRef !== 'general'">{{selectedData.name}}</span>
          <template v-for="item in selectedData.problems">
            <p class="text-red-600 mb-2"><span class="mr-2">{{indexRef !== 'general'? item.id+'. ' : ''}}</span> {{item.text}}</p>
          </template>
          <template v-if="indexRef === 'chuqursoy'">
            <span class="font-bold pl-2">{{dataObject.chuqursoyKeles.name}}</span>
            <template v-for="item in dataObject.chuqursoyKeles.problems">
              <p class="text-red-600 mb-2"><span class="mr-2">{{item.id}}.</span> {{item.text}}</p>
            </template>
          </template>
          <template v-if="indexRef === 'uzbekistan'">
            <span class="font-bold pl-2">{{dataObject.nazarbek.name}}</span>
            <template v-for="item in dataObject.nazarbek.problems">
              <p class="text-red-600 mb-2"><span class="mr-2">{{item.id}}.</span> {{item.text}}</p>
            </template>
          </template>
        </div>
      </div>
      <div class="col-12">
        <div class="bg-green-50 p-2 border-round-2xl flex flex-column text-green-600" v-if="indexRef !== 'general'">
          <span class="bg-green-100  text-green-600 border-round-2xl px-2  border-1 border-green-300 mb-2 mx-auto">Таклифлар</span>
          <span class="font-bold pl-2">{{selectedData.name}}</span>
          <template v-for="item in selectedData.suggestions">
            <p class="text-green-600 mb-2"><span class="mr-2">{{item.id}}.</span> {{item.text}}</p>
          </template>
          <template v-if="indexRef === 'chuqursoy'">
            <span class="font-bold pl-2">{{dataObject.chuqursoyKeles.name}}</span>
            <template v-for="item in dataObject.chuqursoyKeles.suggestions">
            <p class="text-green-600 mb-2"><span class="mr-2">{{item.id}}.</span> {{item.text}}</p>
            </template>
          </template>
          <template v-if="indexRef === 'uzbekistan'">
            <span class="font-bold pl-2">{{dataObject.nazarbek.name}}</span>
            <template v-for="item in dataObject.nazarbek.suggestions">
              <p class="text-green-600 mb-2"><span class="mr-2">{{item.id}}.</span> {{item.text}}</p>
            </template>
          </template>
        </div>
      </div>
      <div class="col-12" v-if="indexRef !== 'general'">
        <div class="bg-yellow-50 p-2 border-round-2xl flex flex-column text-yellow-600">
          <span class="bg-yellow-100  text-yellow-600 border-round-2xl px-2  border-1 border-yellow-300 mb-2 mx-auto">Кунлик ўртача тайёр поездлар:

</span>
          <template v-for="item in selectedData.info">
            <p class="text-yellow-600 mb-2"><span class="mr-2"></span> {{item.text}}</p>
          </template>
        </div>
      </div>


    </div>

  </Dialog>
  <VueEasyLightbox
      :imgs="images"
      :index="0"
      :visible="visibleRef"
      @hide="onHide"
  />
</template>

<style scoped>
.vel-img-wrapper{
  z-index:1000 !important
}
</style>