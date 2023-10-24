import { Metadata } from 'next'
import { OrderDetails } from './order-details'
import { DeliveryDetails } from './delivery-details'
import { ArticleDetails } from './article-details'
import { orders } from '@/mocks'

const order = orders[2]

export const metadata: Metadata = {
  title: 'Order',
  description: 'The order of blabla.'
}

export default function OrderPage() {
  return (
    <>
      <OrderDetails order={order} />
      <DeliveryDetails order={order} />
      <ArticleDetails order={order} />
    </>
  )
}
