import Link from 'next/link'

import { Reveal } from '@/components/motion/reveal'
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
  return (
    <section id="home" className="mx-auto grid w-full max-w-[1100px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <Reveal>
        <div className="flex flex-wrap gap-2">
          <Badge status="In Progress">
            <i className="ti ti-star mr-1.5 text-[14px]" aria-hidden="true" />
            {dictionary.badgeOne}
          </Badge>
          <Badge>{dictionary.badgeTwo}</Badge>
        </div>
        <h1 className="mt-6 max-w-[720px] text-balance text-[22px] font-medium leading-[1.3]">
          {dictionary.headline}
        </h1>
        <p className="mt-4 max-w-[720px] text-[16px] leading-[1.7] text-muted-foreground">
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
          className="mt-8 inline-flex items-center gap-2 rounded-[var(--border-radius-md)] px-0 text-[14px] leading-[1.5] text-muted-foreground transition hover:text-foreground"
        >
          <i className="ti ti-arrow-down text-[16px]" aria-hidden="true" />
          {dictionary.scroll}
        </Link>
      </Reveal>

      <Reveal delay={0.15}>
        <Card className="h-fit">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] leading-[1.5] text-muted-foreground">availability</p>
                <h2 className="mt-1 text-[18px] font-medium leading-[1.4]">developer profile</h2>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-background-info)] text-[var(--color-text-info)]">
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
            <div className="mt-5 rounded-[var(--border-radius-lg)] border bg-[var(--color-background-secondary)] p-4">
              <p className="text-[14px] leading-[1.6] text-muted-foreground">
                React / Next.js developer focused on practical business apps, bilingual communication, and AI-assisted delivery.
              </p>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  )
}
