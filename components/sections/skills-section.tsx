import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/section-heading'

const icons = ['ti-code', 'ti-database', 'ti-sparkles', 'ti-tools']
const tagClasses = ['tag-purple', 'tag-teal', 'tag-blue', 'tag-coral', 'tag-green', 'tag-amber']

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
    <section id="skills" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-4 md:grid-cols-2">
        {dictionary.groups.map(([title, skills], index) => {
          const icon = icons[index]
          return (
            <Reveal key={title} delay={index * 0.06}>
              <Card className="h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-background-secondary)] text-muted-foreground">
                      <i className={`ti ${icon} text-[20px]`} aria-hidden="true" />
                    </span>
                    <h3 className="text-[16px] font-medium leading-[1.5]">{title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-[6px]">
                    {skills.map((skill, skillIndex) => (
                      <span key={skill} className={`tag ${tagClasses[skillIndex % tagClasses.length]}`}>
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
