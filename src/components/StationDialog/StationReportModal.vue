<script setup>
import {ref} from "vue";
import {stationReport} from "@/data/stationReport.js";

const visible = ref(false)
const stationName = ref(null)
const stationData = ref(null)

const openReport = (stationId) => {
  visible.value = false
  let station = stationReport.find((v) => v.id === stationId)
  if (station) {
    stationName.value = station.name
    stationData.value = station
    setTimeout(() => {
      visible.value = true
    }, 200)

  }
}

const onClose = () => {
  visible.value = false
}

defineExpose({
  openReport,
  onClose
})
defineEmits(['close'])

</script>

<template>
  <Dialog
      v-model:visible="visible"
      :header="stationName"
      :style="{ width:'600px' }"
      class="shadow-"
      position="topleft"
      @update:visible="(v)=>{
        if(!v){
          $emit('close')
        }
      }"
  >
    <div class="grid bg-yellow-100 border-1 border-round border-yellow-300 p-4 mt-1" v-if="stationData.data?.du1!==undefined || stationData.data?.removedWagon!==undefined || stationData.data?.addingWagon!==undefined">
      <div class="col-12 flex justify-content-between" v-if="stationData.data?.du1!==undefined">
        <span class="text-lg text-600">Яратилган ду-1 лар сони</span> <span
          class="font-bold text-xl">{{ stationData.data.du1 }}</span>
      </div>
      <div class="col-12 flex justify-content-between" v-if="stationData.data?.removedWagon!==undefined">
        <span class="text-lg text-600 ">Узиб қолинган вагонлар сони</span> <span
          class="font-bold text-xl">{{ stationData.data.removedWagon }}</span>
      </div>
      <div class="col-12 flex justify-content-between" v-if="stationData.data?.addingWagon!==undefined ">
        <span class="text-lg text-600 ">Қўшилган вагонлар сони</span> <span
          class="font-bold text-xl">{{ stationData.data.addingWagon }}</span>
      </div>
    </div>

    <div class="grid bg-green-100 border-1 border-round border-green-300 mt-4 p-1" v-if="stationData.data?.video">
      <span class="p-2 text-lg font-bold text-green-600">Иш жараёнидан видео лавҳа</span>
      <div class="col-12">
        <video autoplay class="w-full" controls height="auto" width="100%">
          <source :src="stationData.data.video" type="video/mp4">
          <source :src="stationData.data.video" type="video/ogg">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </Dialog>
</template>

<style lang="scss" scoped>

</style>
