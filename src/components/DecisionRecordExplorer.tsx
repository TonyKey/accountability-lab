import type { DecisionRecord } from '@/src/content/types'

export function DecisionRecordExplorer({ record }: { record: DecisionRecord | null }) {
  if (!record) {
    return (
      <aside className="record record--empty">
        <p className="eyebrow">Decision record</p>
        <h3>Nothing has been decided yet.</h3>
        <p>Choose a human action. The result will show what survives after the interface disappears.</p>
      </aside>
    )
  }

  return (
    <aside className="record" aria-live="polite">
      <div className="record__head">
        <div>
          <p className="eyebrow">Decision record · {record.id}</p>
          <h3>{record.actionLabel}</h3>
        </div>
        <span className={`record__status record__status--${record.executionStatus}`}>{record.executionStatus}</span>
      </div>
      <dl>
        <div><dt>What was proposed</dt><dd>{record.proposal}</dd></div>
        <div><dt>Evidence at decision time</dt><dd><ul>{record.evidenceSnapshot.map((item) => <li key={item}>{item}</li>)}</ul></dd></div>
        {record.humanEdit ? <div><dt>Human change</dt><dd>{record.humanEdit}</dd></div> : null}
        <div><dt>Authority available</dt><dd>{record.authority}</dd></div>
        <div><dt>Recovery</dt><dd>{record.reversibility}</dd></div>
        <div><dt>Operational result</dt><dd>{record.consequence}</dd></div>
        <div><dt>Recorded</dt><dd>{record.timestampLabel} · synthetic exhibit</dd></div>
      </dl>
    </aside>
  )
}
