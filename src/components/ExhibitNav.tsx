const items = [
  ['01', 'Autonomy', '#autonomy'],
  ['02', 'Gate anatomy', '#anatomy'],
  ['03', 'Patterns', '#patterns'],
  ['04', 'Workflows', '#workflows'],
  ['05', 'Theatre', '#theatre'],
  ['06', 'Regulation', '#regulatory-horizon'],
  ['07', 'Questions', '#open-questions'],
]

export function ExhibitNav() {
  return (
    <nav className="exhibit-nav" aria-label="Exhibit index">
      <div className="container">
        {items.map(([number, label, href]) => (
          <a key={href} href={href}><span>{number}</span>{label}</a>
        ))}
      </div>
    </nav>
  )
}
