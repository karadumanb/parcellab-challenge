import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  description?: ReactNode
  avatar?: ReactNode
  extra?: ReactNode
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

const Item = ({ title, description = null, avatar, extra = null, containerProps = {} }: Props) => {
  return (
    <div
      className={cn('flex items-center justify-between space-x-4', containerProps.className)}
      {...containerProps}>
      <div className="flex items-center space-x-4">
        {avatar && <div className="relative w-1/3 h-24">{avatar}</div>}
        <div>
          {title}
          {description}
        </div>
      </div>
      {extra}
    </div>
  )
}

export { Item }
