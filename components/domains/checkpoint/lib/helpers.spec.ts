import { testData } from '@/mocks/test-mocks'
import { getAddressSummary } from './helpers'

describe('checkpoint helper', () => {
  it('should return the address summary', () => {
    expect(getAddressSummary(testData.checkpoint)).toBe('Munich, DEU')
  })
})
