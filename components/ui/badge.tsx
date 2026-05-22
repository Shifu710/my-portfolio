import type { ProjectStatus } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

const statusClasses: Record<ProjectStatus, string> = {
  Live: 'border-emerald-400/30 bg-emerald-400/12 text-emerald-200',
  'In Progress': 'border-cyan-400/30 bg-cyan-400/12 text-cyan-200',
  Planned: 'border-violet-400/30 bg-violet-400/12 text-violet-200',
  'Coming Soon': 'border-slate-400/30 bg-slate-400/12 text-slate-200',
}

export function Badge({
  children,
  status,
  className,
}: {
  children: React.ReactNode
  status?: ProjectStatus
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold',
        status ? statusClasses[status] : 'border-white/10 bg-white/10 text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
