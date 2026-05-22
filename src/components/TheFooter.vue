<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <p>&copy; {{ currentYear }} Mohamed Gamal. Built with Vue 3 and TypeScript.</p>
      <div class="footer-links">
        <a href="https://github.com/Shifu710" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:25082906@student.unimy.edu.my">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
