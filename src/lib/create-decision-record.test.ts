import { describe, expect, it } from 'vitest'
import { scenarios } from '@/src/content/scenarios'
import { createDecisionRecord } from './create-decision-record'

describe('createDecisionRecord', () => {
  it('retains decision-time evidence and human intervention', () => {
    const scenario = scenarios[0]
    const action = scenario.actions[0]
    const record = createDecisionRecord(scenario, action, '11 Jul 2026 · 10:30', 'Cap at £5,000')
    expect(record.scenarioId).toBe(scenario.id)
    expect(record.synthetic).toBe(true)
    expect(record.evidenceSnapshot).toEqual(scenario.evidence)
    expect(record.humanEdit).toBe('Cap at £5,000')
    expect(record.authority).toBe(scenario.authority)
    expect(record.executionStatus).toBe('authorised')
  })
})
