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
    <div className="min-h-56 overflow-hidden rounded-2xl border bg-muted p-4">
      <div className="flex items-center justify-between">
        <span className="badge badge-neutral">{visualLabels[visual]}</span>
        <i className="ti ti-layout-dashboard text-[18px] text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="mt-8 grid gap-3">
        <div className="h-4 w-2/3 rounded-full bg-card" />
        <div className="h-3 w-1/2 rounded-full bg-[var(--accent-teal-bg)]" />
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="h-24 rounded-xl bg-card" />
          <div className="h-24 rounded-xl bg-[var(--accent-blue-bg)]" />
          <div className="h-24 rounded-xl bg-[var(--accent-amber-bg)]" />
        </div>
      </div>
    </div>
  )
}
