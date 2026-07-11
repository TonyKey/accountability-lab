import { describe, expect, it } from 'vitest'
import { evaluateAccountability } from './evaluate-accountability'

describe('evaluateAccountability', () => {
  it('scores a complete strong assessment at 100', () => {
    expect(evaluateAccountability({ authority: 2, evidence: 2, intervention: 2, traceability: 2, recovery: 2, monitoring: 2 }).score).toBe(100)
  })

  it('identifies a weakest capability', () => {
    expect(evaluateAccountability({ authority: 2, evidence: 0, intervention: 1, traceability: 1, recovery: 1, monitoring: 1 }).weakest?.id).toBe('evidence')
  })
})
