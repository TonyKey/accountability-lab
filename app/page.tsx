import Link from 'next/link'
import { InstrumentCard } from '@/src/components/InstrumentCard'
import { LabFooter } from '@/src/components/LabFooter'
import { SiteHeader } from '@/src/components/SiteHeader'

const principles = [
  ['01', 'Authority', 'Who is permitted to decide, intervene and accept the consequence?'],
  ['02', 'Evidence', 'What could the reviewer actually know at the moment of action?'],
  ['03', 'Traceability', 'Can the decision be reconstructed after the interface disappears?'],
  ['04', 'Contestability', 'Can a person challenge, reverse or seek redress from the outcome?'],
]

export default function Home() {
  return (
    <main id="main-content" className="lab-home">
      <div className="container"><SiteHeader /></div>
      <section className="lab-hero">
        <div className="container lab-hero__grid">
          <div>
            <p className="eyebrow">Independent AI accountability research · 2026</p>
            <h1>The system acts.<br /><em>Who answers?</em></h1>
            <p className="lead">A working laboratory for the interfaces, records and operating practices that make consequential AI systems governable.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#studio">Enter the Studio</a>
              <Link className="button button--secondary" href="/experiments/approval-pattern-gallery">View Exhibit 01</Link>
            </div>
          </div>
          <div className="lab-machine" aria-label="A conceptual accountability system">
            <div className="lab-machine__input"><span>AI proposal</span><strong>£84,200 payment</strong><small>confidence 0.94</small></div>
            <div className="lab-machine__line"><span>evidence</span><span>authority</span><span>impact</span></div>
            <div className="lab-machine__gate"><span>Human gate</span><strong>HELD</strong><small>Bank change unverified</small></div>
            <div className="lab-machine__record"><span>Decision record</span><code>ADR-2048-A7</code><small>Reconstructable</small></div>
          </div>
        </div>
        <div className="container lab-hero__foot"><span>Approval</span><span>Decision logging</span><span>Operational oversight</span><span>Evaluation</span></div>
      </section>

      <section className="lab-thesis section" id="research">
        <div className="container lab-thesis__grid">
          <div><p className="eyebrow">The thesis</p><h2>Accountability is a designed capability.</h2></div>
          <div>
            <p className="lab-thesis__lead">It does not emerge automatically from a human approval button, a confidence score or a policy document.</p>
            <p>It must be expressed in the moments where people understand an AI proposal, exercise legitimate authority, leave useful evidence and remain able to recover when the system is wrong.</p>
          </div>
        </div>
        <div className="container principle-grid">
          {principles.map(([index, title, body]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="studio-index section" id="studio">
        <div className="container">
          <div className="studio-index__head">
            <div><p className="eyebrow">Accountability Studio</p><h2>Four instruments. One chain of responsibility.</h2></div>
            <p>Use the Studio to move from an AI proposal to an inspectable, supervised and evaluable operational decision.</p>
          </div>
          <div className="instrument-grid">
            <InstrumentCard index="01" title="Approval Pattern Gallery" question="Where should a person intervene?" description="Eight interaction patterns for consequential AI actions." href="/experiments/approval-pattern-gallery" status="Research exhibit" />
            <InstrumentCard index="02" title="Decision Record Explorer" question="Can we reconstruct what happened?" description="Inspect the evidence, authority and interventions preserved with a decision." href="/studio/decision-record-explorer" />
            <InstrumentCard index="03" title="Oversight Console" question="What deserves attention now?" description="Supervise a live synthetic queue without reducing oversight to alert counting." href="/studio/oversight-console" />
            <InstrumentCard index="04" title="Accountability Eval Kit" question="How accountable is this workflow?" description="Assess six capabilities and expose the weakest link in the operating model." href="/studio/accountability-eval-kit" />
          </div>
        </div>
      </section>

      <section className="chain section">
        <div className="container">
          <p className="eyebrow">The accountability chain</p>
          <h2>Design the gate. Preserve the decision. Supervise the operation. Evaluate the system.</h2>
          <div className="chain__flow"><span>Proposal</span><b>→</b><span>Intervention</span><b>→</b><span>Record</span><b>→</b><span>Oversight</span><b>→</b><span>Learning</span></div>
        </div>
      </section>

      <div className="container"><LabFooter /></div>
    </main>
  )
}
