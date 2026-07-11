'use client'

import { useState } from 'react'

const views = {
  weak: {
    label: 'Weak gate', title: 'Approve recommendation?', detail: 'Confidence 94% · generated 4 seconds ago',
    checks: ['No evidence snapshot', 'No visible alternative', 'Reject hidden in a menu', 'Reviewer authority unknown'],
    verdict: 'The interface captures a click. It does not establish meaningful oversight.',
  },
  meaningful: {
    label: 'Meaningful gate', title: 'Release £84,200 payment exception?', detail: 'Bank details changed 48 hours ago · transfer irreversible',
    checks: ['Evidence and gaps visible', 'Hold and escalate are equal options', 'Authority mismatch exposed', 'Decision record previewed'],
    verdict: 'The interface helps the right person make—and later defend—a bounded decision.',
  },
}

export function ApprovalTheatre() {
  const [mode, setMode] = useState<keyof typeof views>('weak')
  const view = views[mode]

  return (
    <div className="theatre">
      <div className="theatre__switch" aria-label="Compare approval quality">
        <button type="button" aria-pressed={mode === 'weak'} onClick={() => setMode('weak')}>Approval theatre</button>
        <button type="button" aria-pressed={mode === 'meaningful'} onClick={() => setMode('meaningful')}>Meaningful oversight</button>
      </div>
      <div className="theatre__stage" data-mode={mode}>
        <div className="theatre__card">
          <p className="eyebrow">{view.label}</p>
          <h3>{view.title}</h3>
          <p>{view.detail}</p>
          <div className="theatre__buttons" aria-label="Illustrative decision controls">
            <button type="button" disabled>Approve</button>
            <button type="button" disabled>{mode === 'weak' ? 'More' : 'Hold & escalate'}</button>
          </div>
        </div>
        <div className="theatre__diagnosis">
          <p className="eyebrow">Interface diagnosis</p>
          <ul>{view.checks.map((item) => <li key={item}>{item}</li>)}</ul>
          <strong>{view.verdict}</strong>
        </div>
      </div>
    </div>
  )
}
