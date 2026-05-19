<template>
  <header class="site-header">
    <nav class="container navbar" aria-label="Main navigation">
      <RouterLink class="brand" to="/" @click="closeMenu">
        <span class="brand-mark">MG</span>
        <span>Mohamed Gamal</span>
      </RouterLink>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>

      <div class="nav-actions" :class="{ 'is-open': isMenuOpen }">
        <RouterLink
          v-for="link in navigationLinks"
          :key="link.to"
          class="nav-link"
          :to="link.to"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>

        <button class="theme-toggle" type="button" @click="themeStore.toggleTheme">
          {{ themeStore.isDark ? 'Light' : 'Dark' }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useThemeStore } from '@/stores/theme'
import { navigationLinks } from '@/utils/navigation'

const isMenuOpen = ref(false)
const themeStore = useThemeStore()

function closeMenu() {
  isMenuOpen.value = false
}
</script>
