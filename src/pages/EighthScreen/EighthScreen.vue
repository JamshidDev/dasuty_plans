<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <TitleText :title="`2025 ЙИЛГАЧА РЕЖАДАГИ ЛОЙИҲАЛАР`"></TitleText>
    <MultitpleTitle></MultitpleTitle>
  </div>

</template>
<script>
import TitleText from "@/components/TitleText/TitleText.vue";

import MultitpleTitle from "@/components/MultipleTitle/MultitpleTitle.vue";


export default {
  components: {
    MultitpleTitle,
    TitleText,

  },

  data() {
    return {}
  }
}
</script>
