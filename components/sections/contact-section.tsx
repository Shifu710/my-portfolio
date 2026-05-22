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
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-24">
      <Reveal>
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-sm font-medium text-[var(--accent-teal-text)]">
                {dictionary.eyebrow}
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.2] tracking-[-0.02em] sm:text-4xl">
                {dictionary.title}
              </h2>
              <p className="mt-4 text-lg leading-[1.6] text-muted-foreground">{dictionary.subtitle}</p>
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
              {items.map(([label, value, icon], index) => (
                <div key={label} className="card-hover flex items-center gap-4 rounded-2xl border bg-muted p-4 transition">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${['tag-teal', 'tag-purple', 'tag-green', 'tag-blue', 'tag-coral'][index]}`}>
                    <i className={`ti ${icon} text-[20px]`} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
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
