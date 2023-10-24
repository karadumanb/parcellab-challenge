import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Banner } from '@/components/ui/banner'
import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Order',
  description: 'Your order details'
}

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-0 md:p-8">
      <div className="flex justify-between items-center mb-5">
        <div className="h-20 w-20 relative">
          <Banner />
        </div>
        <Button variant="outline" asChild>
          <Link href="/">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Sign out
          </Link>
        </Button>
      </div>
      <div
        className={cn(
          'items-start justify-center gap-6 rounded-lg grid lg:grid-cols-2 xl:grid-cols-3'
        )}>
        {children}
      </div>
    </div>
  )
}
