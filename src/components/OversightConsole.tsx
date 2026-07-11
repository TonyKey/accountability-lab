'use client'

import { useState } from 'react'
import { oversightItems, type OversightItem } from '@/src/content/studio-data'

type Outcome = { itemId: string; action: string } | null

export function OversightConsole() {
  const [selectedId, setSelectedId] = useState(oversightItems[0].id)
  const [outcome, setOutcome] = useState<Outcome>(null)
  const selected = oversightItems.find((item) => item.id === selectedId) ?? oversightItems[0]
  const choose = (item: OversightItem) => { setSelectedId(item.id); setOutcome(null) }

  return (
    <div className="oversight-console">
      <div className="oversight-console__top">
        <div><span>System state</span><strong><i /> supervised</strong></div>
        <div><span>Decisions today</span><strong>1,284</strong></div>
        <div><span>Held before action</span><strong>18</strong></div>
        <div><span>Human attention</span><strong>4</strong></div>
      </div>
      <div className="oversight-console__body">
        <aside className="oversight-queue">
          <div className="oversight-queue__head"><span>Attention queue</span><button type="button" disabled>Priority ↓</button></div>
          {oversightItems.map((item) => <button type="button" key={item.id} data-active={selected.id === item.id} onClick={() => choose(item)}>
            <span><i data-state={item.state} />{item.id} · {item.domain}</span><strong>{item.title}</strong><small>{item.signal} · {item.urgency}</small>
          </button>)}
        </aside>
        <section className="oversight-inspector" aria-live="polite">
          <div className="oversight-inspector__head"><span>{selected.id} · {selected.domain}</span><i>Action pending</i></div>
          <h2>{selected.title}</h2>
          <div className="oversight-inspector__signal"><span>Why this surfaced</span><strong>{selected.signal}</strong><p>The console prioritises consequence, policy and missing authority—not model uncertainty alone.</p></div>
          <dl>
            <div><dt>Potential consequence</dt><dd>{selected.consequence}</dd></div>
            <div><dt>System recommendation</dt><dd>{selected.recommendation}</dd></div>
            <div><dt>Recovery window</dt><dd>{selected.state === 'resolved' ? 'Recovery remains available for 30 days.' : 'Action is held; no external consequence yet.'}</dd></div>
          </dl>
          {outcome?.itemId === selected.id ? <div className="oversight-outcome"><span>Intervention recorded</span><strong>{outcome.action}</strong><button type="button" onClick={() => setOutcome(null)}>Undo demonstration</button></div> : <div className="oversight-actions">
            <button type="button" onClick={() => setOutcome({ itemId: selected.id, action: 'Action held and owner notified.' })}>Hold action</button>
            <button type="button" onClick={() => setOutcome({ itemId: selected.id, action: 'Escalated with evidence snapshot.' })}>Escalate</button>
            <button type="button" onClick={() => setOutcome({ itemId: selected.id, action: 'Sample acknowledged; monitoring continues.' })}>Acknowledge</button>
          </div>}
        </section>
        <aside className="oversight-context">
          <p className="eyebrow">Oversight lens</p>
          <div><span>Consequence</span><b data-level="high">high</b></div>
          <div><span>Reversibility</span><b>limited</b></div>
          <div><span>Evidence quality</span><b data-level="warning">partial</b></div>
          <div><span>Authority</span><b data-level="warning">unconfirmed</b></div>
          <p>Attention is a scarce operational resource. A good console explains why this case deserves it.</p>
        </aside>
      </div>
    </div>
  )
}
