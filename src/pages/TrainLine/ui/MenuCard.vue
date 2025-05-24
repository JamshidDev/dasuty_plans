<script>
import {MTU_One, MTU_Three, schemeUrl, newProject} from "../data.js"
export default {
  data(){
    return{
      MTU_One,
      MTU_Three,
      newProject,
      selectedData:null,
    }
  },
  methods:{
    openModalScheme(event){
      this.$refs.overallSchemeRef.toggle(event);
    },
    onSelectEv(event,v){
      this.selectedData = v.finance
      this.onOpenCapital(event,v);

    },
    onOpenScheme(){
      window.open(schemeUrl, '_blank');
    },
    onOpenProject(event){
      this.$refs.overallFeatureRef.toggle(event);
    },
    onOpenCapital(event){
      this.$refs.overallCapitalRef.toggle(event);
    },
    calculateCapital(x1,x2,x3){
      const total = x1+x2+x3/1000
      return total.toFixed(2)
    },
    openFile(v){
      window.open(v.url, '_blank');
    },
    totalCapital(mtu){
      let sum = 0;
      for(const item of mtu){
        if(item?.url){
          sum = sum + Number(this.calculateCapital(item.finance.routeCapital,item.finance.energyCapital,item.finance.signalCapital))
        }else{
          sum = sum + item.finance
        }
      }
      return sum.toFixed(1)
    }

  }
}
</script>

<template>
<div class="menu__card-container block border-1 border-gray-300 shadow-2 bg-white border-round-lg">
<div class="">
  <div class="w-full px-2 grid pt-2 grid-nogutter gap-2">
    <div
        @click="openModalScheme"
        class="col-6 px-2 py-1 border-1 border-gray-200 bg-gray-50 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">
      <i class='bx bxs-grid-alt'></i>
      Муаммоли станциялар

    </div>
    <div
        @click="onOpenScheme"
        class="col px-2 py-1 border-1 border-gray-200 bg-gray-50 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">
      <i class='bx bxs-grid-alt'></i>
      Ҳаракатлар жадвали

    </div>
    <div
        @click="onOpenProject"
        class="col-6 px-2 py-1 border-1 border-gray-200 bg-gray-50 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">
      <i class='bx bxs-grid-alt'></i>
      Янги лойиҳалар
    </div>



  </div>
