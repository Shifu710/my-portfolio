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
    <section id="process" className="mx-auto max-w-[720px] px-4 py-12 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="relative grid gap-5">
        <div className="absolute left-0 top-0 hidden h-full border-l md:block" />
        {dictionary.steps.map(([title, text], index) => (
          <Reveal key={title} delay={index * 0.05}>
            <div className="relative md:pl-8">
              <Card>
                <CardContent className="p-5">
                  <p className="text-[13px] font-normal leading-[1.5] text-muted-foreground">step {index + 1}</p>
                  <h3 className="mt-2 text-[16px] font-medium leading-[1.5]">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
