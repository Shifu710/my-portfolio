import type { ProjectStatus } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

const statusClasses: Record<ProjectStatus, string> = {
  Live: 'badge-success',
  'In Progress': 'badge-info',
  Planned: 'badge-warning',
  'Coming Soon': 'badge-neutral',
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
        'badge w-fit',
        status ? statusClasses[status] : 'badge-neutral',
        className,
      )}
    >
      {children}
    </span>
  )
}
