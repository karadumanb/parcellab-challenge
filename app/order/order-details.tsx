'use client'

import { CheckpointAddress } from '@/components/domains/checkpoint/address'
import { CheckpointMap } from '@/components/domains/checkpoint/map'
import { getLastCheckPoint } from '@/components/domains/order/lib/helpers'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {
  order: Order
}

export function OrderDetails({ order }: Props) {
  const checkpoint = getLastCheckPoint(order)

  return (
    <Card className="rounded-lg">
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
    </Card>
  )
}
