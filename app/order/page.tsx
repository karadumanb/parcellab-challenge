import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { ArticleDetails } from './containers/article-details'
import { DeliveryDetails } from './containers/delivery-details'
import { OrderDetails } from './containers/order-details'
import { axios } from '@/lib/axios'
import { AxiosError } from 'axios'

export const metadata: Metadata = {
  title: 'Order',
  description: 'The order details.'
}

async function getData(query: string) {
  try {
    const res = await axios.get(`/order?${query}`)
    return res?.data
  } catch (error: unknown) {
    throw (error as AxiosError)?.response?.data || 'Something went wrong'
  }
}

type Props = {
  searchParams: Record<string, string>
}

export default async function OrderPage({ searchParams }: Props) {
  const params = new URLSearchParams(searchParams)

  const order = await getData(params.toString())

  return (
    <div
      className={cn(
        'items-start justify-center gap-6 rounded-lg grid lg:grid-cols-2 xl:grid-cols-3'
      )}>
      <OrderDetails order={order} />
      <DeliveryDetails order={order} />
      <ArticleDetails order={order} />
    </div>
  )
}
