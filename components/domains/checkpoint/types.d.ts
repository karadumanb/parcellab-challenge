declare interface Checkpoint {
  status_details: string
  event_timestamp: string
  status: string
  country_iso3: string
  city: string
  meta?: CheckpointMeta
}

declare interface CheckpointMeta {
  pickup_address: string
  pickup_address_link: string
  pickup_address_map_url: string
}
