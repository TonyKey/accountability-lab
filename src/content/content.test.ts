import { describe, expect, it } from 'vitest'
import { approvalPatterns } from './patterns'
import { regulatorySources } from './regulatory-sources'
import { scenarios } from './scenarios'

describe('research content contracts', () => {
  it('contains eight uniquely identified approval patterns with complete evidence fields', () => {
    expect(approvalPatterns).toHaveLength(8)
    expect(new Set(approvalPatterns.map((pattern) => pattern.id)).size).toBe(8)
    for (const pattern of approvalPatterns) {
      expect(pattern.purpose).toBeTruthy()
      expect(pattern.suitableWhen.length).toBeGreaterThan(1)
      expect(pattern.failureMode).toBeTruthy()
      expect(pattern.recordRequirements.length).toBeGreaterThan(1)
      expect(pattern.demo.evidence.length).toBeGreaterThan(0)
    }
  })

  it('marks every scenario as synthetic and offers at least three human actions', () => {
    for (const scenario of scenarios) {
      expect(scenario.synthetic).toBe(true)
      expect(scenario.actions.length).toBeGreaterThanOrEqual(3)
    }
  })

  it('uses official, dated regulatory sources with design implications and a disclaimer', () => {
    for (const source of regulatorySources) {
      expect(source.url).toMatch(/^https:\/\//)
      expect(source.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(source.jurisdiction).toBeTruthy()
      expect(source.designImplications.length).toBeGreaterThan(0)
      expect(source.disclaimer).toContain('not legal advice')
    }
  })
})
