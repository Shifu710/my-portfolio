import { Bot, Quote } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/sections/section-heading'
import { Card, CardContent } from '@/components/ui/card'

export function AiWorkflowSection({
  dictionary,
}: {
  dictionary: {
    eyebrow: string
    title: string
    points: readonly string[]
    quote: string
  }
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {dictionary.points.map((point, index) => (
            <Reveal key={point} delay={index * 0.04}>
              <Card className="h-full">
                <CardContent className="flex gap-3 p-5">
                  <Bot className="mt-0.5 h-5 w-5 shrink-0 text-violet-200" />
                  <p className="text-sm leading-6 text-muted-foreground">{point}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Card className="h-full">
            <CardContent className="flex h-full flex-col justify-center p-8">
              <Quote className="h-8 w-8 text-cyan-300" />
              <p className="mt-5 text-2xl font-semibold leading-9">{dictionary.quote}</p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
