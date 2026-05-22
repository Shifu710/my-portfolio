'use client'

import Link from 'next/link'
import { useState } from 'react'

import { LanguageSwitcher } from '@/components/layout/language-switcher'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import type { Locale } from '@/lib/i18n/config'

type NavDictionary = {
  name: string
  items: readonly (readonly [string, string])[]
  language: string
  menu: string
}

export function Navbar({ locale, dictionary }: { locale: Locale; dictionary: NavDictionary }) {
  const [open, setOpen] = useState(false)

  const links = dictionary.items.map(([label, id]) => (
    <Link
      key={id}
      href={`/${locale}#${id}`}
      className="rounded-[var(--border-radius-md)] px-[10px] py-[6px] text-[14px] leading-[1.5] text-muted-foreground transition hover:bg-muted hover:text-foreground"
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  ))

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <nav className="mx-auto flex min-h-16 max-w-[1100px] items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3 font-medium">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-background-info)] text-[14px] font-medium text-[var(--color-text-info)]">
            MG
          </span>
          <span>{dictionary.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{links}</div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher locale={locale} label={dictionary.language} />
          <ThemeToggle />
        </div>

        <Button
          variant="secondary"
          size="sm"
          className="lg:hidden"
          aria-label={dictionary.menu}
          onClick={() => setOpen((value) => !value)}
        >
          <i className={`ti ${open ? 'ti-x' : 'ti-menu-2'} text-[18px]`} aria-hidden="true" />
        </Button>
      </nav>

      {open ? (
        <div className="border-t bg-background p-4 lg:hidden">
          <div className="grid gap-2">{links}</div>
          <div className="mt-4 flex gap-2">
            <LanguageSwitcher locale={locale} label={dictionary.language} />
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  )
}
