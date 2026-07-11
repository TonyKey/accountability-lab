'use client'

import { useState } from 'react'
import { scenarios } from '@/src/content/scenarios'
import type { DecisionRecord } from '@/src/content/types'
import { createDecisionRecord } from '@/src/lib/create-decision-record'
import { DecisionRecordExplorer } from './DecisionRecordExplorer'

export function WorkflowDemonstrator() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id)
  const [record, setRecord] = useState<DecisionRecord | null>(null)
  const scenario = scenarios.find((item) => item.id === scenarioId) ?? scenarios[0]

  const chooseScenario = (id: string) => {
    setScenarioId(id)
    setRecord(null)
  }

  const decide = (actionId: string) => {
    const action = scenario.actions.find((item) => item.id === actionId)
    if (!action || record) return
    const humanEdit = action.kind === 'edit' ? 'Human revised the proposal to remain within authorised limits.' : undefined
    setRecord(createDecisionRecord(scenario, action, '11 Jul 2026 · exhibit session', humanEdit))
  }

  return (
    <div className="workflow">
      <div className="workflow__switcher" aria-label="Synthetic workflow scenarios">
        {scenarios.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={scenario.id === item.id} onClick={() => chooseScenario(item.id)}>
            <span>0{index + 1}</span>{item.title}
          </button>
        ))}
      </div>
      <div className="workflow__grid">
        <article className="decision-card">
          <div className="decision-card__head">
            <span className="decision-card__risk">{scenario.risk} consequence</span>
            <span className="mono">Synthetic · {scenario.organisation}</span>
          </div>
          <p className="eyebrow">AI-prepared action</p>
          <h3>{scenario.proposal}</h3>
          <p className="decision-card__context">{scenario.context}</p>
          <div className="decision-card__facts">
            <section><h4>Evidence</h4><ul>{scenario.evidence.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section><h4>Uncertainty</h4><p>{scenario.uncertainty}</p></section>
            <section><h4>Authority</h4><p>{scenario.authority}</p></section>
            <section><h4>Reversibility</h4><p>{scenario.reversibility}</p></section>
          </div>
          <div className="decision-card__actions">
            {scenario.actions.map((action) => (
              <button key={action.id} type="button" disabled={Boolean(record)} data-kind={action.kind} onClick={() => decide(action.id)}>
                {action.label}
              </button>
            ))}
            {record ? <button type="button" className="reset" onClick={() => setRecord(null)}>Reset decision</button> : null}
          </div>
        </article>
        <DecisionRecordExplorer record={record} />
      </div>
    </div>
  )
}
