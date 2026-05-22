import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/sections/section-heading'
import { Card, CardContent } from '@/components/ui/card'

export function ProcessSection({
  dictionary,
}: {
  dictionary: {
    eyebrow: string
    title: string
    steps: readonly (readonly [string, string])[]
  }
}) {
  return (
    <section id="process" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="relative grid gap-5">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent md:block" />
        {dictionary.steps.map(([title, text], index) => (
          <Reveal key={title} delay={index * 0.05}>
            <div className="relative md:pl-16">
              <span className="absolute left-3 top-5 hidden h-6 w-6 -translate-x-1/2 rounded-full border border-cyan-200 bg-background shadow-glow md:block" />
              <Card>
                <CardContent className="p-5">
                  <p className="text-sm font-semibold text-cyan-300">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
