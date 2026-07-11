export const evaluationDimensions = [
  { id: 'authority', name: 'Authority', question: 'Is decision authority explicit and enforced?', weak: 'Anyone can approve', partial: 'Roles are described', strong: 'Limits are enforced at action time' },
  { id: 'evidence', name: 'Evidence', question: 'Can a reviewer inspect relevant evidence and its limits?', weak: 'Only a recommendation', partial: 'Evidence is summarised', strong: 'Evidence and provenance are inspectable' },
  { id: 'intervention', name: 'Intervention', question: 'Can people do more than accept or reject?', weak: 'Binary approval only', partial: 'Escalation is possible', strong: 'Edit, hold, reject and escalate are supported' },
  { id: 'traceability', name: 'Traceability', question: 'Can the decision be reconstructed later?', weak: 'Outcome only', partial: 'Actor and time recorded', strong: 'Proposal, evidence, authority and changes preserved' },
  { id: 'recovery', name: 'Recovery', question: 'Can harmful outcomes be stopped or reversed?', weak: 'No recovery path', partial: 'Manual recovery exists', strong: 'Recovery is designed, timed and owned' },
  { id: 'monitoring', name: 'Monitoring', question: 'Does oversight continue after deployment?', weak: 'No operational view', partial: 'Aggregate metrics exist', strong: 'Exceptions, drift and interventions are reviewable' },
] as const

export type DimensionId = typeof evaluationDimensions[number]['id']
export type EvaluationAnswers = Partial<Record<DimensionId, number>>

export function evaluateAccountability(answers: EvaluationAnswers) {
  const values = Object.values(answers)
  const total = values.reduce((sum, value) => sum + value, 0)
  const max = evaluationDimensions.length * 2
  const score = Math.round((total / max) * 100)
  const weakest = evaluationDimensions.find((dimension) => (answers[dimension.id] ?? 0) === Math.min(...evaluationDimensions.map((item) => answers[item.id] ?? 0)))
  const band = score >= 80 ? 'operationally accountable' : score >= 55 ? 'partially accountable' : 'accountability exposed'
  return { score, band, weakest }
}
