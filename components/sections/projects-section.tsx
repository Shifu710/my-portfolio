import { ProjectCard } from '@/components/cards/project-card'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/sections/section-heading'
import { getProjects } from '@/lib/data/projects'
import type { Locale } from '@/lib/i18n/config'

export function ProjectsSection({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: {
    eyebrow: string
    title: string
    description: string
    businessValue: string
    keyFeatures: string
    liveDemo: string
    github: string
    gitee: string
    caseStudy: string
    comingSoon: string
  }
}) {
  const projects = getProjects(locale)

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading
        eyebrow={dictionary.eyebrow}
        title={dictionary.title}
        description={dictionary.description}
      />
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={Math.min(index * 0.04, 0.18)}>
            <ProjectCard project={project} locale={locale} dictionary={dictionary} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
