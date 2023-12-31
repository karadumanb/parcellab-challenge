'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  orderNo: z.string().min(1, {
    message: 'Order number is required'
  }),
  zip_code: z.string().min(1, {
    message: 'Zip Code is required'
  })
})

export type OrderFormValues = z.infer<typeof formSchema>

type Props = {
  onSubmit: (values: OrderFormValues) => void
}

const OrderForm = ({ onSubmit }: Props) => {
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderNo: '',
      zip_code: ''
    }
  })

  const isLoading = form.formState.isSubmitting

  const onFormSubmit = (values: OrderFormValues) => {
    onSubmit(values)
  }

  return (
    <Form {...form}>
      <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onFormSubmit)}>
        <FormField
          name="orderNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter the order number" className="rounded-md" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="zip_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter recipient's zip code"
                  className="rounded-md"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} variant="default" type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Form>
  )
}

export { OrderForm }
