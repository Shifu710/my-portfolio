import Link from 'next/link'
import { notFound } from 'next/navigation'

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
    <main className="mx-auto w-full max-w-[1200px] px-6 pb-24 pt-28">
      <Link
        href={`/${locale}#projects`}
        className="mb-8 inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <i className="ti ti-arrow-left text-[16px]" aria-hidden="true" />
        {dictionary.projects.backToProjects}
      </Link>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <Badge status={project.status}>{project.statusLabel}</Badge>
          <h1 className="mt-5 max-w-[900px] text-balance text-4xl font-bold leading-[1.1] tracking-[-0.025em] sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[760px] text-lg leading-[1.6] text-muted-foreground">
            {project.description}
          </p>
        </div>

        <Card className="h-fit">
          <CardContent className="space-y-4 p-5">
            <p className="text-sm font-medium text-muted-foreground">{dictionary.projects.actions}</p>
            <div className="grid gap-3">
              {project.links.live ? (
                <Button asChild>
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    live demo ↗
                  </a>
                </Button>
              ) : (
                <Button disabled>live demo coming soon</Button>
              )}
              {project.links.github ? (
                <Button asChild variant="secondary">
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    github ↗
                  </a>
                </Button>
              ) : (
                <Button disabled variant="secondary">
                  github coming soon
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-14 grid gap-5">
        {sections.map(([title, content]) => (
          <Card key={title}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold leading-[1.2]">{title}</h2>
              <p className="mt-3 text-lg leading-[1.6] text-muted-foreground">{content}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
