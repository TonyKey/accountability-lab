import type { Metadata } from 'next'
import { OversightConsole } from '@/src/components/OversightConsole'
import { StudioShell } from '@/src/components/StudioShell'

export const metadata: Metadata = { title: 'Oversight Console', description: 'A synthetic operational console for supervising consequential AI decisions.' }

export default function OversightConsolePage() {
  return <StudioShell index="03" title="Oversight Console" question="What deserves human attention now?" description="Supervise a synthetic operation through consequence, reversibility, evidence and authority—not a wall of undifferentiated model alerts." dark><div className="container studio-workbench"><OversightConsole /></div><section className="studio-note studio-note--dark section"><div className="container studio-note__grid"><p className="eyebrow">Design proposition 03</p><h2>The purpose of oversight is not to watch everything. It is to notice what matters while intervention still matters.</h2><p>Operational supervision needs prioritisation, explanation, authority and a recoverable action—not merely more telemetry.</p></div></section></StudioShell>
}
