import { Reveal } from '@/components/motion/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p> : null}
    </Reveal>
  )
}
