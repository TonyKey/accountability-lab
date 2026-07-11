'use client'

import { useState } from 'react'

const levels = [
  { id: 'observe', n: '01', name: 'Observe', example: 'Read, classify and surface signals.', gate: 'No action gate. Monitor data access and interpretation quality.' },
  { id: 'recommend', n: '02', name: 'Recommend', example: 'Suggest a next step to a human owner.', gate: 'Show evidence, uncertainty and alternatives.' },
  { id: 'prepare', n: '03', name: 'Prepare', example: 'Draft the message, payment or configuration.', gate: 'Make the proposed action inspectable and editable.' },
  { id: 'reversible', n: '04', name: 'Act reversibly', example: 'Run a bounded change with tested rollback.', gate: 'Monitor outcomes; make undo real, visible and time-bound.' },
  { id: 'consequential', n: '05', name: 'Act consequentially', example: 'Affect money, customers, access or employment.', gate: 'Require appropriate authority and decision-relevant context.' },
  { id: 'irreversible', n: '06', name: 'Act irreversibly', example: 'Release funds, publish widely or delete permanently.', gate: 'Use independent confirmation, escalation and a durable record.' },
]

export function AutonomyLadder() {
  const [active, setActive] = useState(levels[2])

  return (
    <div className="autonomy">
      <div className="autonomy__levels" aria-label="Levels of AI autonomy">
        {levels.map((level) => (
          <button
            className="autonomy__level"
            data-active={active.id === level.id}
            key={level.id}
            type="button"
            aria-pressed={active.id === level.id}
            onClick={() => setActive(level)}
          >
            <span>{level.n}</span>
            <strong>{level.name}</strong>
          </button>
        ))}
      </div>
      <div className="autonomy__detail" aria-live="polite">
        <p className="eyebrow">Selected autonomy · {active.n}</p>
        <h3>{active.name}</h3>
        <p>{active.example}</p>
        <div>
          <span>Oversight implication</span>
          <strong>{active.gate}</strong>
        </div>
      </div>
    </div>
  )
}
