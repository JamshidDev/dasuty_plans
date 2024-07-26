<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
<<<<<<< HEAD
    <TitleText :title="`ТАҚДИМОТ МУНДАРИЖАСИ`"></TitleText>
=======
    <TitleText :title="$t('firstPage.MainContents')"></TitleText>
>>>>>>> e41e9a9 (Completed localization part)
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
