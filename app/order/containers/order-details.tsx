'use client'

import { CheckpointAddress } from '@/components/domains/checkpoint/address'
import { CheckpointMap } from '@/components/domains/checkpoint/map'
import { getLatestCheckPoint } from '@/components/domains/order/lib/helpers'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { OrderCard } from '../components/card'

type Props = {
  order: Order
}

export function OrderDetails({ order }: Props) {
  const checkpoint = getLatestCheckPoint(order)

  return (
    <OrderCard className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{checkpoint.status}</CardTitle>
        <CardDescription>{checkpoint.status_details}</CardDescription>
      </CardHeader>
      {checkpoint.meta?.pickup_address ? (
        <CardContent className="p-0">
          <CheckpointMap checkpoint={checkpoint} />
        </CardContent>
      ) : (
        <CardContent>
          <CheckpointAddress checkpoint={checkpoint} />
        </CardContent>
      )}
    </OrderCard>
  )
}
