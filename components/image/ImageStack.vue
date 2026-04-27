<template lang="pug">
  .ImageStack(:style="{ width, height }")
    slot
</template>

<script setup lang="ts">
const props = defineProps<{
  width: string;
  height: string;
}>();
</script>

<style lang="scss" scoped>
.ImageStack {
  position: relative;
  :deep(.v-img) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  :deep(.v-img:first-child) {
    z-index: 3;
  }
}
</style>
