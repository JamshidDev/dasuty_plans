<template>
  <div class="card-container flex w-full flex-column" :class="active_card? `active_card` : `no-active_card`">
    <div class="card-box flex relative align-items-center mx-auto">
      <!--        <span class="user_badge shadow-1">-->
      <!--          <i class='bx bxs-shield text-yellow-600'></i>-->
      <!--          </span>-->
      <div class="avatar-box bg-dark shadow-5" :class="{active: active_card}">
        <img :src="imgUrl" alt="">
      </div>
      <div class="content-box bg-dark shadow-5" :class="{active: active_card}">
        <h3 class="text-center m-0 text-sm py-1 font-bold bg-dark"
            style="border-bottom:1px solid #27272a;">{{ name }}</h3>
        <h3 class="text-center  m-0 text-sm text-black pt-2 pb-2 font-medium">{{ desc }}</h3>
        <div class="flex bg-dark pt-2 pb-1 align-items-center w-full px-2 column-gap-4"
             style="border-top:1px solid #27272a;"
             :class="{'justify-content-between': list.length >0, 'justify-content-center': list.length === 0}"
        >
          <div v-if="list.length > 0" class="tast-title  pl-2 hover:text-white text-sm cursor-pointer" @click="toggle">

            {{$t('SecondPage.More')}}
          </div>

          <vue-countdown :time="count_time" v-slot="{ days, hours, minutes, seconds }">
            <div class="time-contaner font-bold flex column-gap-2 text-sm">
              <div class="flex flex-column">
                <div class="timer_value">{{ days }}</div>

                <div class="" style="font-size:8px;">{{$t('ThirdPage.day')}}</div>
              </div>
              <div class="flex flex-column timer-text">
                <div class="timer_value">{{ hours }}</div>
                <div class="" style="font-size:8px;">{{$t('ThirdPage.hour')}}</div>
              </div>
              <div class="flex flex-column timer-text">
                <div class="timer_value">{{ minutes }}</div>
                <div class="" style="font-size:8px;">{{$t('ThirdPage.minute')}}</div>
              </div>
              <div class="flex flex-column timer-text">
                <div class="timer_value">{{ seconds }}</div>
                <div class="" style="font-size:8px;">{{$t('ThirdPage.seconds')}}</div>
              </div>
            </div>
          </vue-countdown>

        </div>
      </div>
      <OverlayPanel ref="op" style="background:#1A1A1A; border-radius: 12px">
        <div class="p-3 max-w-20rem">
          <div v-for="(item, idx) in list" :key="idx" class="flex flex-column gap-3">
            <div>
              <h6 class="text-sm text-gray-300 font-medium m-0 mb-1">
                {{ $t('SeventhPage.TaskName') }}
              </h6>
              <p class="m-0 text-sm text-white">{{ $t(item.title) }}</p>
            </div>
            <div>
              <h6 class="text-sm font-medium m-0 mb-1 text-gray-300">
                {{ $t('SeventhPage.Deadline') }}
              </h6>
              <p class="m-0 text-sm text-white">{{ item.deadline }}</p>
            </div>
          </div>
        </div>
      </OverlayPanel>
    </div>
  </div>
</template>
<script setup>
import {defineComponent, onMounted, ref} from "vue";

defineComponent({name: 'DeveloperCard'})
const count_time = ref(0)
const op = ref()

function toggle(event) {
  op.value.toggle(event)
}

const props = defineProps({
  active_card: {
    type: Boolean,
    default: true,
  },
  deadline: {
    type: String,
    default: '2024-3-31',
  },
  name: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  imgUrl: {
    type: String,
    default: ''
  },
  list: {
    type: Array,
    default: []
  }
})

onMounted(() => {
  let current_date = new Date().getTime();
  let finish_date = new Date(props.deadline).getTime();
  count_time.value = finish_date - current_date;
})
</script>


<style scoped lang="scss">
.active_card {
  opacity: 1 !important;
}

.card-task {
  background: #e8e3e3;
  border-radius: 12px;
}

.content-box, .avatar-box {
  box-shadow: 4px 2px 16px 1px rgba(246, 241, 241, 0.1);
}


.no-active_card {
  opacity: 0.5 !important;
}

.timer-text {
  font-size: 14px;
  text-align: center;
  font-weight: 600;
}

.timer_value {
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
    background: rgba(231, 231, 231, 0.9);
    backdrop-filter: blur(12px);
  }

  .avatar-box {
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid rgba(231, 231, 231, 0.9);
    cursor: pointer;
    position: absolute;
    z-index: 2;

    left: -5px;

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
    //border: 1px solid #27272a;
    cursor: pointer;
  }
}

</style>
