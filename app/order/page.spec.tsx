import { render, screen } from '@testing-library/react'
import OrderPage from './page'
import { testData } from '@/mocks/test-mocks'

const axios = require('axios')
jest.mock('axios')

test('Order page', async () => {
  const orderNo = 'Order4321'
  const zip_code = '1234'

  axios.get.mockResolvedValue({ data: testData.order })

  const jsx = await OrderPage({ searchParams: { orderNo, zip_code } })
  render(jsx)

  expect(screen.getAllByText(testData.checkpoint.status).length).toBeGreaterThanOrEqual(1)
  screen.getByText(testData.article.articleName)
})
