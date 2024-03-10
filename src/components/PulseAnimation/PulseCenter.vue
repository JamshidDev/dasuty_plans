<script setup>
defineProps({
  caption: {
    type: String,
    default: undefined
  },
})

</script>

<template>
  <div class='user-round relative'>
    <slot />
    <div v-if='caption' class='caption'>{{caption}}</div>
  </div>
</template>

<style scoped lang="scss">
.user-round {
  background-color: #fff;
  width: 300px;
  height: 300px;
  box-shadow: 0 7.5px 106.6875px 16.875px #0787F34D;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .caption {
    border: 2px solid #0787F34D;
    line-height: 20px;
    font-size: 17px;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 12px;
    margin-top: -10px;
  }
}
</style>