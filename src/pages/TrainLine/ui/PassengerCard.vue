<script>

export default {
  data(){
    return {
      visible:false,
      isOldVersion:false
    }
  },
  methods:{
    controlModalEv(visible,isOldVersion ){
      this.isOldVersion = isOldVersion
      this.visible = visible
    }
  }
}

</script>

<template>
    <div v-if="visible" class="passenger__card-container block border-1 border-gray-300 shadow-2 bg-white border-round-lg pb-2">
        <div class="w-full px-2 grid pt-2 grid-nogutter gap-2">
          <div class="col-12 flex justify-content-center">
            <span class="text-blue-600 font-semibold">{{isOldVersion? 2024 : 2026 }} - йил ҳисобида</span>
          </div>
            <div 
                class="col-12 px-2 py-1 border-1 border-gray-200 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">
              <span><i class='bx bx-male-female mr-2'></i>Ташилган йўловчилар</span>
              <span class="font-bold text-blue-600">{{isOldVersion? '1 376 052' : '2 226 350' }} </span>
            </div>
          <div
              class="col-12 px-2 py-1 border-1 border-gray-200 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">
            <span><i class='bx bx-male-female mr-2'></i>Йўловчи айланмаси (минг.одам.км)</span>
            <span class="font-bold text-blue-600">{{isOldVersion? '521 969' : '839 663' }}</span>
          </div>
<!--            <div -->
<!--                class="col px-2 py-1 border-1 border-gray-200 bg-gray-50 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">-->
<!--                <i class='bx bx-male-female'><span style="margin-left: 20px;">2.266.350</span></i>-->
<!--                2026-->
<!--            </div>-->
        </div>
    </div>
</template>

<style scoped lang="scss">
.passenger__card-container {
    width: 600px;
    position: fixed;
    bottom: 50px;
    right: 6px;
    z-index: 1000;

}
</style>