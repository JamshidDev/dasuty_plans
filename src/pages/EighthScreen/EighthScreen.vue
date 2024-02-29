<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <TitleText :title="`2023 йилда амалга оширилган ислохотлар`"></TitleText>
    <PlanPresentation></PlanPresentation>
  </div>
</template>
<script>

import TitleText from "@/components/TitleText/TitleText.vue";
import PlanPresentation from "@/components/MultipleTitle/PlanPresentation.vue";


export default {
  components: {
    TitleText,
    PlanPresentation
  },

  data() {
    return {}
  }
}
</script>
