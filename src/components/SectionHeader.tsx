type SectionHeaderProps = {
  eyebrow: string
  title: string
  body?: string
  id: string
}

export function SectionHeader({ eyebrow, title, body, id }: SectionHeaderProps) {
  return (
    <header>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-title" id={id}>{title}</h2>
      {body ? <p className="lead measure">{body}</p> : null}
    </header>
  )
}
