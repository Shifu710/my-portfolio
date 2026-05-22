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
    <Reveal className="mx-auto mb-8 max-w-[720px]">
      <p className="text-[13px] font-normal leading-[1.5] text-[var(--color-text-info)]">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-[18px] font-medium leading-[1.4]">
        {title}
      </h2>
      {description ? <p className="mt-3 leading-[1.7] text-muted-foreground">{description}</p> : null}
    </Reveal>
  )
}
