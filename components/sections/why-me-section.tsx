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
    <section id="why-me" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
        {dictionary.items.map((item, index) => (
          <Reveal key={item} delay={index * 0.03}>
            <Card className="h-full">
              <CardContent className="p-5">
                <i className="ti ti-circle-check text-[20px] text-muted-foreground" aria-hidden="true" />
                <p className="mt-4 text-[14px] leading-[1.6] text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
