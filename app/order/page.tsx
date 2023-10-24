import { Metadata } from 'next'

import { cn } from '@/lib/utils'
import { OrderStatus } from './status'

export const metadata: Metadata = {
  title: 'Order',
  description: 'The order of blabla.'
}

function DemoContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center justify-center [&>div]:w-full', className)} {...props} />
  )
}

export default function CardsPage() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <DemoContainer>
          <OrderStatus />
        </DemoContainer>
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <DemoContainer>
          <OrderStatus />
        </DemoContainer>
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
        <DemoContainer>
          <OrderStatus />
        </DemoContainer>
      </div>
    </div>
  )
}
