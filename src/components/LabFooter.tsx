import Link from 'next/link'

export function LabFooter() {
  return (
    <footer className="lab-footer" id="about">
      <div>
        <p className="eyebrow">Accountability Lab</p>
        <strong>Confidence needs more than confidence scores.</strong>
      </div>
      <div>
        <p>Independent research by Anthony Key into confidence, control and responsibility in AI systems.</p>
        <p className="lab-footer__note">All organisations, people and operational data shown here are synthetic.</p>
        <Link href="/experiments/approval-pattern-gallery">Begin with Exhibit 01 →</Link>
      </div>
    </footer>
  )
}
