<template lang="pug">
  section.mt-16
    h3.text-h4.mb-8.pt-4.text-center.text-md-left Projects
    div.d-flex.ga-4.flex-column.flex-md-row.align-md-center.d-print-none
      span Filter By:
      div
        v-btn(variant="tonal" @click="category == 'Coding' ? setCategory('') : setCategory('Coding')" :active="category == 'Coding'" active-color='orange' block) Coding Projects
      div
        v-btn(variant="tonal" @click="category == 'Web Builder' ? setCategory('') : setCategory('Web Builder')" :active="category == 'Web Builder'" active-color="orange" block) Web Builder Projects
      div
        v-btn(variant="tonal" @click="setCategory('')" :active="category == ''" active-color="orange" block) Show All
    
    ProjectCard(
      v-for="project in filteredProjects"
      :key="project.id"
      v-bind="project"
    )
</template>

<script lang="ts" setup>
import { projects } from "./projects.data";

const route = useRoute();
const router = useRouter();

const category = ref<"" | "Coding" | "Web Builder">("");
const setCategory = (cat: "" | "Coding" | "Web Builder") => {
  if (["Coding", "Web Builder", ""].includes(cat)) {
    category.value = cat;
    router.push({ query: { cat: cat } });
  }
};

const filteredProjects = computed(() =>
  projects.filter(
    (p) => category.value === "" || p.category.includes(category.value),
  ),
);

onMounted(() => {
  const categoryQ = ["Coding", "Web Builder"].includes(
    route.query.cat as string,
  )
    ? (route.query.cat as "Coding" | "Web Builder")
    : "";
  setCategory(categoryQ);
});
</script>

<style lang="scss"></style>
