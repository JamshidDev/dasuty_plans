<script setup></script>

<template>
  <div class='pulse-container flex-grow-1'>
    <div class='pulse'>
      <span style='--i:0;' />
      <span style='--i:2;' />
      <span style='--i:3;' />
      <span style='--i:4;' />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">

.pulse-container {
  z-index: -1;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
}

.pulse {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 15px solid transparent;
  background-color: #fff;

  span {
    z-index: -1;
    position: absolute;
    width: 140%;
    height: 140%;
    background: #0681EA1A;
    border-radius: inherit;
    animation: pulseAnimation 4s ease-out infinite;
    animation-delay: calc(1s * var(--i));
    opacity: 0.6
  }
}


@keyframes pulseAnimation {
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>