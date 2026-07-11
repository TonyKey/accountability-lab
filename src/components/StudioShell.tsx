import type { ReactNode } from 'react'
import { SiteHeader } from './SiteHeader'
import { LabFooter } from './LabFooter'

export function StudioShell({ index, title, question, description, children, dark = false }: { index: string; title: string; question: string; description: string; children: ReactNode; dark?: boolean }) {
  return (
    <main id="main-content" className={dark ? 'studio-page studio-page--dark' : 'studio-page'}>
      <div className="container"><SiteHeader inverse={dark} /></div>
      <header className="studio-hero container">
        <div><p className="eyebrow">Accountability Studio · Instrument {index}</p><h1>{title}</h1></div>
        <div><p className="studio-hero__question">{question}</p><p>{description}</p><span className="synthetic-label">Synthetic operational environment</span></div>
      </header>
      {children}
      <div className="container"><LabFooter /></div>
    </main>
  )
}
