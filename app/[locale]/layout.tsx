import { notFound } from 'next/navigation'

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale as Locale)

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar locale={locale as Locale} dictionary={dictionary.nav} />
      {children}
      <Footer locale={locale as Locale} dictionary={dictionary.footer} />
    </div>
  )
}
