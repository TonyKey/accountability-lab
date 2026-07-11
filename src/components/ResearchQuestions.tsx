import { researchQuestions } from '@/src/content/research-questions'

export function ResearchQuestions() {
  return (
    <div className="questions">
      {researchQuestions.map((item, index) => (
        <article key={item.id}>
          <span>RQ-{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.question}</h3>
          <p>{item.whyItMatters}</p>
        </article>
      ))}
    </div>
  )
}
