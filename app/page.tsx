'use client'

import { OrderForm, OrderFormValues } from '@/components/domains/orders/Form'
import { Banner } from '@/components/ui/banner'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'

export default function Home() {
  const { toast } = useToast()

  const onFormSubmit = async (values: OrderFormValues) => {
    toast({ title: 'Something went wrong.', variant: 'destructive' })
  }

  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col items-center md:flex-row py-20">
          <div className="flex items-center justify-center w-full md:w-1/2">
            <div className="h-40 w-40 relative">
              <Banner />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/4">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h1 className="text-2xl font-bold">Track your order</h1>
                <p className="mt-2 text-gray-600">
                  Enter your order number and zip code to see order details and updates shipping.
                </p>
              </div>
              <OrderForm onSubmit={onFormSubmit} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
