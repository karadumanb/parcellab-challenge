'use client'

import { CheckpointListItem } from '@/components/domains/checkpoint/list-item'
import { getOrderProgress } from '@/components/domains/order/lib/helpers'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProgressAnimated } from '@/components/ui/progress'

import { OrderCard } from '../components/card'

type Props = {
  order: Order
}

export function DeliveryDetails({ order }: Props) {
  return (
    <OrderCard>
      <CardHeader className="space-y-5">
        <CardTitle>Shipping Updates</CardTitle>
        <div className="space-y-2">
          <ProgressAnimated value={getOrderProgress(order)} className="w-full" />
          <div className="flex justify-between">
            <p className="font-bold text-muted-foreground text-sm">Processed</p>
            <p className="font-bold text-muted-foreground text-sm">Delivered</p>
          </div>
        </div>
      </CardHeader>
      {order.checkpoints.map((checkpoint) => (
        <CardContent key={checkpoint.status}>
          <CheckpointListItem checkpoint={checkpoint} />
        </CardContent>
      ))}
    </OrderCard>
  )
}
