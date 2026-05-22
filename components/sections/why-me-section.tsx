import { CheckCircle2 } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/sections/section-heading'
import { Card, CardContent } from '@/components/ui/card'

export function WhyMeSection({
  dictionary,
}: {
  dictionary: {
    eyebrow: string
    title: string
    items: readonly string[]
  }
}) {
  return (
    <section id="why-me" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dictionary.items.map((item, index) => (
          <Reveal key={item} delay={index * 0.03}>
            <Card className="h-full">
              <CardContent className="p-5">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
