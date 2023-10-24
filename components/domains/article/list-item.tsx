import { Item } from '@/components/ui/item'
import { priceFormatter } from '@/lib/price'
import Image from 'next/image'

type Props = {
  article: Article
}

const ArticleListItem = ({ article }: Props) => {
  const { articleName, articleNo, articleImageUrl, price } = article

  console.log({ article })

  return (
    <Item
      title={<h4 className="font-bold">{articleName}</h4>}
      description={
        <div className="flex flex-col">
          <p className="text-muted-foreground text-sm">Article number: {articleNo}</p>
          <p className="font-bold text-sm">{priceFormatter(price)}</p>
        </div>
      }
      avatar={articleImageUrl && <Image fill alt="article" src={articleImageUrl} />}
      containerProps={{ className: 'flex-col' }}
    />
  )
}

export { ArticleListItem }
