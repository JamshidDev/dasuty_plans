<template>
  <div class="w-full min-h-full relative flex justify-content-center align-items-center">
    <TitleText :title="`2025 ЙИЛГАЧА РЕЖАДАГИ ЛОЙИҲАЛАР`"></TitleText>
    <MultitpleTitle></MultitpleTitle>
    <ActionView></ActionView>
    <CountTime></CountTime>
  </div>

</template>
<script>
import ChartText from "../../components/ChartText/ChartText.vue";
import PlansView from "../../components/PlansView.vue";
import TitleText from "@/components/TitleText/TitleText.vue";
import ActionView from "@/components/ActionView.vue";
import MultitpleTitle from "@/components/MultipleTitle/MultitpleTitle.vue";
import CountTime from "@/components/CountTime/CountTime.vue";

export default {
  components: {
    CountTime,
    MultitpleTitle,
    PlansView,
    ChartText,
    TitleText,
    ActionView,
  },

  data() {
    return {}
  }
}
</script>
