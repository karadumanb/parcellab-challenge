import { render, screen } from '@testing-library/react'
import { testData } from '@/mocks/test-mocks'
import { CheckpointMap } from './map'

const { checkpoint } = testData

describe('Checkpoint Map', () => {
  function renderComponent() {
    render(<CheckpointMap checkpoint={checkpoint} />)
  }

  it("Shows the image of the given checkpoint's address", () => {
    renderComponent()

    expect(screen.getByAltText('map').getAttribute('src')).toContain('raw.githubusercontent.com')
  })

  it('Renders the anchor tag with correct link', () => {
    renderComponent()

    expect(screen.getByTestId('map-link').getAttribute('href')).toContain('www.google.com/map')
  })
})
