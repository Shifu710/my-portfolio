import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react'
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
    ['Overview', project.caseStudy.overview],
    ['Problem', project.caseStudy.problem],
    ['Solution', project.caseStudy.solution],
    ['Key Features', project.features.join(' / ')],
    ['Tech Stack', project.tech.join(' / ')],
    ['Architecture', project.caseStudy.architecture],
    ['AI-Assisted Workflow', project.caseStudy.aiWorkflow],
    ['Challenges & What I Learned', project.caseStudy.learning],
    ['Screenshots', project.caseStudy.screenshots],
  ]

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-28 sm:px-6">
      <Link
        href={`/${locale}#projects`}
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {dictionary.projects.backToProjects}
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <Badge status={project.status}>{project.statusLabel}</Badge>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
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
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              ) : (
                <Button disabled>Live Demo Coming Soon</Button>
              )}
              {project.links.github ? (
                <Button asChild variant="secondary">
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              ) : (
                <Button disabled variant="secondary">
                  GitHub Coming Soon
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-14 grid gap-4">
        {sections.map(([title, content]) => (
          <Card key={title}>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{content}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
