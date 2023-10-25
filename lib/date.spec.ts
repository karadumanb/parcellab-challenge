import dayjs from 'dayjs'

import { convertToLocaleDateTime } from './date'

describe('date utilities', () => {
  it('should return the formatted date time', () => {
    expect(convertToLocaleDateTime(dayjs('2023-01-05T10:10:30Z'))).toBe('05.01.2023 11:10')
  })
})
