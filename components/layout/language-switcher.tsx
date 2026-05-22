'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { getOppositeLocale, type Locale } from '@/lib/i18n/config'

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()
  const nextLocale = getOppositeLocale(locale)
  const nextPath = pathname.replace(`/${locale}`, `/${nextLocale}`)

  return (
    <Button asChild variant="secondary" size="sm">
      <Link href={nextPath}>{label}</Link>
    </Button>
  )
}
