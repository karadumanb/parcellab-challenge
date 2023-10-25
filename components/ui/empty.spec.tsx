import { render } from '@testing-library/react'
import React from 'react'
import { Empty } from './empty'

describe('Empty', () => {
  it('snapshot test', () => {
    const { asFragment } = render(<Empty label="Nothing here." />)

    expect(asFragment()).toMatchSnapshot()
  })
})
