import { render } from '@testing-library/react'
import React from 'react'
import { Button } from './button'

describe('Button', () => {
  it('default button snapshot', () => {
    const { asFragment } = render(<Button>Default Button</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('secondary button snapshot', () => {
    const { asFragment } = render(<Button variant="secondary">Secondary Button</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('as child button snapshot', () => {
    const { asFragment } = render(
      <Button asChild>
        <span>Child Button</span>
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
