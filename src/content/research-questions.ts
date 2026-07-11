import type { ResearchQuestion } from './types'

export const researchQuestions: ResearchQuestion[] = [
  { id: 'fatigue', question: 'When does oversight become queue-clearing?', whyItMatters: 'A gate can increase nominal control while reducing the attention given to each decision.' },
  { id: 'authority', question: 'How should an interface reveal that a reviewer lacks authority?', whyItMatters: 'Responsibility without authority produces accountability theatre.' },
  { id: 'confidence', question: 'What should replace the single confidence score?', whyItMatters: 'Uncertainty, consequence and reversibility are different things and should not collapse into one number.' },
  { id: 'outcomes', question: 'How do decision records learn from later outcomes?', whyItMatters: 'Accountability must extend beyond the approval moment into monitoring and correction.' },
]
