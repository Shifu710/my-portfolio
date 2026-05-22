'use client'

import { Menu, X } from 'lucide-react'
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
      className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  ))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400 text-sm font-black text-slate-950 shadow-glow">
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
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-background/95 p-4 backdrop-blur-xl lg:hidden">
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
