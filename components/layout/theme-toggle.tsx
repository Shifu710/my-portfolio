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
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <i className="ti ti-sun text-base transition-transform duration-300 dark:hidden" aria-hidden="true" />
        <i className="ti ti-moon hidden text-base transition-transform duration-300 dark:inline" aria-hidden="true" />
      </span>
    </Button>
  )
}
