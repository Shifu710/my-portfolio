import { ArrowDown, ArrowRight, MapPin, Sparkles } from 'lucide-react'
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
    <section id="home" className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
      <div className="absolute left-12 top-32 h-24 w-24 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-24 right-10 h-32 w-32 rounded-full bg-violet-400/20 blur-3xl" />

      <Reveal>
        <div className="flex flex-wrap gap-3">
          <Badge>
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            {dictionary.badgeOne}
          </Badge>
          <Badge>{dictionary.badgeTwo}</Badge>
        </div>
        <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
            {dictionary.headline}
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
          {dictionary.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={`/${locale}#projects`}>
              {dictionary.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={`/${locale}#contact`}>{dictionary.secondaryCta}</Link>
          </Button>
        </div>
        <Link
          href={`/${locale}#about`}
          className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          {dictionary.scroll}
        </Link>
      </Reveal>

      <Reveal delay={0.15}>
        <Card className="relative mt-12 overflow-hidden p-2 lg:mt-0">
          <CardContent className="rounded-[1.35rem] border border-white/10 bg-slate-950/50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <h2 className="mt-1 text-2xl font-semibold">Developer Profile</h2>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                <MapPin className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-6 grid gap-3">
              {dictionary.availability.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-400/20 p-4">
              <p className="text-sm leading-6 text-cyan-50/90">
                React / Next.js developer focused on practical business apps, bilingual communication, and AI-assisted delivery.
              </p>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  )
}
