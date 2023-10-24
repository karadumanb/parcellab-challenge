export function getAddressSummary({ city, country_iso3 }: Checkpoint) {
  return [[city, country_iso3].filter(Boolean).join(', ')]
}
