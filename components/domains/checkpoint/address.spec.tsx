import { render, screen } from '@testing-library/react'
import { testData } from '@/mocks/test-mocks'
import { CheckpointAddress } from './address'

const { checkpoint } = testData

describe('Checkpoint Address', () => {
  function renderComponent() {
    render(<CheckpointAddress checkpoint={checkpoint} />)
  }

  it('Shows the address summary of the given checkpoint', () => {
    renderComponent()

    screen.getByText('Munich, DEU')
  })
})
