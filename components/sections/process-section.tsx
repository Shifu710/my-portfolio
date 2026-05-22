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
    <section id="process" className="mx-auto max-w-[720px] px-6 py-12">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="relative grid gap-5">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--color-border-tertiary)] md:block" />
        {dictionary.steps.map(([title, text], index) => (
          <Reveal key={title} delay={index * 0.05}>
            <div className="relative md:pl-16">
              <span className="absolute left-6 top-6 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-[var(--color-background-info)] text-sm font-medium text-[var(--color-text-info)] md:flex">
                {index + 1}
              </span>
              <Card>
                <CardContent className="p-5">
                  <p className="text-[13px] font-normal leading-[1.5] text-[var(--color-text-info)]">step {index + 1}</p>
                  <h3 className="mt-2 text-[16px] font-medium leading-[1.5]">{title}</h3>
                  <p className="mt-3 leading-[1.7] text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
