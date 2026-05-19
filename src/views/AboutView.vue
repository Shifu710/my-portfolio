<template>
  <section class="page-section">
    <div class="container">
      <SectionHeader
        level="h1"
        eyebrow="About"
        title="A practical path into frontend development"
        description="My background blends customer support experience, Computer Science studies in Malaysia, and a growing focus on frontend engineering and cybersecurity fundamentals."
      />

      <div class="about-grid">
        <div class="about-copy">
          <p>
            I started in customer support, where I learned how to listen carefully, solve real user
            problems, and communicate clearly. That experience now helps me build interfaces with
            empathy and attention to detail.
          </p>
          <p>
            I am studying Computer Science in Malaysia and using every project to improve my Vue 3,
            TypeScript, CSS, and architecture skills. I am also interested in cybersecurity because
            secure thinking makes frontend applications stronger and more reliable.
          </p>
        </div>

        <div class="timeline-grid">
          <TimelineCard v-for="item in timeline" :key="item.title" :item="item" />
        </div>
      </div>
    </div>
  </section>

  <section class="section soft-section">
    <div class="container">
      <SectionHeader
        eyebrow="Skills"
        title="Technologies I am building with"
        description="These cards are easy to update as my experience grows and real-world projects become part of the portfolio."
      />

      <div class="skills-grid">
        <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import SkillCard from '@/components/SkillCard.vue'
import TimelineCard from '@/components/TimelineCard.vue'
import { skills } from '@/data/skills'
import { timeline } from '@/data/timeline'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('About')
</script>
