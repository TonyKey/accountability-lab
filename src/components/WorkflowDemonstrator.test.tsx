import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WorkflowDemonstrator } from './WorkflowDemonstrator'

describe('WorkflowDemonstrator', () => {
  it('turns a human action into a decision record and supports reset', () => {
    render(<WorkflowDemonstrator />)
    fireEvent.click(screen.getByRole('button', { name: 'Edit compensation' }))
    expect(screen.getByText('Human change')).toBeInTheDocument()
    expect(screen.getByText(/revised the proposal/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Reset decision' }))
    expect(screen.getByText('Nothing has been decided yet.')).toBeInTheDocument()
  })
})
