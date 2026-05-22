import type { Locale } from '@/lib/i18n/config'

export function Footer({
  dictionary,
}: {
  locale: Locale
  dictionary: { text: string }
}) {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-4 text-[13px] leading-[1.5] text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Mohamed Gamal.</p>
        <p>{dictionary.text}</p>
      </div>
    </footer>
  )
}
