import type { Metadata } from 'next'
import { HeroSequence } from '@/src/components/HeroSequence'
import { OriginSection } from '@/src/components/OriginSection'
import { AutonomyLadder } from '@/src/components/AutonomyLadder'
import { GateAnatomy } from '@/src/components/GateAnatomy'
import { PatternGallery } from '@/src/components/PatternGallery'
import { WorkflowDemonstrator } from '@/src/components/WorkflowDemonstrator'
import { ApprovalTheatre } from '@/src/components/ApprovalTheatre'
import { RegulatoryHorizon } from '@/src/components/RegulatoryHorizon'
import { ResearchQuestions } from '@/src/components/ResearchQuestions'
import { SectionHeader } from '@/src/components/SectionHeader'
import { ExhibitNav } from '@/src/components/ExhibitNav'
import { SiteHeader } from '@/src/components/SiteHeader'
import { LabFooter } from '@/src/components/LabFooter'

export const metadata: Metadata = {
  title: 'Approval Pattern Gallery',
  description: 'Eight ways to keep a person meaningfully in control of consequential AI actions.',
}

export default function ApprovalPatternGalleryPage() {
  return (
    <main id="main-content">
      <div className="container"><SiteHeader /></div>
      <HeroSequence />
      <ExhibitNav />
      <OriginSection />
      <section className="section section--paper" id="autonomy" aria-labelledby="autonomy-title"><div className="container"><SectionHeader eyebrow="01 · Calibrate the intervention" title="Autonomy is not binary." body="The design question is not simply whether a human is in the loop. It is where, why and with what authority they enter it." id="autonomy-title" /><AutonomyLadder /></div></section>
      <section className="section section--warm" id="anatomy" aria-labelledby="anatomy-title"><div className="container"><SectionHeader eyebrow="02 · Equip the reviewer" title="The anatomy of a meaningful gate." body="A decision surface should reduce uncertainty about the action—not merely move responsibility onto the nearest person." id="anatomy-title" /><GateAnatomy /></div></section>
      <section className="section section--paper" id="patterns" aria-labelledby="patterns-title"><div className="container"><SectionHeader eyebrow="03 · Pattern language" title="Eight ways to keep a person meaningfully in control." body="Approval is only one mechanism. The right pattern depends on consequence, uncertainty, reversibility, volume and authority." id="patterns-title" /><PatternGallery /></div></section>
      <section className="section workflow-section" id="workflows" aria-labelledby="workflows-title"><div className="container"><SectionHeader eyebrow="04 · Try the decision" title="Three proposals. No obviously safe answer." body="These fictional workflows demonstrate the work of oversight: inspect the evidence, notice the limits, choose an action and see what remains on the record." id="workflows-title" /><WorkflowDemonstrator /></div></section>
      <section className="section section--warm" id="theatre" aria-labelledby="theatre-title"><div className="container"><SectionHeader eyebrow="05 · Failure mode" title="Human-in-the-loop can still be approval theatre." body="A visible human does not guarantee an informed, authorised or contestable decision. Compare the same moment designed two ways." id="theatre-title" /><ApprovalTheatre /></div></section>
      <section className="section regulation-section" id="regulatory-horizon" aria-labelledby="regulation-title"><div className="container"><SectionHeader eyebrow="06 · Regulatory horizon" title="Policy eventually lands in an interface." body="Rules describe obligations such as oversight, traceability, accountability and redress. Product teams must decide what those obligations actually look like during work." id="regulation-title" /><RegulatoryHorizon /></div></section>
      <section className="section section--paper" id="open-questions" aria-labelledby="questions-title"><div className="container"><SectionHeader eyebrow="07 · Work in public" title="This investigation is deliberately unfinished." body="Accountability is not a component to ship once. These are the questions guiding the next experiments." id="questions-title" /><ResearchQuestions /><LabFooter /></div></section>
    </main>
  )
}
