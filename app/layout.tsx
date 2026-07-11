import type { Metadata } from 'next'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/jetbrains-mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'The Moment Before Action — Accountability Lab',
    template: '%s — Accountability Lab',
  },
  description:
    'An independent research exhibit about meaningful human approval, decision records, and accountability in AI systems.',
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
