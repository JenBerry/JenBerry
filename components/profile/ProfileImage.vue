<template lang="pug">
div.profile-image
  img.radial-background(src="/img/portfolio_radial_bg.svg")
  svg.radial-background.--filter(viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg")
    defs
      mask#spiral-mask
        rect(width="1200" height="1200" fill="black")
        g(ref="spiralGroup")
          path(:d="spiralPath" fill="none" stroke="white" stroke-width="25" stroke-linecap="round")
    image(href="/img/portfolio_radial_bg.svg" width="1200" height="1200" mask="url(#spiral-mask)")
    image(href="/img/portfolio_radial_bg.svg" width="1200" height="1200" mask="url(#spiral-mask)" transform="rotate(-1 600 600)")
  v-img.rounded-circle.mx-auto.profile-image-img(v-if="hdr" src="/img/JJMB_kalisti_sm-hdr.avif" alt="Jennifer Berry" aspect-ratio="1" cover width="300")
  v-img.rounded-circle.mx-auto.profile-image-img(v-else src="/img/JJMB_kalisti_sm.jpg" alt="Jennifer Berry" aspect-ratio="1" cover width="300")
</template>

<script setup lang="ts">
const props = defineProps<{
  wrapper: HTMLElement | null;
}>();

const gsap = useGSAP();
let ctx: gsap.Context | null = null;

const spiralGroup = ref<SVGGElement | null>(null);

function generateSpiralPath(): string {
  const cx = 600,
    cy = 600;
  const rMin = 5,
    rMax = 625;
  const turns = 4;
  const stepsPerTurn = 72; // 5° per step → smooth curve
  const totalSteps = turns * stepsPerTurn;

  const points: string[] = [];
  for (let i = 0; i <= totalSteps; i++) {
    const theta = (i / stepsPerTurn) * 2 * Math.PI;
    const r = rMin + (rMax - rMin) * (i / totalSteps);
    const x = (cx + r * Math.cos(theta)).toFixed(2);
    const y = (cy + r * Math.sin(theta)).toFixed(2);
    points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
  }
  return points.join(" ");
}

const spiralPath = generateSpiralPath();

const hdr = ref(false);
let hdrQuery: MediaQueryList;

const handleHdrChange = (e: MediaQueryListEvent) => {
  hdr.value = e.matches;
};

const setUpAnimation = (spiralGroup: SVGGElement, wrapper: HTMLElement) => {
  if (ctx) {
    ctx.revert();
  }
  ctx = gsap.context(() => {
    const introRotation = -150;
    gsap.to(spiralGroup, {
      rotation: introRotation,
      svgOrigin: "600 600",
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(spiralGroup, {
          rotation: introRotation - 500,
          svgOrigin: "600 600",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      },
    });
  });
};

watch(
  [() => props.wrapper, spiralGroup],
  ([newWrapper, newSpiralGroup]) => {
    if (newSpiralGroup && newWrapper) {
      setUpAnimation(newSpiralGroup, newWrapper);
    }
  },
  { immediate: true },
);

onMounted(() => {
  hdrQuery = window.matchMedia("(dynamic-range: high)");
  hdr.value = hdrQuery.matches;
  hdrQuery.addEventListener("change", handleHdrChange);
});

onBeforeUnmount(() => {
  if (hdrQuery) {
    hdrQuery.removeEventListener("change", handleHdrChange);
  }
  if (ctx) {
    ctx.revert();
  }
});
</script>

<style lang="scss" scoped>
.profile-image {
  position: relative;
  .radial-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1200px;
    height: 1200px;
    max-width: none;
    max-height: none;
    z-index: 0;
    opacity: 0.7;
    &.--filter {
      filter: brightness(1.5);
      z-index: 1;
    }
  }
  .profile-image-img {
    z-index: 2;
  }
}
</style>
