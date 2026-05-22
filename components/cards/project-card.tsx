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
      <CardContent className="grid gap-5 p-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:p-5">
        <ProjectMockup visual={project.visual} />
        <div className="flex flex-col">
          <Badge status={project.status}>{project.statusLabel}</Badge>
          <h3 className="mt-4 text-[16px] font-medium leading-[1.5]">{project.title}</h3>
          <p className="mt-2 text-[14px] leading-[1.6] text-muted-foreground">{project.description}</p>
          <div className="mt-4 rounded-[var(--border-radius-md)] border bg-[var(--color-background-secondary)] p-4">
            <p className="text-[13px] font-medium leading-[1.5] text-foreground">{dictionary.businessValue}</p>
            <p className="mt-2 text-[14px] leading-[1.6] text-muted-foreground">{project.businessValue}</p>
          </div>
          <div className="mt-4">
            <p className="text-[13px] font-medium leading-[1.5]">{dictionary.keyFeatures}</p>
            <div className="mt-3 flex flex-wrap gap-[6px]">
              {project.features.slice(0, 6).map((feature) => (
                <span key={feature} className="badge badge-neutral">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-[6px]">
            {project.tech.slice(0, 6).map((tech, index) => (
              <span key={tech} className={`tag ${['tag-purple', 'tag-teal', 'tag-blue', 'tag-coral', 'tag-green', 'tag-amber'][index % 6]}`}>
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.live ? (
              <Button asChild size="sm">
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  {dictionary.liveDemo} ↗
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
                  {dictionary.github} ↗
                </a>
              </Button>
            ) : (
              <Button variant="secondary" size="sm" disabled>
                {dictionary.comingSoon}
              </Button>
            )}
            {project.links.gitee ? (
              <Button asChild variant="secondary" size="sm">
                <a href={project.links.gitee} target="_blank" rel="noreferrer">
                  {dictionary.gitee} ↗
                </a>
              </Button>
            ) : null}
            <Button asChild variant="secondary" size="sm">
              <Link href={`/${locale}/projects/${project.slug}`}>
                <i className="ti ti-file-text text-[16px]" aria-hidden="true" />
                {dictionary.caseStudy}
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
