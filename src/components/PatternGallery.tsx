'use client'

import { useState } from 'react'
import { approvalPatterns } from '@/src/content/patterns'

export function PatternGallery() {
  const [activeId, setActiveId] = useState(approvalPatterns[0].id)
  const active = approvalPatterns.find((pattern) => pattern.id === activeId) ?? approvalPatterns[0]

  return (
    <div className="pattern-gallery">
      <div className="pattern-gallery__nav" aria-label="Approval patterns">
        {approvalPatterns.map((pattern) => (
          <button
            key={pattern.id}
            type="button"
            aria-label={`${pattern.index} ${pattern.name}`}
            aria-pressed={active.id === pattern.id}
            data-active={active.id === pattern.id}
            onClick={() => setActiveId(pattern.id)}
          >
            <span>{pattern.index}</span>
            <strong>{pattern.name}</strong>
          </button>
        ))}
      </div>
      <article className="pattern-gallery__exhibit" aria-live="polite">
        <div className="pattern-gallery__title">
          <span className="pattern-gallery__number">{active.index}</span>
          <div>
            <p className="eyebrow">Approval pattern</p>
            <h3>{active.name}</h3>
            <p>{active.summary}</p>
          </div>
        </div>
        <div className="pattern-gallery__grid">
          <section>
            <h4>What it protects</h4>
            <p>{active.purpose}</p>
          </section>
          <section>
            <h4>Use when</h4>
            <ul>{active.suitableWhen.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="pattern-gallery__failure">
            <h4>How it becomes theatre</h4>
            <p>{active.failureMode}</p>
          </section>
          <section>
            <h4>The record must retain</h4>
            <ul>{active.recordRequirements.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
        <div className="pattern-gallery__demo">
          <span className="eyebrow">Synthetic example</span>
          <strong>{active.demo.situation}</strong>
          <p>{active.demo.proposedAction}</p>
          <div>{active.demo.evidence.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </article>
    </div>
  )
}
