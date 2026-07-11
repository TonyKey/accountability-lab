'use client'

import { useState } from 'react'
import { studioDecisions } from '@/src/content/studio-data'

type View = 'record' | 'evidence' | 'trace'

export function DecisionRecordStudio() {
  const [selectedId, setSelectedId] = useState(studioDecisions[0].id)
  const [view, setView] = useState<View>('record')
  const selected = studioDecisions.find((item) => item.id === selectedId) ?? studioDecisions[0]

  return (
    <div className="record-studio">
      <aside className="record-studio__list" aria-label="Decision records">
        <div className="record-studio__list-head"><span>Recent records</span><b>{studioDecisions.length}</b></div>
        {studioDecisions.map((item) => (
          <button key={item.id} type="button" onClick={() => setSelectedId(item.id)} data-active={item.id === selected.id}>
            <span>{item.id}</span><strong>{item.title}</strong><small>{item.organisation} · {item.risk}</small><i data-status={item.status}>{item.status}</i>
          </button>
        ))}
      </aside>
      <section className="record-studio__main" aria-live="polite">
        <div className="record-studio__toolbar">
          <div><span className="eyebrow">{selected.id}</span><strong>{selected.status}</strong></div>
          <div role="group" aria-label="Record view">{(['record', 'evidence', 'trace'] as View[]).map((item) => <button type="button" key={item} aria-pressed={view === item} onClick={() => setView(item)}>{item}</button>)}</div>
        </div>
        <div className="record-studio__title"><div><span>{selected.organisation}</span><h2>{selected.title}</h2></div><div><small>Model confidence</small><strong>{selected.confidence}</strong></div></div>
        {view === 'record' ? <div className="record-sheet">
          <section><span>01 · Proposal</span><p>{selected.proposal}</p><small>{selected.model}</small></section>
          <section><span>02 · Authority</span><p>{selected.authority}</p></section>
          <section><span>03 · Human intervention</span><p>{selected.intervention}</p></section>
          <section><span>04 · Operational result</span><p>{selected.result}</p></section>
        </div> : null}
        {view === 'evidence' ? <div className="evidence-table">
          <div className="evidence-table__head"><span>Evidence available at decision time</span><span>Provenance state</span></div>
          {selected.evidence.map((item) => <div key={item.label}><span><strong>{item.label}</strong><small>{item.value}</small></span><i data-state={item.state}>{item.state}</i></div>)}
          <p>Confidence describes the model output. It does not repair missing evidence.</p>
        </div> : null}
        {view === 'trace' ? <ol className="trace-list">{selected.trace.map((event, index) => <li key={`${event.time}-${event.actor}`}><span>{String(index + 1).padStart(2, '0')}</span><time>{event.time}</time><strong>{event.actor}</strong><p>{event.event}</p></li>)}</ol> : null}
      </section>
      <aside className="record-studio__diagnosis"><p className="eyebrow">Record diagnosis</p><strong>{selected.evidence.filter((item) => item.state === 'verified').length}/{selected.evidence.length}</strong><span>evidence items verified</span><hr /><p>A useful record preserves what was known, who had authority, what changed and what happened next.</p></aside>
    </div>
  )
}
