'use client'

import { Empty } from '@/components/ui/empty'

type Props = {
  error: {
    digest: string
    message: string
    stack: string
  }
}

const Error = ({ error }: Props) => {
  return <Empty label={error?.message || 'Something went wrong.'} />
}

export default Error
