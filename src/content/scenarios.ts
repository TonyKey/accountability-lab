import type { Scenario } from './types'

export const scenarios: Scenario[] = [
  {
    id: 'service-recovery', title: 'The generous apology', organisation: 'Cedar & Tide', synthetic: true,
    risk: 'elevated', context: 'A major account experienced a twelve-hour service outage.',
    proposal: 'Issue a full £6,400 refund and waive the customer’s next invoice.',
    evidence: ['Contractual service credit: 30%', 'Account value: £186k annually', 'Root cause confirmed', 'Customer has not requested cancellation'],
    uncertainty: 'Future churn risk is inferred from three previous cases.',
    reversibility: 'Credit can be cancelled before finance posts it at 17:00.',
    authority: 'Account directors may approve up to £5,000.',
    actions: [
      { id: 'edit', label: 'Edit compensation', kind: 'edit', consequence: 'A revised amount is validated against authority before release.' },
      { id: 'reject', label: 'Reject proposal', kind: 'reject', consequence: 'No credit is issued; the case returns to the account team.' },
      { id: 'escalate', label: 'Escalate to commercial lead', kind: 'escalate', consequence: 'The evidence and proposal move to an authorised reviewer.' },
    ],
  },
  {
    id: 'payment-exception', title: 'The almost-matching payment', organisation: 'Northstar Components', synthetic: true,
    risk: 'consequential', context: 'A critical supplier invoice is due today, but its bank details changed two days ago.',
    proposal: 'Release the £84,200 payment to avoid a production delay.',
    evidence: ['PO and invoice match', 'Receiving confirmed', 'Bank change unverified', 'Supplier contact email also changed'],
    uncertainty: 'The system cannot confirm whether the supplier initiated the bank change.',
    reversibility: 'The transfer is effectively irreversible after release.',
    authority: 'Treasury and procurement must independently confirm bank changes.',
    actions: [
      { id: 'reject', label: 'Hold payment', kind: 'reject', consequence: 'Payment remains blocked pending independent verification.' },
      { id: 'escalate', label: 'Start two-person review', kind: 'escalate', consequence: 'Treasury and procurement receive separate review requests.' },
      { id: 'approve', label: 'Approve anyway', kind: 'approve', consequence: 'The irreversible payment is released with an authority exception recorded.' },
    ],
  },
  {
    id: 'campaign-change', title: 'The fast reaction', organisation: 'Kindred Mobile', synthetic: true,
    risk: 'elevated', context: 'An AI detects a competitor price cut and prepares a same-day public response.',
    proposal: 'Publish a campaign promising to beat any competitor price for twelve months.',
    evidence: ['Competitor page captured', 'Margin impact modelled at −7%', 'Terms not reviewed', 'Campaign reaches 1.2m subscribers'],
    uncertainty: 'Competitor terms may limit the apparent price reduction.',
    reversibility: 'The post can be removed, but screenshots and customer expectations remain.',
    authority: 'Pricing commitments require commercial and legal approval.',
    actions: [
      { id: 'edit', label: 'Edit to a non-price response', kind: 'edit', consequence: 'A revised draft avoids an unreviewed pricing promise.' },
      { id: 'reject', label: 'Reject reaction', kind: 'reject', consequence: 'The campaign remains unchanged.' },
      { id: 'escalate', label: 'Request commercial review', kind: 'escalate', consequence: 'The evidence and reach estimate go to commercial and legal owners.' },
    ],
  },
]
