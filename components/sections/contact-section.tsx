import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { contact } from '@/lib/data/contact'

export function ContactSection({
  dictionary,
}: {
  dictionary: {
    eyebrow: string
    title: string
    subtitle: string
    sendEmail: string
    viewGithub: string
    downloadResume: string
    placeholder: string
  }
}) {
  const items = [
    ['email', contact.email, 'ti-mail'],
    ['github', contact.github, 'ti-brand-github'],
    ['gitee', contact.gitee || dictionary.placeholder, 'ti-git-branch'],
    ['linkedin', contact.linkedin || dictionary.placeholder, 'ti-brand-linkedin'],
    ['wechat', contact.wechat, 'ti-message-circle'],
  ] as const

  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6">
      <Reveal>
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-[13px] font-normal leading-[1.5] text-muted-foreground">
                {dictionary.eyebrow}
              </p>
              <h2 className="mt-2 text-balance text-[18px] font-medium leading-[1.4]">
                {dictionary.title}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.7] text-muted-foreground">{dictionary.subtitle}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={`mailto:${contact.email}`}>
                    <i className="ti ti-mail text-[16px]" aria-hidden="true" />
                    {dictionary.sendEmail}
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href={contact.github} target="_blank" rel="noreferrer">
                    {dictionary.viewGithub} ↗
                  </a>
                </Button>
                <Button disabled variant="secondary">
                  <i className="ti ti-file-cv text-[16px]" aria-hidden="true" />
                  {dictionary.downloadResume}
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              {items.map(([label, value, icon]) => (
                <div key={label} className="flex items-center gap-4 rounded-[var(--border-radius-lg)] border bg-[var(--color-background-secondary)] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-background-info)] text-[var(--color-text-info)]">
                    <i className={`ti ${icon} text-[20px]`} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[13px] leading-[1.5] text-muted-foreground">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  )
}