</div>
</div>
  <OverlayPanel ref="overallSchemeRef" style="width:600px">
    <div class="grid">
      <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-gray-200 bg-gray-50">
        <span class="text-blue-600 font-bold">Тошкент минтақавий темир йўл узели</span>
        <span class="text-red-600 font-bold">{{totalCapital(MTU_One)}} <span class="font-medium text-gray-400 inline-block">млрд сўм</span></span>
      </div>
      <template v-for="(item, idx) in MTU_One" :key="item.id">
        <template v-if="item.url">
          <div
              @click="onSelectEv($event,item)"
              class="col-4 flex justify-content-between align-items-center hover:bg-blue-50 hover:border-blue-400 cursor-pointer transition-all border-bottom-2 border-transparent">
            <span class="font-medium text-sm"> <span class="text-sm text-gray-400">{{idx+1}}.</span> {{item.name}}</span>
            <span><i @click.stop="openFile(item)" class='bx bx-link-external text-xl'></i></span>
          </div>
        </template>
        <template v-else>
          <div
              class="col-12 flex justify-content-between align-items-center hover:bg-blue-50 hover:border-blue-400 cursor-pointer transition-all border-bottom-2 border-transparent">
            <span class="font-medium text-sm"> <span class="text-sm text-gray-400"></span> Тортиш ним станцияси</span>
            <span class="font-semibold text-red-600">{{item.finance}} <span class="font-medium text-gray-400 inline-block">млрд сўм</span></span>
          </div>
        </template>

      </template>





      <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-gray-200 mt-4 bg-gray-50">
        <span class="text-blue-600 font-bold">Бухоро минтақавий темир йўл узели</span>
        <span class="text-red-600 font-bold">{{totalCapital(MTU_Three)}} <span class="font-medium text-gray-400 inline-block">млрд сўм</span></span>
      </div>
      <template v-for="(item,idx) in MTU_Three" :key="item.id">
        <div
            @click="onSelectEv($event,item)"
            class="col-4 hover:bg-blue-50 hover:border-blue-400 cursor-pointer transition-all border-bottom-2 border-transparent flex justify-content-between align-items-center">
          <span class="font-medium text-sm"><span class="text-sm text-gray-400">{{idx+1}}.</span> {{item.name}}</span>
          <span><i @click.stop="openFile(item)" class='bx bx-link-external text-xl'></i></span>

        </div>
      </template>
    </div>
  </OverlayPanel>


  <OverlayPanel ref="overallFeatureRef" style="width:600px">
    <div class="grid">
      <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-gray-200 bg-gray-50">
        <span class="text-blue-600 font-bold">Режалаштирилган янги лойиҳалар</span>
        <span class="text-red-600 font-bold"></span>
      </div>
      <template v-for="(item, idx) in newProject" :key="item.id">
        <div
            class="col-12 cursor-pointer flex mt-4 border-1 border-blue-100 border-round bg-blue-50">
          <div style="width:120px" class="text-blue-500 text-sm">{{idx+1}}. Лойиҳа номи:</div>
          <div class="font-medium" style="width:calc(100% - 120px)">{{item.name}}</div>
        </div>
        <div
            class="col-12 cursor-pointer flex bg-gray-50">
          <div style="width:100px" class="text-blue-500 text-sm">Капитал:</div>
          <div class="font-bold text-right flex align-items-center gap-2 justify-content-end" style="width:calc(100% - 100px)">{{item.finance}} <span class="font-medium text-gray-400 inline-block mr-4">млрд сўм</span>
            <i v-if="item?.url" @click.stop="openFile(item)" class='bx bx-link-external text-xl'></i>
          </div>
        </div>
      </template>
    </div>
  </OverlayPanel>
  <OverlayPanel ref="overallCapitalRef" style="width:600px">
    <div class="grid">
      <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-gray-200 bg-gray-50">
        <span class="text-blue-600 font-bold">Умумий лойиҳа капитали</span>
        <span v-if="selectedData" class="text-red-600 font-bold">{{calculateCapital(selectedData.routeCapital, selectedData.energyCapital,selectedData.signalCapital)}} <span class="font-medium text-gray-400 inline-block">млрд сўм</span></span>
      </div>
      <template v-if="selectedData">
        <div
            class="col-12 cursor-pointer flex bg-gray-50">
          <div style="width:200px" class="text-blue-500 text-sm">Йўл хўжалиги:</div>
          <div class="font-bold text-right" style="width:calc(100% - 200px)">{{selectedData.routeCapital}} <span class="font-medium text-gray-400 inline-block">млрд сўм</span></div>
        </div>
        <div
            class="col-12 cursor-pointer flex bg-gray-50">
          <div style="width:200px" class="text-blue-500 text-sm">Энергия хўжалиги:</div>
          <div class="font-bold text-right" style="width:calc(100% - 200px)">{{selectedData.energyCapital}} <span class="font-medium text-gray-400 inline-block">млрд сўм</span></div>
        </div>
        <div
            class="col-12 cursor-pointer flex bg-gray-50">
          <div style="width:200px" class="text-blue-500 text-sm">Алоқа хўжалиги:</div>
          <div class="font-bold text-right" style="width:calc(100% - 200px)">{{selectedData.signalCapital}} <span class="font-medium text-gray-400 inline-block">млн сўм</span></div>
        </div>
      </template>
    </div>
  </OverlayPanel>
</template>

<style scoped lang="scss">
.menu__card-container{
  width:600px;
  height:100px;
    position:fixed;
  bottom:110px;
  left:6px;
  z-index:1000;

}
</style>