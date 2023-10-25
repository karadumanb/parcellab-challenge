import dayjs from 'dayjs'
import { priceFormatter } from './price'

describe('price utilities', () => {
  it('should return the formatted price', () => {
    expect(priceFormatter(234.3)).toContain('234,30')
  })
})
