import type { Locale } from '@/lib/i18n/config'

export function Footer({
  dictionary,
}: {
  locale: Locale
  dictionary: { text: string }
}) {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Mohamed Gamal.</p>
        <p>{dictionary.text}</p>
      </div>
    </footer>
  )
}
