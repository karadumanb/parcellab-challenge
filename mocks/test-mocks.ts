const checkpoint: Checkpoint = {
  status_details: 'The goods will be ready for collection on the next working day.',
  meta: {
    pickup_address: 'Kurfürstenplatz 8, 80796 München',
    pickup_address_link:
      'https://www.google.com/maps/place/Deutsche+Post+Filiale+426/@48.1601323,11.5732987,17z/data=!4m13!1m7!3m6!1s0x479e75c476d43137:0x170cb26ab86665fd!2sKurf%C3%BCrstenpl.+8,+80796+M%C3%BCnchen!3b1!8m2!3d48.1601287!4d11.5754874!3m4!1s0x479e7500ee0b5685:0xedf77ddb0bfe2602!8m2!3d48.1601164!4d11.5753654',
    pickup_address_map_url:
      'https://raw.githubusercontent.com/parcelLab/challenge-frontend-engineer/main/map.png'
  },
  event_timestamp: '2023-01-07T20:02:30Z',
  status: 'Ready for collection',
  country_iso3: 'DEU',
  city: 'Munich'
}

const article: Article = {
  articleNo: 'AB30M216',
  articleName: 'Macbook Pro M2 Max 16inch',
  articleImageUrl: 'https://images.unsplash.com/photo-1639249227523-78502e9bb8b7',
  quantity: 1,
  price: 4199.0
}

const order: Order = {
  _id: '3',
  courier: 'ups',
  tracking_number: '74328923203',
  created: '2023-01-05T10:10:30Z',
  updated: '2023-01-07T20:02:30Z',
  checkpoints: [
    checkpoint,
    {
      status_details:
        'Unfortunately, the goods could not be delivered. The goods are beeing forwarded to a pick-up location.',
      event_timestamp: '2023-01-07T18:12:30Z',
      status: 'Failed delivery attempt',
      country_iso3: 'DEU',
      city: 'Munich'
    },
    {
      status_details: 'Your package is loaded and in transit to your area.',
      event_timestamp: '2023-01-06T11:16:30Z',
      status: 'In transit',
      country_iso3: 'DEU',
      city: 'Hamburg'
    },
    {
      status_details: 'Your package was registered in our system by the sender.',
      event_timestamp: '2023-01-05T14:13:30Z',
      status: 'Registered',
      country_iso3: 'DEU',
      city: 'Hamburg'
    }
  ],
  delivery_info: {
    articles: [article],
    orderNo: '0000RTAB3',
    order_date: '2023-01-05',
    recipient: 'Andrej Fritz',
    recipient_notification: 'Andrej',
    email: 'andrej@parcellab.com',
    street: 'Kapellenweg 6',
    city: 'Munich',
    region: 'GER-BY',
    timezone: 'Europe/Berlin',
    announced_delivery_date: '2023-01-07'
  },
  destination_country_iso3: 'Germany',
  zip_code: '81371'
}

const testData = {
  order,
  checkpoint,
  article
}

export { testData }
