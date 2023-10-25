import { render } from '@testing-library/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

describe('Card', () => {
  it('snapshot tests', () => {
    const { asFragment } = render(
      <Card>
        <CardHeader>
          Header
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
