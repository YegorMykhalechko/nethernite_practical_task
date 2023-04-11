<script setup lang="ts">
import Spinner from './Spinner.vue'
</script>

<template>
  <div class="spin">
    <div class="ring">
      <Spinner />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spin {
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
}
.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  height: 100%;
}
</style>
