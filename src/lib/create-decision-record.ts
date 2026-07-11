import type { DecisionRecord, Scenario, ScenarioAction } from '@/src/content/types'

export function createDecisionRecord(
  scenario: Scenario,
  action: ScenarioAction,
  timestampLabel: string,
  humanEdit?: string,
): DecisionRecord {
  const executionStatus: DecisionRecord['executionStatus'] =
    action.kind === 'approve' || action.kind === 'edit'
      ? 'authorised'
      : action.kind === 'reject'
        ? 'rejected'
        : 'escalated'

  return {
    id: `DR-${scenario.id.toUpperCase()}`,
    scenarioId: scenario.id,
    synthetic: true,
    proposal: scenario.proposal,
    evidenceSnapshot: [...scenario.evidence],
    decision: action.kind,
    actionLabel: action.label,
    humanEdit,
    authority: scenario.authority,
    reversibility: scenario.reversibility,
    consequence: action.consequence,
    timestampLabel,
    executionStatus,
  }
}
