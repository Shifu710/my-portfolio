import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

type ThemeMode = 'dark' | 'light'

const storageKey = 'portfolio-theme'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>((localStorage.getItem(storageKey) as ThemeMode) || 'dark')

  const isDark = computed(() => mode.value === 'dark')

  function applyTheme() {
    document.documentElement.dataset.theme = mode.value
    localStorage.setItem(storageKey, mode.value)
  }

  function toggleTheme() {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
    applyTheme()
  }

  applyTheme()

  return {
    mode,
    isDark,
    toggleTheme,
  }
})
