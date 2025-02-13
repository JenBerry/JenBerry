<template lang="pug">
  article.mt-8(ref="article")
    v-card(color="surface-variant" theme="light")
      //- template(#append v-if="category")
      //-   v-chip(color="orange" class="mx-4 mt-4" dark) {{category}}
      v-card-text
        div.d-flex.ga-4.mb-6.align-center
          div
            v-img(:src="logo" alt="logo" width="50")
          div
            h4.text-h5 {{title}}
            h5.text-h7.text-orange-accent-1.text-body-1 {{subtitle}}
        div.mb-8.text-body-1.px-4
          slot
        v-row(align="center" justify="center")
          v-col(cols="12" md="9")
            div
              v-img.screenshot-thumbnail.rounded-lg(
                v-if="imageDesktop"
                :src="imageDesktop"
                :alt="`${title} screenshot on desktop`"
                :aspect-ratio="16 / 9"
                :cover="animate"
                :contain="!animate"
                :class="{ '--animate': targetIsVisible && animate }"
              )
              video(
                v-if="videoDesktop"
                :src="videoDesktop"
                :aspect-ratio="16 / 9"
                width="100%"
                autoplay
                loop
                muted
                playsinline
              )
          v-col(cols="7" md="3")
            div
              v-img.screenshot-thumbnail.rounded-lg(
                v-if="imageMobile"
                :width="390"
                :src="imageMobile"
                :alt="`${title} screenshot on mobile`"
                :aspect-ratio="0.46"
                :cover="animate"
                :contain="!animate"
                :class="{ '--animate': targetIsVisible && animate }"
              )
              video(
                v-if="videoMobile"
                :src="videoMobile"
                :aspect-ratio="0.46"
                width="100%"
                autoplay
                loop
                muted
                playsinline
              )
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  imageDesktop?: string;
  imageMobile?: string;
  category: string;
  videoDesktop?: string;
  videoMobile?: string;
  animate?: boolean;
  logo?: string;
}>();
const article = ref(null);
const targetIsVisible = useElementVisibility(article);
</script>
<style lang="scss" scoped>
.screenshot-thumbnail :deep(img) {
  transition: object-position 40s;
  transition-timing-function: linear;
  object-position: left top;
}

@keyframes move {
  0% {
    object-position: left top;
  }
  4% {
    object-position: left top;
  }
  50% {
    object-position: left bottom;
  }
  96% {
    object-position: left top;
  }
  100% {
    object-position: left top;
  }
}

.screenshot-thumbnail.--animate :deep(img) {
  animation: move 60s linear infinite;
}
</style>
