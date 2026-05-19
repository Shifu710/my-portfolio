<template>
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-copy reveal-up">
        <span class="eyebrow">Frontend Portfolio</span>
        <h1>Hi, I'm Mohamed Gamal</h1>
        <p class="hero-subtitle">Frontend Developer | Vue 3 | TypeScript</p>
        <p class="hero-description">
          I am currently studying Computer Science and building practical frontend projects using
          Vue 3, TypeScript, and modern web technologies.
        </p>

        <div class="hero-actions">
          <el-button type="primary" size="large" @click="router.push('/projects')">
            View Projects
          </el-button>
          <el-button size="large" @click="router.push('/contact')">Contact Me</el-button>
        </div>
      </div>

      <div class="hero-panel reveal-up" aria-label="Developer profile summary">
        <div class="profile-card">
          <div class="profile-avatar">MG</div>
          <h2>Junior Frontend Developer</h2>
          <p>Vue 3, TypeScript, responsive UI, clean architecture, and practical learning.</p>
          <div class="profile-stats">
            <span><strong>13</strong> Skills</span>
            <span><strong>6</strong> Projects</span>
            <span><strong>4</strong> Routes</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionHeader
        eyebrow="Core Skills"
        title="Modern frontend tools for practical products"
        description="A focused stack for building maintainable interfaces with Vue, TypeScript, reusable components, and responsive CSS."
      />
      <div class="skills-grid">
        <SkillCard v-for="skill in featuredSkills" :key="skill.name" :skill="skill" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import SectionHeader from '@/components/SectionHeader.vue'
import SkillCard from '@/components/SkillCard.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { skills } from '@/data/skills'

const router = useRouter()
const featuredSkills = skills.slice(0, 6)

usePageMeta('Home')
</script>
