import type { Locale } from '@/lib/i18n/config'

export function Footer({
  dictionary,
}: {
  locale: Locale
  dictionary: { text: string }
}) {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Mohamed Gamal.</p>
        <p>{dictionary.text}</p>
      </div>
    </footer>
  )
}
