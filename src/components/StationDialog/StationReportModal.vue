<script setup>
  import {ref} from "vue";

  const visible = ref(false)

  const openReport = (stationId)=>{
    console.log(stationId)
    visible.value = true
  }

  defineExpose({
    openReport
  })
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Оқ кўприк стансияси" :style="{ width: '90%' }">
    <div class="grid">
      <h3>Station Report</h3>
    </div>
  </Dialog>
</template>

<style scoped lang="scss">

</style>