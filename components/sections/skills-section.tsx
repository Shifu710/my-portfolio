import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/section-heading'

const icons = ['ti-code', 'ti-database', 'ti-sparkles', 'ti-tools']
const groupTagClasses = ['tag-blue', 'tag-green', 'tag-teal', 'tag-purple']

export function SkillsSection({
  dictionary,
}: {
  dictionary: {
    eyebrow: string
    title: string
    groups: readonly (readonly [string, readonly string[]])[]
  }
}) {
  return (
    <section id="skills" className="mx-auto max-w-[1100px] px-6 py-12">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-5 md:grid-cols-2">
        {dictionary.groups.map(([title, skills], index) => {
          const icon = icons[index]
          return (
            <Reveal key={title} delay={index * 0.06}>
              <Card className="h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ramp-purple-bg)] text-[var(--ramp-purple-text)]">
                      <i className={`ti ${icon} text-[20px]`} aria-hidden="true" />
                    </span>
                    <h3 className="text-[16px] font-medium leading-[1.5]">{title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className={`tag ${groupTagClasses[index % groupTagClasses.length]}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
