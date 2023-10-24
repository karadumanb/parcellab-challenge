const FORMAT_OPTIONS = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}

const CURRENCY_FORMAT_OPTIONS = {
  ...FORMAT_OPTIONS,
  currency: 'EUR',
  style: 'currency'
}

export function priceFormatter(price: number): string {
  if (!price) return '-'

  return price.toLocaleString('de-DE', CURRENCY_FORMAT_OPTIONS)
}
