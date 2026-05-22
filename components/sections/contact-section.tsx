import { Mail, MessageCircle, Download, GitBranch, LinkIcon } from 'lucide-react'

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
    ['Email', contact.email, Mail],
    ['GitHub', contact.github, GitBranch],
    ['Gitee', contact.gitee || dictionary.placeholder, GitBranch],
    ['LinkedIn', contact.linkedin || dictionary.placeholder, LinkIcon],
    ['WeChat', contact.wechat, MessageCircle],
  ] as const

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                {dictionary.eyebrow}
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {dictionary.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{dictionary.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={`mailto:${contact.email}`}>
                    <Mail className="h-4 w-4" />
                    {dictionary.sendEmail}
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href={contact.github} target="_blank" rel="noreferrer">
                    <GitBranch className="h-4 w-4" />
                    {dictionary.viewGithub}
                  </a>
                </Button>
                <Button disabled variant="secondary">
                  <Download className="h-4 w-4" />
                  {dictionary.downloadResume}
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              {items.map(([label, value, Icon]) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/15 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
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
