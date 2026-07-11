'use client'

import { useState } from 'react'

const elements = [
  { id: 'action', label: 'Proposed action', body: 'What will actually change?' },
  { id: 'evidence', label: 'Evidence', body: 'What supports this proposal—and what does not?' },
  { id: 'uncertainty', label: 'Uncertainty', body: 'What remains unknown or inferred?' },
  { id: 'consequence', label: 'Consequence', body: 'Who or what is affected if this is wrong?' },
  { id: 'alternatives', label: 'Alternatives', body: 'What else can the reviewer choose?' },
  { id: 'authority', label: 'Authority', body: 'Is this person permitted and equipped to decide?' },
  { id: 'recovery', label: 'Recovery', body: 'Can the action be stopped, undone or corrected?' },
  { id: 'record', label: 'Record', body: 'What will a later reviewer be able to reconstruct?' },
]

export function GateAnatomy() {
  const [included, setIncluded] = useState(() => new Set(elements.map((item) => item.id)))
  const missing = elements.length - included.size

  const toggle = (id: string) => {
    setIncluded((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="anatomy">
      <div className="anatomy__surface">
        <div className="anatomy__head">
          <span className="eyebrow">Decision AP-2048</span>
          <span className={`anatomy__quality ${missing ? 'is-weak' : ''}`}>
            {missing ? `${missing} context ${missing === 1 ? 'gap' : 'gaps'}` : 'meaningful gate'}
          </span>
        </div>
        <h3>Release a supplier payment exception</h3>
        <p className="anatomy__proposal">£84,200 · bank details changed 48 hours ago · transfer is irreversible</p>
        <div className="anatomy__map">
          {elements.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={included.has(item.id)}
              className="anatomy__item"
              data-included={included.has(item.id)}
              onClick={() => toggle(item.id)}
            >
              <span>{included.has(item.id) ? '✓' : '—'}</span>
              <strong>{item.label}</strong>
              <small>{item.body}</small>
            </button>
          ))}
        </div>
      </div>
      <aside className="anatomy__aside">
        <p className="eyebrow">Try removing context</p>
        <h3>A gate degrades one omission at a time.</h3>
        <p>Toggle any element. The approve button may remain, but the quality of human control does not.</p>
        <button className="button button--secondary" type="button" onClick={() => setIncluded(new Set(elements.map((item) => item.id)))}>
          Restore all context
        </button>
      </aside>
    </div>
  )
}
