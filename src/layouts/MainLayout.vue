<template>
  <div class="app-shell">
    <TheNavbar />
    <main class="main-content">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheNavbar from '@/components/TheNavbar.vue'
</script>
