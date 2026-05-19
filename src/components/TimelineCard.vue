<template>
  <article class="timeline-card">
    <span>{{ item.year }}</span>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </article>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@/types/portfolio'

defineProps<{
  item: TimelineItem
}>()
</script>
