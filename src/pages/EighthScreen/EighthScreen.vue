<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
<<<<<<< HEAD
    <TitleText :title="`ТАҚДИМОТ МУНДАРИЖАСИ`"></TitleText>
=======
    <TitleText :title="`МУНДАРИЖА:`"></TitleText>
>>>>>>> fd1ae7a84e2f381101936870086c68c780a6a976
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
