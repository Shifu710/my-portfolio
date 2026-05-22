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
    <Reveal className="mb-8 max-w-[720px]">
      <p className="text-[13px] font-normal leading-[1.5] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-[18px] font-medium leading-[1.4]">
        {title}
      </h2>
      {description ? <p className="mt-3 text-[16px] leading-[1.7] text-muted-foreground">{description}</p> : null}
    </Reveal>
  )
}
