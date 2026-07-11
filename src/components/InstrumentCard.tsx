import Link from 'next/link'

type InstrumentCardProps = {
  index: string
  title: string
  question: string
  description: string
  href: string
  status?: string
}

export function InstrumentCard({ index, title, question, description, href, status = 'Open instrument' }: InstrumentCardProps) {
  return (
    <Link className="instrument-card" href={href}>
      <div className="instrument-card__meta"><span>{index}</span><span>{status}</span></div>
      <div className="instrument-card__signal" aria-hidden="true"><i /><i /><i /><i /></div>
      <p>{question}</p>
      <h3>{title}</h3>
      <span className="instrument-card__description">{description}</span>
      <strong>Enter →</strong>
    </Link>
  )
}
