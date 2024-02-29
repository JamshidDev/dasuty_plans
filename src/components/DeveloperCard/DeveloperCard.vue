
<template>
  <div class="card-container flex w-full flex-column" :class="active_card? `active_card` : `no-active_card`">
    <div class="card-box flex relative align-items-center shadow-1 mx-auto ">
      <!--        <span class="user_badge shadow-1">-->
      <!--          <i class='bx bxs-shield text-yellow-600'></i>-->
      <!--          </span>-->
      <div class="avatar-box bg-dark">
        <img src="https://api-exodim.railway.uz/storage/cadry-photos/1073c2a9aa5062b1e97ae88a5f5085e4.jpg" alt="">

      </div>
      <div class="content-box bg-dark shadow-6">
        <h3 class="text-center m-0 text-sm text-white py-1 font-normal bg-dark"
            style="border-bottom:1px solid #27272a;">Jamshid Raximov</h3>
        <h3 class="text-center m-0 text-sm text-black pt-2 pb-2 font-medium" style="color:#878787">Frontend developer</h3>
        <div class="flex justify-content-between bg-dark pt-2 pb-1 align-items-center w-full px-2 column-gap-4"
             style="border-top:1px solid #27272a;">
          <div class="tast-title text-sm " style="color:#878787;">
            Batafsil
          </div>

            <vue-countdown :time="count_time" v-slot="{ days, hours, minutes, seconds }">
              <div class="time-contaner flex column-gap-2 text-sm" style="color:#878787;">
                <div class="flex flex-column timer-text">
                  <div class="timer_value">{{days}}</div>
                  <div style="font-size:8px;">KUN</div>
                </div>
                <div class="flex flex-column timer-text">
                  <div class="timer_value">{{hours}}</div>
                  <div style="font-size:8px;">SOAT</div>
                </div>
                <div class="flex flex-column timer-text">
                  <div class="timer_value">{{minutes}}</div>
                  <div style="font-size:8px;">MINUT</div>
                </div>
                <div class="flex flex-column timer-text">
                  <div class="timer_value">{{seconds}}</div>
                  <div style="font-size:8px;">SEKUND</div>
                </div>
              </div>
            </vue-countdown>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeveloperCard",
  props: {
    active_card: {
      type: Boolean,
      default: true,
    },
    deadline:{
      type: String,
      default: '2024-3-31',
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      count_time:0,
    }
  },
  mounted() {
    let current_date = new Date().getTime();
    let finish_date =new Date(this.deadline).getTime();
    this.count_time = finish_date - current_date;
  }

}

</script>





<style scoped lang="scss">
.active_card {
  opacity: 1 !important;
}

.no-active_card {
  opacity: 0.1 !important;
}

.timer-text {
  font-size: 14px;
  text-align: center;
  font-weight: 600;
}
.timer_value{
  color: #148ad7;
}


.card-box {
  .user_badge {
    position: absolute;
    bottom: -15px;
    left: 17px;
    z-index: 3;
    border-radius: 6px;
    padding: 4px;
  }

  .bg-dark {
    background: #0000004d;
    backdrop-filter: blur(12px);
  }


  .avatar-box {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid #2f2f31;
    cursor: pointer;
    position: absolute;
    z-index: 2;

    left: 0px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .content-box {
    width: 300px;
    height: 100px;
    margin-left: 50px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    //background: #0000004d;
    //background-filter:blur(12px);
    border: 1px solid #27272a;
    cursor:pointer;
  }
}
</style>