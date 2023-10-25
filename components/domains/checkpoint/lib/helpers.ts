export function getAddressSummary({ city, country_iso3 }: Checkpoint): string {
  return [city, country_iso3].filter(Boolean).join(', ')
}
