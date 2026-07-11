import type { Metadata } from 'next'
import { AccountabilityEvalKit } from '@/src/components/AccountabilityEvalKit'
import { StudioShell } from '@/src/components/StudioShell'

export const metadata: Metadata = { title: 'Accountability Eval Kit', description: 'Evaluate six operational capabilities in an AI-assisted workflow.' }

export default function AccountabilityEvalKitPage() {
  return <StudioShell index="04" title="Accountability Eval Kit" question="How accountable is this workflow?" description="Assess six capabilities across the accountability chain. The result is a structured design conversation—not a certification or legal conclusion."><div className="container studio-workbench"><AccountabilityEvalKit /></div><section className="studio-note section"><div className="container studio-note__grid"><p className="eyebrow">Design proposition 04</p><h2>A mature model inside an immature operating system is still an accountability risk.</h2><p>Evaluation must include the organisation around the model: who decides, what they know, how they intervene and whether the outcome can be contested.</p></div></section></StudioShell>
}
