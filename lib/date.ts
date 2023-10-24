import dayjs from 'dayjs'

type ParsingFormat = 'date' | 'time' | 'datetime'

const parsingFormatOptions: Record<ParsingFormat, string> = {
  date: 'DD.MM.YYYY',
  time: 'HH:mm',
  datetime: 'DD.MM.YYYY HH:mm'
}

export function convertToLocaleDateTime(
  date: dayjs.Dayjs,
  format: ParsingFormat = 'datetime'
): string {
  return date.format(parsingFormatOptions[format])
}
