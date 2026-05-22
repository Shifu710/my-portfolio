import { Code2, Database, Sparkles, Wrench } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/section-heading'

const icons = [Code2, Database, Sparkles, Wrench]

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
    <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} />
      <div className="grid gap-5 md:grid-cols-2">
        {dictionary.groups.map(([title, skills], index) => {
          const Icon = icons[index]
          return (
            <Reveal key={title} delay={index * 0.06}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-400/15 text-violet-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-white/7 px-3 py-1.5 text-sm text-muted-foreground">
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
