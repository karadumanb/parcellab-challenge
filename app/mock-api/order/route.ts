import { orders } from '@/mocks'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const searchParams = new URLSearchParams(req.url.split('?')[1])

    const orderNo = searchParams.get('orderNo')
    if (!orderNo) {
      throw {
        message: 'Order number is required',
        status: 422
      }
    }

    const zipCode = searchParams.get('zip_code')

    if (!zipCode) {
      throw {
        message: 'Zip code is required',
        status: 422
      }
    }

    const order = orders.find((o) => o.zip_code === zipCode && o.delivery_info.orderNo)

    if (!order) {
      throw {
        message: 'Order cannot be found. Make sure you entered the correct values.',
        status: 404
      }
    }

    return NextResponse.json(orders[1])
  } catch (error: any) {
    return new NextResponse(error?.message || 'Internal Error', { status: error?.status || 500 })
  }
}
