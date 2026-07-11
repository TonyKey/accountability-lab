export type RiskLevel = 'routine' | 'elevated' | 'consequential'

export type PatternDemo = {
  situation: string
  proposedAction: string
  evidence: string[]
}

export type ApprovalPattern = {
  id: string
  index: string
  name: string
  summary: string
  purpose: string
  suitableWhen: string[]
  failureMode: string
  recordRequirements: string[]
  demo: PatternDemo
}

export type ScenarioAction = {
  id: string
  label: string
  kind: 'approve' | 'edit' | 'reject' | 'escalate'
  consequence: string
}

export type Scenario = {
  id: string
  title: string
  organisation: string
  synthetic: true
  risk: RiskLevel
  context: string
  proposal: string
  evidence: string[]
  uncertainty: string
  reversibility: string
  authority: string
  actions: ScenarioAction[]
}

export type DecisionRecord = {
  id: string
  scenarioId: string
  synthetic: true
  proposal: string
  evidenceSnapshot: string[]
  decision: ScenarioAction['kind']
  actionLabel: string
  humanEdit?: string
  authority: string
  reversibility: string
  consequence: string
  timestampLabel: string
  executionStatus: 'held' | 'authorised' | 'rejected' | 'escalated'
}

export type RegulatorySource = {
  id: string
  jurisdiction: string
  title: string
  url: string
  checkedAt: string
  themes: string[]
  designImplications: string[]
  disclaimer: string
}

export type ResearchQuestion = {
  id: string
  question: string
  whyItMatters: string
}
