import type { Project } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

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
    <div
      className={cn(
        'relative min-h-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-glow',
        visual === 'wechat' && 'bg-gradient-to-br from-emerald-950 to-slate-950',
        visual === 'resume' && 'bg-gradient-to-br from-violet-950 to-slate-950',
        visual === 'portfolio' && 'bg-gradient-to-br from-cyan-950 to-violet-950',
        visual === 'commerce' && 'bg-gradient-to-br from-indigo-950 to-cyan-950',
      )}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-30" />
      <div className="relative flex items-center justify-between">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{visualLabels[visual]}</span>
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-glow" />
      </div>
      <div className="relative mt-8 grid gap-3">
        <div className="h-4 w-2/3 rounded-full bg-white/70" />
        <div className="h-3 w-1/2 rounded-full bg-cyan-200/70" />
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-xl bg-white/10" />
          <div className="h-20 rounded-xl bg-cyan-300/20" />
          <div className="h-20 rounded-xl bg-violet-400/20" />
        </div>
      </div>
    </div>
  )
}
