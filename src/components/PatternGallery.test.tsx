import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PatternGallery } from './PatternGallery'

describe('PatternGallery', () => {
  it('updates the exhibit when a pattern is selected', () => {
    render(<PatternGallery />)
    const control = screen.getByRole('button', { name: '02 Review with evidence' })
    fireEvent.click(control)
    expect(control).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(/Make review about the decision/)).toBeInTheDocument()
    expect(screen.getByText(/Evidence volume creates/)).toBeInTheDocument()
    expect(screen.getByText('Evidence snapshot')).toBeInTheDocument()
  })
})
