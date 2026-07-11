import type { RegulatorySource } from './types'

const disclaimer = 'Educational design research only; this is not legal advice or a compliance assessment.'

export const regulatorySources: RegulatorySource[] = [
  {
    id: 'eu-ai-act', jurisdiction: 'European Union', title: 'EU AI Act — regulatory framework for AI',
    url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai', checkedAt: '2026-07-11',
    themes: ['Human oversight', 'Activity logging', 'Traceability', 'Documentation', 'Monitoring'],
    designImplications: ['Can the assigned person actually exercise oversight?', 'Can a later reviewer reconstruct the action and its context?'],
    disclaimer,
  },
  {
    id: 'uk-principles', jurisdiction: 'United Kingdom', title: 'Implementing the UK AI regulatory principles',
    url: 'https://www.gov.uk/government/publications/implementing-the-uks-ai-regulatory-principles-initial-guidance-for-regulators/implementing-the-uk-ai-regulatory-principles-initial-guidance-for-regulators', checkedAt: '2026-07-11',
    themes: ['Transparency', 'Accountability and governance', 'Contestability', 'Redress'],
    designImplications: ['Who owns the decision?', 'How can an affected person challenge or correct an outcome?'],
    disclaimer,
  },
  {
    id: 'nist-ai-rmf', jurisdiction: 'United States / voluntary framework', title: 'NIST AI Risk Management Framework',
    url: 'https://airc.nist.gov/airmf-resources/airmf/', checkedAt: '2026-07-11',
    themes: ['Govern', 'Map', 'Measure', 'Manage', 'Human-AI roles'],
    designImplications: ['Are responsibilities differentiated and documented?', 'Does operational evidence improve the control over time?'],
    disclaimer,
  },
]
