<template>
  <div class="section-header">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <h1 v-if="level === 'h1'">{{ title }}</h1>
    <h2 v-else>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    level?: 'h1' | 'h2'
  }>(),
  {
    level: 'h2',
    eyebrow: '',
    description: '',
  },
)
</script>
