<template>
  <section class="page-section">
    <div class="container">
      <SectionHeader
        level="h1"
        eyebrow="Projects"
        title="Frontend projects ready for real case studies"
        description="Replace these polished placeholders with live work as projects are completed. The reusable card structure keeps the page easy to maintain."
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
