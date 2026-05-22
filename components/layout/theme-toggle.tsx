'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme !== 'light'

  return (
    <Button
      variant="secondary"
      size="sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      suppressHydrationWarning
    >
      <i
        className={`ti ${isDark ? 'ti-moon' : 'ti-sun'} text-base transition-transform duration-300 ${
          isDark ? 'rotate-180' : 'rotate-0'
        }`}
        aria-hidden="true"
      />
    </Button>
  )
}
