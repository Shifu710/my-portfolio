import Image from 'next/image'

import type { Project } from '@/lib/data/projects'

const visualLabels: Record<Project['visual'], string> = {
  'ai-crm': 'AI CRM',
  credits: 'Credits',
  wechat: 'WeChat',
  resume: 'AI Match',
  portfolio: 'Portfolio',
  weather: 'Weather',
  taskflow: 'TaskFlow',
  commerce: 'Market',
}

export function ProjectMockup({
  visual,
  image,
  title,
}: {
  visual: Project['visual']
  image?: Project['image']
  title?: string
}) {
  if (image) {
    return (
      <figure className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted">
        <Image
          src={image.src}
          alt={image.alt || title || visualLabels[visual]}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-top"
        />
      </figure>
    )
  }

  return (
    <div className="min-h-48 overflow-hidden rounded-lg border bg-muted p-4">
      <div className="flex items-center justify-between">
        <span className="badge badge-neutral">{visualLabels[visual]}</span>
        <i className="ti ti-layout-dashboard text-[18px] text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="mt-6 grid gap-3">
        <div className="h-4 w-2/3 rounded-full bg-card" />
        <div className="h-3 w-1/2 rounded-full bg-[var(--color-background-info)]" />
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-lg bg-card" />
          <div className="h-20 rounded-lg bg-[var(--ramp-blue-bg)]" />
          <div className="h-20 rounded-lg bg-[var(--ramp-amber-bg)]" />
        </div>
      </div>
    </div>
  )
}
