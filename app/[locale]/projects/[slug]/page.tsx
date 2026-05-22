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
    <main className="mx-auto w-full max-w-[1100px] px-6 pb-16 pt-10">
      <Link
        href={`/${locale}#projects`}
        className="mb-8 inline-flex items-center gap-2 rounded-md text-sm font-normal text-muted-foreground transition-colors duration-150 hover:text-foreground"
      >
        <i className="ti ti-arrow-left text-[16px]" aria-hidden="true" />
        {dictionary.projects.backToProjects}
      </Link>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <Badge status={project.status}>{project.statusLabel}</Badge>
          <h1 className="mt-4 max-w-[720px] text-balance text-[22px] font-medium leading-[1.3]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-[720px] leading-[1.7] text-muted-foreground">
            {project.description}
          </p>
        </div>

        <Card className="card-featured h-fit">
          <CardContent className="space-y-4 p-5">
            <p className="text-[13px] font-normal leading-[1.5] text-muted-foreground">{dictionary.projects.actions}</p>
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
