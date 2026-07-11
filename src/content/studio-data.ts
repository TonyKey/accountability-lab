export type StudioDecision = {
  id: string
  title: string
  organisation: string
  status: 'held' | 'authorised' | 'escalated' | 'rejected'
  risk: 'routine' | 'elevated' | 'consequential'
  proposal: string
  model: string
  confidence: string
  evidence: { label: string; value: string; state: 'verified' | 'inferred' | 'missing' }[]
  authority: string
  intervention: string
  result: string
  trace: { time: string; actor: string; event: string }[]
}

export const studioDecisions: StudioDecision[] = [
  {
    id: 'ADR-2048-A7', title: 'The almost-matching payment', organisation: 'Northstar Components', status: 'held', risk: 'consequential',
    proposal: 'Release an £84,200 supplier payment after a recent bank-detail change.', model: 'Operations agent 4.2', confidence: '0.94',
    evidence: [
      { label: 'Invoice and purchase order', value: 'Exact match', state: 'verified' },
      { label: 'Receipt of goods', value: 'Confirmed 09:14', state: 'verified' },
      { label: 'Bank-detail ownership', value: 'Not independently verified', state: 'missing' },
      { label: 'Delay consequence', value: 'Production disruption likely', state: 'inferred' },
    ],
    authority: 'Treasury and procurement must independently confirm any change to beneficiary details.',
    intervention: 'Payment held by Maya Chen. Two-person review requested.',
    result: 'No funds released. Supplier verification remains open.',
    trace: [
      { time: '09:13:42', actor: 'Operations agent', event: 'Proposed payment release' },
      { time: '09:13:44', actor: 'Policy gate', event: 'Detected changed beneficiary details' },
      { time: '09:18:07', actor: 'Maya Chen', event: 'Inspected invoice, receipt and change history' },
      { time: '09:20:11', actor: 'Maya Chen', event: 'Held payment; requested independent confirmation' },
    ],
  },
  {
    id: 'ADR-2047-F2', title: 'The generous apology', organisation: 'Cedar & Tide', status: 'escalated', risk: 'elevated',
    proposal: 'Issue a full £6,400 refund and waive the customer’s next invoice.', model: 'Service recovery agent 2.8', confidence: '0.78',
    evidence: [
      { label: 'Service outage', value: '12h 07m confirmed', state: 'verified' },
      { label: 'Contractual credit', value: '30% of invoice', state: 'verified' },
      { label: 'Churn probability', value: '61%', state: 'inferred' },
      { label: 'Customer intent', value: 'No cancellation request', state: 'verified' },
    ],
    authority: 'Account directors may approve credits up to £5,000.',
    intervention: 'Rosa Ahmed escalated the proposed exception to the commercial lead.',
    result: 'Credit remains pending. No customer communication sent.',
    trace: [
      { time: '08:42:10', actor: 'Recovery agent', event: 'Calculated compensation proposal' },
      { time: '08:42:11', actor: 'Authority gate', event: 'Found proposed value above reviewer limit' },
      { time: '08:49:33', actor: 'Rosa Ahmed', event: 'Reviewed churn evidence and contract' },
      { time: '08:51:02', actor: 'Rosa Ahmed', event: 'Escalated with recommendation to cap credit' },
    ],
  },
  {
    id: 'ADR-2046-C9', title: 'The duplicate account', organisation: 'Harbour Health', status: 'authorised', risk: 'routine',
    proposal: 'Merge two customer profiles with matching verified identifiers.', model: 'Identity resolution 1.9', confidence: '0.99',
    evidence: [
      { label: 'Verified identifiers', value: '3 of 3 match', state: 'verified' },
      { label: 'Conflicting fields', value: 'None', state: 'verified' },
      { label: 'Downstream records', value: '14 references mapped', state: 'verified' },
      { label: 'Recovery path', value: 'Snapshot retained 30 days', state: 'verified' },
    ],
    authority: 'Customer-data stewards may approve reversible profile merges.',
    intervention: 'Auto-authorised within policy. Sampled by Evan Brooks.',
    result: 'Profiles merged. Recovery snapshot retained.',
    trace: [
      { time: '08:06:19', actor: 'Resolution agent', event: 'Identified duplicate profiles' },
      { time: '08:06:20', actor: 'Policy gate', event: 'Verified authority, identifiers and recovery path' },
      { time: '08:06:22', actor: 'Resolution agent', event: 'Merged profiles and retained snapshot' },
      { time: '10:14:55', actor: 'Evan Brooks', event: 'Sample review completed; no exception found' },
    ],
  },
]

export type OversightItem = {
  id: string
  title: string
  domain: string
  urgency: string
  signal: string
  consequence: string
  recommendation: string
  state: 'new' | 'reviewing' | 'resolved'
}

export const oversightItems: OversightItem[] = [
  { id: 'OV-119', title: 'Beneficiary changed before payment', domain: 'Finance', urgency: 'Immediate', signal: 'Policy breach', consequence: '£84,200 irreversible transfer', recommendation: 'Hold and obtain two independent confirmations.', state: 'new' },
  { id: 'OV-118', title: 'Refund exceptions rising', domain: 'Customer', urgency: 'Today', signal: '+42% baseline', consequence: 'Authority limits exceeded in 7 cases', recommendation: 'Inspect the shared evidence source and reviewer distribution.', state: 'reviewing' },
  { id: 'OV-117', title: 'Campaign claims lack review', domain: 'Marketing', urgency: '2 hours', signal: 'Missing authority', consequence: '1.2m recipients', recommendation: 'Pause publication until commercial and legal review.', state: 'new' },
  { id: 'OV-116', title: 'Duplicate resolution stable', domain: 'Data', urgency: 'Sample', signal: 'Within tolerance', consequence: '14 reversible profile merges', recommendation: 'Review one sampled record; no queue-wide action required.', state: 'resolved' },
]
