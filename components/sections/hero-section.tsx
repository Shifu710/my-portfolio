import Link from 'next/link'

import { Reveal } from '@/components/motion/reveal'
import { TypewriterText } from '@/components/motion/typewriter-text'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Locale } from '@/lib/i18n/config'

export function HeroSection({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: {
    badgeOne: string
    badgeTwo: string
    headline: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    availability: readonly (readonly [string, string])[]
    scroll: string
  }
}) {
  const typewriterWords =
    locale === 'zh'
      ? ['全栈开发者', 'React 开发者', 'AI 产品构建者', '问题解决者']
      : ['full-stack developer', 'React specialist', 'AI product builder', 'problem solver']

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Reveal>
          <div className="flex flex-wrap gap-2">
          <Badge status="In Progress">
            <i className="ti ti-star mr-1.5 text-[14px]" aria-hidden="true" />
            {dictionary.badgeOne}
          </Badge>
          <Badge>{dictionary.badgeTwo}</Badge>
        </div>
        <p className="mt-8 text-sm font-medium text-muted-foreground">
          Mohamed Gamal / <TypewriterText words={typewriterWords} />
        </p>
        <h1 className="mt-5 max-w-[900px] text-balance text-4xl font-bold leading-[1.1] tracking-[-0.025em] sm:text-6xl">
          {dictionary.headline}
        </h1>
        <p className="mt-6 max-w-[760px] text-lg leading-[1.6] text-muted-foreground">
          {dictionary.subtitle}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={`/${locale}#projects`}>
              {dictionary.primaryCta}
              <i className="ti ti-arrow-right text-[16px]" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={`/${locale}#contact`}>{dictionary.secondaryCta}</Link>
          </Button>
        </div>
        <Link
          href={`/${locale}#about`}
          className="mt-10 inline-flex items-center gap-2 rounded-full px-0 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <i className="ti ti-arrow-down bounce-soft text-base" aria-hidden="true" />
          {dictionary.scroll}
        </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <Card className="h-fit">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">availability</p>
                <h2 className="mt-1 text-xl font-semibold">developer profile</h2>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-teal-bg)] text-[var(--accent-teal-text)]">
                <i className="ti ti-map-pin text-[20px]" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              {dictionary.availability.map(([label, value]) => (
                <div key={label} className="card-metric flex items-center justify-between px-4 py-3">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border bg-muted p-4">
              <p className="text-sm leading-[1.6] text-muted-foreground">
                React / Next.js developer focused on practical business apps, bilingual communication, and AI-assisted delivery.
              </p>
            </div>
          </CardContent>
        </Card>
        </Reveal>
      </div>
    </section>
  )
}
