import type { Project } from '@/lib/data/projects'

const visualLabels: Record<Project['visual'], string> = {
  'ai-crm': 'AI CRM',
  wechat: 'WeChat',
  resume: 'AI Match',
  portfolio: 'Portfolio',
  weather: 'Weather',
  taskflow: 'TaskFlow',
  commerce: 'Market',
}

export function ProjectMockup({ visual }: { visual: Project['visual'] }) {
  return (
    <div className="min-h-48 overflow-hidden rounded-[var(--border-radius-lg)] border bg-[var(--color-background-secondary)] p-4">
      <div className="flex items-center justify-between">
        <span className="badge badge-neutral">{visualLabels[visual]}</span>
        <i className="ti ti-layout-dashboard text-[18px] text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="mt-8 grid gap-3">
        <div className="h-4 w-2/3 rounded-[var(--border-radius-md)] bg-[var(--color-background-tertiary)]" />
        <div className="h-3 w-1/2 rounded-[var(--border-radius-md)] bg-[var(--color-background-tertiary)]" />
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-[var(--border-radius-md)] bg-[var(--color-background-primary)]" />
          <div className="h-20 rounded-[var(--border-radius-md)] bg-[var(--color-background-info)]" />
          <div className="h-20 rounded-[var(--border-radius-md)] bg-[var(--color-background-warning)]" />
        </div>
      </div>
    </div>
  )
}
