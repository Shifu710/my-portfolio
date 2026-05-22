<template>
  <section class="page-section">
    <div class="container">
      <SectionHeader
        level="h1"
        eyebrow="Contact"
        title="Let's connect"
        description="Reach me by email or review the code behind my portfolio projects on GitHub."
      />

      <div class="contact-grid">
        <div class="contact-panel">
          <a href="mailto:25082906@student.unimy.edu.my">
            <span>Email</span>
            25082906@student.unimy.edu.my
          </a>
          <a href="https://github.com/Shifu710" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            github.com/Shifu710
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
