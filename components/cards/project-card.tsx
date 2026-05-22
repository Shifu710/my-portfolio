import { ExternalLink, GitBranch, FileText } from 'lucide-react'
import Link from 'next/link'

import { ProjectMockup } from '@/components/cards/project-mockup'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Project } from '@/lib/data/projects'
import type { Locale } from '@/lib/i18n/config'

export function ProjectCard({
  project,
  locale,
  dictionary,
}: {
  project: Project
  locale: Locale
  dictionary: {
    businessValue: string
    keyFeatures: string
    liveDemo: string
    github: string
    gitee: string
    caseStudy: string
    comingSoon: string
  }
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="grid gap-6 p-4 lg:grid-cols-[0.85fr_1.15fr] lg:p-5">
        <ProjectMockup visual={project.visual} />
        <div className="flex flex-col">
          <Badge status={project.status}>{project.statusLabel}</Badge>
          <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-cyan-200">{dictionary.businessValue}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.businessValue}</p>
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold">{dictionary.keyFeatures}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.features.slice(0, 6).map((feature) => (
                <span key={feature} className="rounded-full bg-white/8 px-3 py-1 text-xs text-muted-foreground">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((tech) => (
              <span key={tech} className="rounded-lg border border-white/10 px-2.5 py-1 text-xs text-cyan-100/90">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live ? (
              <Button asChild size="sm">
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {dictionary.liveDemo}
                </a>
              </Button>
            ) : (
              <Button size="sm" disabled>
                {dictionary.comingSoon}
              </Button>
            )}
            {project.links.github ? (
              <Button asChild variant="secondary" size="sm">
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  <GitBranch className="h-4 w-4" />
                  {dictionary.github}
                </a>
              </Button>
            ) : (
              <Button variant="secondary" size="sm" disabled>
                <GitBranch className="h-4 w-4" />
                {dictionary.comingSoon}
              </Button>
            )}
            {project.links.gitee ? (
              <Button asChild variant="secondary" size="sm">
                <a href={project.links.gitee} target="_blank" rel="noreferrer">
                  <GitBranch className="h-4 w-4" />
                  {dictionary.gitee}
                </a>
              </Button>
            ) : null}
            <Button asChild variant="secondary" size="sm">
              <Link href={`/${locale}/projects/${project.slug}`}>
                <FileText className="h-4 w-4" />
                {dictionary.caseStudy}
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
