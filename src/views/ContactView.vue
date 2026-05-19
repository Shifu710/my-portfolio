<template>
  <section class="page-section">
    <div class="container">
      <SectionHeader
        level="h1"
        eyebrow="Contact"
        title="Let's connect"
        description="Use the form for a quick message, or update the links below with real profiles when you are ready to publish."
      />

      <div class="contact-grid">
        <div class="contact-panel">
          <a href="mailto:mohamed.gamal@example.com">
            <span>Email</span>
            mohamed.gamal@example.com
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            github.com/mohamed-gamal
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            linkedin.com/in/mohamed-gamal
          </a>
        </div>

        <el-card class="contact-card" shadow="never">
          <el-form :model="form" label-position="top" @submit.prevent="handleSubmit">
            <el-form-item label="Name">
              <el-input v-model="form.name" placeholder="Your name" />
            </el-form-item>

            <el-form-item label="Email">
              <el-input v-model="form.email" placeholder="your.email@example.com" type="email" />
            </el-form-item>

            <el-form-item label="Message">
              <el-input
                v-model="form.message"
                placeholder="Write your message"
                :rows="5"
                type="textarea"
              />
            </el-form-item>

            <el-button native-type="submit" type="primary" size="large">Send Message</el-button>
          </el-form>
        </el-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElNotification } from 'element-plus'

import SectionHeader from '@/components/SectionHeader.vue'
import { usePageMeta } from '@/composables/usePageMeta'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function handleSubmit() {
  ElNotification({
    title: 'Message ready',
    message: 'Thank you. This demo form shows a success notification without a backend.',
    type: 'success',
  })

  form.name = ''
  form.email = ''
  form.message = ''
}

usePageMeta('Contact')
</script>
