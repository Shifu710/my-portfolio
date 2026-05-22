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
    <Reveal className="mx-auto mb-12 max-w-[800px] text-center">
      <p className="text-sm font-medium text-[var(--accent-teal-text)]">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.2] tracking-[-0.02em] sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-[1.6] text-muted-foreground">{description}</p> : null}
    </Reveal>
  )
}
