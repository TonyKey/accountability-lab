import type { Metadata } from 'next'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/jetbrains-mono'
import './globals.css'
import { getSiteUrl } from '@/src/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Accountability Lab — AI accountability research',
    template: '%s — Accountability Lab',
  },
  description:
    'Independent research into confidence, control and responsibility in AI systems.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Accountability Lab — The system acts. Who answers?',
    description: 'Interactive research into approval, decision records, operational oversight and AI accountability evaluation.',
    url: '/',
    siteName: 'Accountability Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accountability Lab — The system acts. Who answers?',
    description: 'Interactive research into approval, decision records, operational oversight and AI accountability evaluation.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to the exhibit
        </a>
        {children}
      </body>
    </html>
  )
}
