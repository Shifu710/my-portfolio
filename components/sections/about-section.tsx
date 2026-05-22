import { BrainCircuit, GraduationCap, Languages } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/section-heading'

const icons = [GraduationCap, Languages, BrainCircuit]

export function AboutSection({
  dictionary,
}: {
  dictionary: {
    eyebrow: string
    title: string
    body: readonly string[]
    highlights: readonly (readonly [string, string])[]
  }
}) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Card>
            <CardContent className="space-y-5 p-6 text-lg leading-8 text-muted-foreground">
              {dictionary.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        </Reveal>
        <div className="grid gap-4">
          {dictionary.highlights.map(([title, text], index) => {
            const Icon = icons[index]
            return (
              <Reveal key={title} delay={index * 0.08}>
                <Card>
                  <CardContent className="flex gap-4 p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/15 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
