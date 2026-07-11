import type { Metadata } from 'next'
import { DecisionRecordStudio } from '@/src/components/DecisionRecordStudio'
import { StudioShell } from '@/src/components/StudioShell'

export const metadata: Metadata = { title: 'Decision Record Explorer', description: 'Inspect what survives after an AI-assisted decision is made.' }

export default function DecisionRecordExplorerPage() {
  return <StudioShell index="02" title="Decision Record Explorer" question="Can we reconstruct what happened?" description="Explore the evidence, authority, intervention and operational result preserved around synthetic AI-assisted decisions."><div className="container studio-workbench"><DecisionRecordStudio /></div><section className="studio-note section"><div className="container studio-note__grid"><p className="eyebrow">Design proposition 02</p><h2>A log says something happened. A decision record helps us understand why.</h2><p>Useful traceability preserves the decision context available at the time—not a retrospective story assembled after harm occurs.</p></div></section></StudioShell>
}
