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
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="grid gap-3 sm:grid-cols-2">
          {dictionary.points.map((point, index) => (
            <Reveal key={point} delay={index * 0.04}>
              <Card className="h-full">
                <CardContent className="flex gap-3 p-5">
                  <i className="ti ti-sparkles mt-0.5 shrink-0 text-xl text-[var(--accent-purple-text)]" aria-hidden="true" />
                  <p className="text-sm leading-[1.6] text-muted-foreground">{point}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Card className="card-featured h-full">
            <CardContent className="flex h-full flex-col justify-center p-8">
              <i className="ti ti-quote text-3xl text-[var(--accent-teal-text)]" aria-hidden="true" />
              <p className="mt-5 text-2xl font-semibold leading-[1.4]">{dictionary.quote}</p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
