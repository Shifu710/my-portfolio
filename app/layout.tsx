import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Mohamed Gamal | AI-Assisted Full-Stack Developer',
    template: '%s | Mohamed Gamal',
  },
  description:
    'Bilingual portfolio for Mohamed Gamal, an AI-assisted React and Next.js full-stack developer based in Malaysia.',
  metadataBase: new URL('https://jamiesec.dev'),
  openGraph: {
    title: 'Mohamed Gamal | AI-Assisted Full-Stack Developer',
    description:
      'React, Next.js, TypeScript, AI-assisted development, bilingual English and Chinese communication.',
    url: 'https://jamiesec.dev',
    siteName: 'Mohamed Gamal Portfolio',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
