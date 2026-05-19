<template>
  <article class="project-card">
    <div
      class="project-image"
      :class="project.imageVariant ? `project-image--${project.imageVariant}` : ''"
    >
      <div v-if="project.imageVariant === 'weather'" class="weather-preview" aria-hidden="true">
        <span class="weather-sun" />
        <span class="weather-cloud weather-cloud--one" />
        <span class="weather-cloud weather-cloud--two" />
      </div>
      <img v-if="project.imageSrc" :src="project.imageSrc" :alt="`${project.title} preview`" />
      <span>{{ project.imageLabel }}</span>
    </div>

    <div class="project-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <div class="tech-list" aria-label="Technologies used">
        <span v-for="technology in project.technologies" :key="technology">{{ technology }}</span>
      </div>

      <div class="project-actions">
        <el-button tag="a" :href="project.liveUrl" target="_blank" rel="noreferrer" type="primary">
          Live Demo
        </el-button>
        <el-button tag="a" :href="project.githubUrl" target="_blank" rel="noreferrer">
          GitHub Repository
        </el-button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '@/types/portfolio'

defineProps<{
  project: Project
}>()
</script>
