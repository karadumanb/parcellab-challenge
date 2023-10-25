import { testData } from '@/mocks/test-mocks'
import { getAddressSummary } from './helpers'

it('should return the address summary', () => {
  expect(getAddressSummary(testData.checkpoint)).toBe('Munich, DEU')
})
