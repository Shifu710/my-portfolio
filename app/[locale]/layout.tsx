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
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern bg-[size:72px_72px] opacity-40" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <Navbar locale={locale as Locale} dictionary={dictionary.nav} />
      {children}
      <Footer locale={locale as Locale} dictionary={dictionary.footer} />
    </div>
  )
}
