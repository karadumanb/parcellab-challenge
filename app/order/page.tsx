import { Metadata } from 'next'
import { OrderDetails } from './containers/order-details'
import { DeliveryDetails } from './containers/delivery-details'
import { ArticleDetails } from './containers/article-details'
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
