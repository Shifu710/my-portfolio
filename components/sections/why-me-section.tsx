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
    <section id="why-me" className="mx-auto max-w-[1100px] px-6 py-12">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
        {dictionary.items.map((item, index) => (
          <Reveal key={item} delay={index * 0.03}>
            <Card className="h-full">
              <CardContent className="p-5">
                <i className="ti ti-circle-check text-xl text-[var(--color-text-info)]" aria-hidden="true" />
                <p className="mt-3 leading-[1.7] text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
