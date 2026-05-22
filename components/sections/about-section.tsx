import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/section-heading'

const icons = ['ti-school', 'ti-language', 'ti-brain']

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
    <section id="about" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Reveal>
          <Card>
            <CardContent className="space-y-4 p-5 text-[16px] leading-[1.7] text-muted-foreground">
              {dictionary.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        </Reveal>
        <div className="grid gap-4">
          {dictionary.highlights.map(([title, text], index) => {
            const icon = icons[index]
            return (
              <Reveal key={title} delay={index * 0.08}>
                <Card>
                  <CardContent className="flex gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-background-info)] text-[var(--color-text-info)]">
                      <i className={`ti ${icon} text-[20px]`} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-medium leading-[1.5]">{title}</h3>
                      <p className="mt-2 text-[14px] leading-[1.6] text-muted-foreground">{text}</p>
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
