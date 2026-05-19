<template>
  <el-card class="skill-card" shadow="hover">
    <div class="skill-icon" aria-hidden="true">{{ skill.icon }}</div>
    <h3>{{ skill.name }}</h3>
    <p>{{ skill.description }}</p>
  </el-card>
</template>

<script setup lang="ts">
import type { Skill } from '@/types/portfolio'

defineProps<{
  skill: Skill
}>()
</script>
