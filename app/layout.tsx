import type { Metadata } from 'next'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/jetbrains-mono'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Moment Before Action — Accountability Lab',
    template: '%s — Accountability Lab',
  },
  description:
    'An independent research exhibit about meaningful human approval, decision records, and accountability in AI systems.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'The Moment Before Action — Accountability Lab',
    description: 'A button is not accountability. Explore approval patterns for consequential AI actions.',
    url: '/',
    siteName: 'Accountability Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Moment Before Action — Accountability Lab',
    description: 'A button is not accountability. Explore approval patterns for consequential AI actions.',
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
