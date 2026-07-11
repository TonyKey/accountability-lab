'use client'

import { useState } from 'react'
import { evaluateAccountability, evaluationDimensions, type DimensionId, type EvaluationAnswers } from '@/src/lib/evaluate-accountability'

const levels = ['weak', 'partial', 'strong'] as const

export function AccountabilityEvalKit() {
  const [answers, setAnswers] = useState<EvaluationAnswers>({})
  const completed = Object.keys(answers).length
  const result = evaluateAccountability(answers)
  const setAnswer = (id: DimensionId, score: number) => setAnswers((current) => ({ ...current, [id]: score }))

  return (
    <div className="eval-kit">
      <aside className="eval-kit__rail">
        <p className="eyebrow">Assessment progress</p>
        <strong>{completed}<span>/06</span></strong>
        <div className="eval-kit__progress"><i style={{ width: `${(completed / 6) * 100}%` }} /></div>
        <ol>{evaluationDimensions.map((dimension, index) => <li key={dimension.id} data-complete={answers[dimension.id] !== undefined}><span>{String(index + 1).padStart(2, '0')}</span>{dimension.name}</li>)}</ol>
        <button type="button" onClick={() => setAnswers({})}>Reset assessment</button>
      </aside>
      <section className="eval-kit__questions">
        {evaluationDimensions.map((dimension, index) => <fieldset key={dimension.id}>
          <legend><span>{String(index + 1).padStart(2, '0')} · {dimension.name}</span>{dimension.question}</legend>
          <div>{levels.map((level, score) => <button key={level} type="button" aria-pressed={answers[dimension.id] === score} onClick={() => setAnswer(dimension.id, score)}><span>{level}</span><strong>{dimension[level]}</strong><i>{score}</i></button>)}</div>
        </fieldset>)}
      </section>
      <aside className="eval-kit__result" aria-live="polite" data-ready={completed === 6}>
        <p className="eyebrow">Accountability reading</p>
        {completed < 6 ? <><strong>—</strong><h2>Assessment incomplete</h2><p>Choose the statement that most closely describes the workflow in each dimension.</p></> : <>
          <strong>{result.score}<span>/100</span></strong><h2>{result.band}</h2>
          <p>The score is a conversation instrument, not a compliance certification.</p>
          <div><span>Weakest capability</span><b>{result.weakest?.name}</b><p>{result.weakest ? `Start by improving ${result.weakest.name.toLowerCase()}; the accountability chain is constrained by its weakest operational link.` : ''}</p></div>
          <button type="button" onClick={() => window.print()}>Print assessment</button>
        </>}
      </aside>
    </div>
  )
}
