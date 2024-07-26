

<template>

  <router-view v-slot="{ Component }">
    <transition name="slide-right" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>


<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.cookie = 'locale=uz;path=/';
});
</script>
