import Link from 'next/link'

export function LabFooter() {
  return (
    <footer className="lab-footer">
      <div>
        <p className="eyebrow">Accountability Lab</p>
        <strong>Confidence needs more than confidence scores.</strong>
      </div>
      <div>
        <p>Independent research into confidence, control and responsibility in AI systems.</p>
        <div className="lab-footer__links">
          <Link href="/experiments/approval-pattern-gallery">Begin with Exhibit 01 →</Link>
          <a href="https://www.tonykey.digital" rel="noreferrer" target="_blank">Tony Key portfolio ↗</a>
        </div>
        <div className="lab-footer__legal">
          <span>© 2026 Tony Key</span>
          <span>All organisations, people and operational data shown here are synthetic.</span>
        </div>
      </div>
    </footer>
  )
}
