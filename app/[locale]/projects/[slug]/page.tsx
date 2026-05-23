import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ProjectMockup } from '@/components/cards/project-mockup'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getProjects } from '@/lib/data/projects'
import { locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      locale,
      slug: project.slug,
    })),
  )
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale as Locale)
  const project = getProjects(locale as Locale).find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const sections = [
    ['overview', project.caseStudy.overview],
    ['problem', project.caseStudy.problem],
    ['solution', project.caseStudy.solution],
    ['key features', project.features.join(' / ')],
    ['tech stack', project.tech.join(' / ')],
    ['architecture', project.caseStudy.architecture],
    ['AI-assisted workflow', project.caseStudy.aiWorkflow],
    ['challenges and what I learned', project.caseStudy.learning],
    ['screenshots', project.caseStudy.screenshots],
  ]

  return (
    <main className="mx-auto w-full max-w-[1180px] px-6 pb-16 pt-10">
      <Link
        href={`/${locale}#projects`}
        className="mb-8 inline-flex items-center gap-2 rounded-md text-sm font-normal text-muted-foreground transition-colors duration-150 hover:text-foreground"
      >
        <i className="ti ti-arrow-left text-[16px]" aria-hidden="true" />
        {dictionary.projects.backToProjects}
      </Link>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <ProjectMockup visual={project.visual} image={project.image} title={project.title} />

        <div className="flex flex-col">
          <Badge status={project.status}>{project.statusLabel}</Badge>
          <h1 className="mt-4 max-w-[720px] text-balance text-[24px] font-medium leading-[1.3]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-[720px] leading-[1.7] text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 rounded-lg border bg-muted p-4">
            <p className="text-sm font-medium leading-[1.5] text-foreground">
              {dictionary.projects.businessValue}
            </p>
            <p className="mt-2 leading-[1.7] text-muted-foreground">{project.businessValue}</p>
          </div>

          <div className="mt-5">
            <p className="text-sm font-medium leading-[1.5]">{dictionary.projects.keyFeatures}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.features.slice(0, 7).map((feature) => (
                <span key={feature} className="badge badge-neutral">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 8).map((tech, index) => (
              <span
                key={tech}
                className={`tag ${['tag-purple', 'tag-teal', 'tag-blue', 'tag-coral', 'tag-green', 'tag-amber'][index % 6]}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live ? (
              <Button asChild>
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  {dictionary.projects.liveDemo}
                  <i className="ti ti-external-link text-[16px]" aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button disabled>{dictionary.projects.comingSoon}</Button>
            )}
            {project.links.github ? (
              <Button asChild variant="secondary">
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  {dictionary.projects.github}
                  <i className="ti ti-brand-github text-[16px]" aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button disabled variant="secondary">
                {dictionary.projects.comingSoon}
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5">
        {sections.map(([title, content]) => (
          <Card key={title}>
            <CardContent className="p-6">
              <h2 className="text-[18px] font-medium leading-[1.4]">{title}</h2>
              <p className="mt-3 leading-[1.7] text-muted-foreground">{content}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
