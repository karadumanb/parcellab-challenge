import { render, screen } from '@testing-library/react'
import { testData } from '@/mocks/test-mocks'
import { CheckpointListItem } from './list-item'

const { checkpoint } = testData

describe('Checkpoint List Item', () => {
  function renderComponent() {
    render(<CheckpointListItem checkpoint={checkpoint} />)
  }

  it('Shows the status of the given checkpoint', () => {
    renderComponent()

    screen.getByText(checkpoint.status)
  })

  it('Shows the status_details of the given checkpoint', () => {
    renderComponent()

    screen.getByText(checkpoint.status_details)
  })

  it('Shows the city of the given checkpoint', () => {
    renderComponent()

    screen.getByText(checkpoint.city)
  })

  it('Shows the formatted date of the given checkpoint', () => {
    renderComponent()

    screen.getByText('07.01.2023 21:02')
  })
})
