import Link from 'next/link'

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  return (
    <header className="site-header" data-inverse={inverse}>
      <Link className="site-header__brand" href="/" aria-label="Accountability Lab home">
        <span>Accountability</span>
        <strong>Lab</strong>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/experiments/approval-pattern-gallery">Experiments</Link>
        <Link href="/#studio">Studio</Link>
        <Link href="/#research">Research</Link>
        <Link href="/#about">About</Link>
      </nav>
    </header>
  )
}
