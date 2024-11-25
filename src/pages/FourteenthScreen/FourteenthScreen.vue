<script lang="ts" setup>
import TitleText from "@/components/TitleText/TitleText.vue";
import {VideoPlayer} from '@videojs-player/vue'
import VueEasyLightbox from "vue-easy-lightbox";
import {computed, ref} from "vue";

const gallery = [
  {
    index: 0,
    src: 'https://api-exodim.railway.uz/storage/videos/2.mp4',
    type: 'video'
  },
  {
    index: 1,
    src: 'https://api-exodim.railway.uz/storage/videos/eds.mp4',
    type: 'video'
  },
  {
    index: 2,
    src: 'https://api-exodim.railway.uz/storage/videos/itcenter.mp4',
    type: 'video'
  },
  {
    index: 0,
    src: '/gallery/photo_2024-11-25_16-12-20.jpg',
    type: 'image'
  },
  {
    index: 1,
    src: '/gallery/photo_2024-11-25_16-12-21.jpg',
    type: 'image'
  },
  {
    index: 2,
    src: '/gallery/photo_2024-11-25_16-12-22.jpg',
    type: 'image'
  },
  {
    index: 3,
    src: '/gallery/photo_2024-11-25_16-12-23.jpg',
    type: 'image'
  },
  {
    index: 4,
    src: '/gallery/photo_2024-11-25_16-12-24.jpg',
    type: 'image'
  },
  {
    index: 5,
    src: '/gallery/photo_2024-11-25_16-12-24 (2).jpg',
    type: 'image'
  },
  {
    index: 6,
    src: '/gallery/photo_2024-11-25_16-12-25.jpg',
    type: 'image'
  }
]

const indexRef = ref(0)
const visibleRef = ref(false)

const showImg = (index: number) => {
  indexRef.value = index
  visibleRef.value = true
}

const onHide = () => (visibleRef.value = false)

const images = computed(() => gallery.filter(i => i.type === 'image').map(i => ({
  src: i.src,
  title: i.src,
})) || [])
</script>

<template>
  <VueEasyLightbox
      :imgs="images"
      :index="indexRef"
      :visible="visibleRef"
      @hide="onHide"
  />


  <div
      class="w-full overflow-y-auto min-h-full relative flex flex-column justify-content-center align-items-center mt-0">
    <TitleText :title="$t('firstPage.ThirdContent')"/>

    <div class='wrapper'>

      <div v-for="(item, idx) in gallery" :key="idx" class="item">
        <VideoPlayer
            v-if="item.type === 'video'"
            :loop="true"
            :src="item.src"
            class="video"
            controls
        />

        <img v-else :alt="item.src" :src="item.src" class="image" @click="showImg(item.index)">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 110px;
  margin-bottom: 20px;
  align-items: stretch;
}

.item {
  aspect-ratio: 16 / 9;
  box-sizing: border-box;
}

.video {
  width: 100%;
  height: 100%;
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
