import { SectionHeader } from './SectionHeader'

const stages = [
  ['Diagnose', 'The system identifies the operational constraint.'],
  ['Dry run', 'The proposed change is tested without committing it.'],
  ['Propose', 'The smallest validated intervention is surfaced.'],
  ['Decide', 'A human approves, edits, rejects or escalates.'],
  ['Act', 'Only the authorised change reaches the live system.'],
  ['Record', 'Evidence and ownership survive the moment.'],
]

export function OriginSection() {
  return (
    <section className="section origin" id="origin" aria-labelledby="origin-title">
      <div className="container origin__grid">
        <div>
          <SectionHeader
            eyebrow="Origin artefact · TX-1 Terminal Explorer"
            title="A useful loop. An unresolved question."
            body="TX-1 explored an AI agent diagnosing a failed optimisation, validating a fix, and stopping before changing operational data. The gate worked—but it exposed a larger design problem."
            id="origin-title"
          />
          <p className="origin__question">
            What must a person know before an AI is allowed to change the world?
          </p>
        </div>
        <div className="terminal" aria-label="The six-stage TX-1 accountability loop">
          <div className="terminal__bar">
            <span>TX-1 / archived pattern</span>
            <span>human gate: armed</span>
          </div>
          <div className="terminal__body">
            {stages.map(([name, detail], index) => (
              <div className="terminal__line" key={name}>
                <span className="terminal__n">0{index + 1}</span>
                <span>
                  {name}
                  <span className="terminal__meta">{detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
