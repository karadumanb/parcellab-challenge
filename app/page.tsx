import { Banner } from '@/components/ui/banner'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Home() {
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
              <form className="mt-8 space-y-6">
                <div>
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <Input
                    id="orderNumber"
                    placeholder="Enter the order number"
                    className="rounded-md"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input
                    id="zip"
                    placeholder="Enter recipient's zip code"
                    className="rounded-md"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
