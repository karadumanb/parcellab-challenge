'use client'

import { ArticleListItem } from '@/components/domains/article/list-item'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {
  order: Order
}

export function ArticleDetails({ order }: Props) {
  return (
    <Card className="rounded-lg">
      <CardHeader className="space-y-5">
        <CardTitle>Articles</CardTitle>
      </CardHeader>
      {order.delivery_info.articles.map((article) => (
        <CardContent key={article.articleNo}>
          <ArticleListItem article={article} />
        </CardContent>
      ))}
    </Card>
  )
}
