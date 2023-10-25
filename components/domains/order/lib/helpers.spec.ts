import { testData } from '@/mocks/test-mocks'

import { getLatestCheckPoint, getOrderProgress } from './helpers'

describe('order helper', () => {
  it('should return the first checkpoint as the latest checkpoint', () => {
    expect(getLatestCheckPoint(testData.order)).toBe(testData.order.checkpoints[0])
  })

  it('should return 20% when there is 1 checkpoint(1 out of 5)', () => {
    expect(getOrderProgress({ ...testData.order, checkpoints: [testData.checkpoint] })).toBe(20)
  })
})
