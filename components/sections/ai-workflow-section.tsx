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
    <section className="mx-auto max-w-[1100px] px-6 py-12">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-3 sm:grid-cols-2">
          {dictionary.points.map((point, index) => (
            <Reveal key={point} delay={index * 0.04}>
              <Card className="h-full">
                <CardContent className="flex gap-3 p-5">
                  <i className="ti ti-sparkles mt-0.5 shrink-0 text-xl text-[var(--ramp-purple-text)]" aria-hidden="true" />
                  <p className="text-sm leading-[1.6] text-muted-foreground">{point}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Card className="card-featured h-full">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <i className="ti ti-quote text-2xl text-[var(--color-text-info)]" aria-hidden="true" />
              <p className="mt-4 font-serif text-[18px] font-normal leading-[1.5]">{dictionary.quote}</p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
