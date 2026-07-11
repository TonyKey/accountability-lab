import { regulatorySources } from '@/src/content/regulatory-sources'
import { SourceLink } from './SourceLink'

export function RegulatoryHorizon() {
  return (
    <div>
      <div className="research-disclaimer">
        <span>Important boundary</span>
        <p>Educational design research only. This exhibit is not legal advice, a compliance assessment or a claim that any interface pattern guarantees compliance.</p>
      </div>
      <div className="regulation-grid">
        {regulatorySources.map((source) => (
          <article key={source.id}>
            <div className="regulation-grid__meta"><span>{source.jurisdiction}</span><span>Checked {source.checkedAt}</span></div>
            <h3>{source.title}</h3>
            <div className="regulation-grid__themes">{source.themes.map((theme) => <span key={theme}>{theme}</span>)}</div>
            <h4>Questions for the interface</h4>
            <ul>{source.designImplications.map((item) => <li key={item}>{item}</li>)}</ul>
            <SourceLink href={source.url}>Read the official source</SourceLink>
          </article>
        ))}
      </div>
    </div>
  )
}
