import { notFound } from 'next/navigation'

import { AboutSection } from '@/components/sections/about-section'
import { AiWorkflowSection } from '@/components/sections/ai-workflow-section'
import { ContactSection } from '@/components/sections/contact-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProcessSection } from '@/components/sections/process-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { WhyMeSection } from '@/components/sections/why-me-section'
import { locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale as Locale)

  return (
    <main>
      <HeroSection locale={locale as Locale} dictionary={dictionary.hero} />
      <AboutSection dictionary={dictionary.about} />
      <SkillsSection dictionary={dictionary.skills} />
      <ProjectsSection locale={locale as Locale} dictionary={dictionary.projects} />
      <ProcessSection dictionary={dictionary.process} />
      <WhyMeSection dictionary={dictionary.whyMe} />
      <AiWorkflowSection dictionary={dictionary.aiWorkflow} />
      <ContactSection dictionary={dictionary.contact} />
    </main>
  )
}
