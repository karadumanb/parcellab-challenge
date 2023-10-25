import { orders } from '@/mocks'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const searchParams = new URLSearchParams(req.url.split('?')[1])

    const orderNo = searchParams.get('orderNo') as string
    const zipCode = searchParams.get('zip_code') as string

    validateParams({ orderNo, zipCode })

    const order = findOrder({ orderNo, zipCode })

    return NextResponse.json(order)
  } catch (error: any) {
    return new NextResponse(error?.message || 'Internal Error', { status: error?.status || 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { orderNo, zip_code: zipCode } = body

    validateParams({ orderNo, zipCode })

    const order = findOrder({ orderNo, zipCode })

    return NextResponse.json(order)
  } catch (error: any) {
    return new NextResponse(error?.message || 'Internal Error', { status: error?.status || 500 })
  }
}

type Args = { orderNo: string; zipCode: string }

function validateParams({ orderNo, zipCode }: Args) {
  if (!orderNo) {
    throw {
      message: 'Order number is required',
      status: 422
    }
  }

  if (!zipCode) {
    throw {
      message: 'Zip code is required',
      status: 422
    }
  }
}

function findOrder({ orderNo, zipCode }: Args) {
  const order = orders.find((o) => o.zip_code === zipCode && o.delivery_info.orderNo === orderNo)

  if (!order) {
    throw {
      message: 'Order cannot be found. Make sure you entered the correct values.',
      status: 404
    }
  }

  return order
}
