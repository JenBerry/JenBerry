<template lang="pug">
  section.mt-16
    h3.text-h4.mb-8.pt-4.text-center.text-md-left Projects
    
    ProjectCard(
      v-for="project in projects"
      :key="project.id"
      v-bind="project"
    )
</template>

<script lang="ts" setup>
import { projects } from "./projects.data";
</script>

<style lang="scss"></style>
