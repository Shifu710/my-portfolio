<template>
  <section class="page-section">
    <div class="container">
      <SectionHeader
        level="h1"
        eyebrow="Projects"
        title="Frontend projects with working product flows"
        description="A focused set of Vue and TypeScript projects that demonstrate API integration, state management, responsive layouts, and practical UI architecture."
      />

      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { projects } from '@/data/projects'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('Projects')
</script>
