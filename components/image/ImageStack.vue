<template lang="pug">
  .ImageStack 
    slot
</template>

<style lang="scss" scoped>
.ImageStack {
  position: relative;
  :deep(.v-img:first-child) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }
}
</style>
