import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSequence } from './HeroSequence'

describe('HeroSequence', () => {
  it('moves from proposed to paused and reveals the central lesson', () => {
    render(<HeroSequence />)
    expect(screen.getByText(/Action proposed/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /Pause the action/ }))
    expect(screen.getByText(/Action paused/)).toBeInTheDocument()
    expect(screen.getByText('A button is not accountability.')).toBeInTheDocument()
  })
})
