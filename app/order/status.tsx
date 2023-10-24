'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export function OrderStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Share this document</CardTitle>
        <CardDescription>Anyone with the link can view this document.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input value="http://example.com/link/to/document" readOnly />
          <Button variant="secondary" className="shrink-0">
            Copy Link
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">People with access</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                hi
                <div>
                  <p className="text-sm font-medium leading-none">Olivia Martin</p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
                </div>
              </div>
              hey
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                hi
                <div>
                  <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                  <p className="text-sm text-muted-foreground">b@example.com</p>
                </div>
              </div>
              hey
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                hi
                <div>
                  <p className="text-sm font-medium leading-none">Sofia Davis</p>
                  <p className="text-sm text-muted-foreground">p@example.com</p>
                </div>
              </div>
              hey
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
