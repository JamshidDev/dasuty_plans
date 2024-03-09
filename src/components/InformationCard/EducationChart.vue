<template>
  <div :class="color" class="education-card flex flex-column">
    <div class="flex gap-2">
      <div class="flex justify-content-center align-items-center border-round light_bg_color"
           style="width:50px; height: 40px;">
        <span class=" font-bold chart_text_color" style=" font-size: 12px">{{ amount }}</span>
      </div>
      <div class="flex flex-column" style="width: calc(100% - 50px)">
        <div class="flex justify-content-between font-medium mt-1" style="font-size: 12px">
          <span class="text-800 font-medium">{{title}}</span>
          <span class="chart_text_color">{{ percent }}%</span>
        </div>
        <div class="flex">
          <div class="progres w-full border-round overflow-hidden mt-2" style="background: #e9e9e9; height: 6px">
            <div class="min-h-full border-round chart_bg_color" :style="{ width:`${percent}%`}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "EcucationChart",
  props: {
    percent: {
      type: Number,
      default: 67,
    },
    amount: {
      type: Number,
      default: 0,
    },
    color:{
      type: String,
      default: 'blue',
    },
    title:{
      type: String,
      default: 'title here',
    }
  }
}
</script>
<style scoped lang="scss">
.green{
  .chart_bg_color {
    background: #10b981;
  }
  .chart_text_color {
    color: #10b981;
  }
  .light_bg_color {
    background: #f0fbf7;
  }
}




.yellow {
  .chart_bg_color {
    background: #f5b849;
  }
  .chart_text_color {
    color: #f5b849;
  }
  .light_bg_color {
    background: #fefaf2;
  }
}



.blue {
  .chart_bg_color {
    background: #23b7e5;
  }
  .chart_text_color {
    color: #23b7e5;
  }
  .light_bg_color {
    background: #eef9fd;
  }
}



</style>