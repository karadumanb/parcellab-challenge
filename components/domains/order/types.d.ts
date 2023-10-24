declare interface Order {
  _id: string
  courier: string
  tracking_number: string
  created: string
  updated: string
  checkpoints: Checkpoint[]
  delivery_info: DeliveryInfo
  destination_country_iso3: string
  zip_code: string
}

declare interface DeliveryInfo {
  articles: Article[]
  orderNo: string
  order_date: string
  recipient: string
  recipient_notification: string
  email: string
  street: string
  city: string
  region: string
  timezone: string
  announced_delivery_date: string
}
