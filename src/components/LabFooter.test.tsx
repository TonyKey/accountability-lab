import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LabFooter } from './LabFooter'

describe('LabFooter', () => {
  it('shows ownership and links to Tony Key’s portfolio', () => {
    const { container } = render(<LabFooter />)

    expect(screen.getByText('© 2026 Tony Key')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Tony Key portfolio ↗' })).toHaveAttribute('href', 'https://www.tonykey.digital')
    expect(container.querySelector('footer')).not.toHaveAttribute('id', 'about')
  })
})
