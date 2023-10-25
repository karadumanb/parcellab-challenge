import { render, screen } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'

import { OrderForm } from './form'

const orderNo = 'ORDER123'
const zip_code = '4321'

describe('Order Form', () => {
  const onSubmit = jest.fn((val) => val)

  it('Should NOT submit if order number is missing', async () => {
    renderComponent()

    const user = userEvent.setup()

    await typeZipCode(user)
    await submit(user)

    screen.getByText('Order number is required')

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('Should NOT submit if zip code is missing', async () => {
    renderComponent()

    const user = userEvent.setup()

    await typeOrderNumber(user)
    await submit(user)

    screen.getByText('Zip Code is required')

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('Submits the form with given values', async () => {
    renderComponent()

    const user = userEvent.setup()

    await typeOrderNumber(user)
    await typeZipCode(user)

    await submit(user)

    expect(onSubmit).toBeCalledWith({ orderNo, zip_code })
  })

  function renderComponent() {
    render(<OrderForm onSubmit={onSubmit} />)
  }

  async function submit(user: UserEvent) {
    await user.click(screen.getByText('Sign In'))
  }

  async function typeOrderNumber(user: UserEvent) {
    await user.type(screen.getByLabelText('Order Number'), orderNo)
  }

  async function typeZipCode(user: UserEvent) {
    await user.type(screen.getByLabelText('Zip Code'), zip_code)
  }
})
