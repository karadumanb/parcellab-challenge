import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof Card>

export function OrderCard({ className, ...others }: Props) {
  return (
    <Card
      className={cn('rounded-lg shadow-lg h-full lg:h-[450px] overflow-auto', className)}
      {...others}
    />
  )
}
