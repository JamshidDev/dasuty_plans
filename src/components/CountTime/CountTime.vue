<template>
  <div class="absolute w-full flex justify-content-center bottom-0 left-0 p-4 cursor-pointer">
    <vue-countdown :time="count_time" v-slot="{ days, hours, minutes, seconds }">
      <div class="flex gap-2">

        <div class="flex flex-column">
          <div class="button_content font-bold shadow-2">
            {{ days }}
          </div>
          <div class="content-value text-center font-bold  mt-2 text-sm">

            {{ $t('ThirdPage.day') }}
          </div>
        </div>

        <div class="flex flex-column">
          <div class="button_content  font-bold shadow-2">
            {{ hours }}
          </div>
          <div class="content-value text-center font-bold  mt-2 text-sm">

            {{ $t('ThirdPage.hour') }}
          </div>
        </div>


        <div class="flex flex-column">
          <div class="button_content  font-bold shadow-2">
            {{ minutes }}
          </div>
          <div class="content-value text-center font-bold  mt-2 text-sm">
            {{ $t('ThirdPage.minute') }}
          </div>
        </div>

        <div class="flex flex-column">
          <div class="button_content font-bold shadow-2">
            {{ seconds }}
          </div>
          <div class="content-value text-center font-bold  mt-2 text-sm">
            {{ $t('ThirdPage.seconds') }}
          </div>
        </div>


      </div>
    </vue-countdown>

  </div>

</template>

<script>
export default {
  data(){
    return{
      count_time:0,

    }
  },
  mounted() {
    let current_date = new Date().getTime();
    let finish_date =new Date("2025-08-31").getTime();
    this.count_time = finish_date -current_date;
  }
}
</script>
<style scoped lang="scss">
.button_content {
  background: rgba(13, 32, 122, 0.69);
  background-filter: blur(12px);
  border: 1px solid #27272a;
  padding: 10px 20px;
  border-radius: 8px;
  font-size:24px;
  min-width:80px;
  text-align:center;
}
</style>
