<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <p>© {{ currentYear }} Mohamed Gamal. Built with Vue 3 and TypeScript.</p>
      <div class="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:mohamed.gamal@example.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
