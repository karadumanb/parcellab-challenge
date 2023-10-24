import { Item } from '@/components/ui/item'
import { convertToLocaleDateTime } from '@/lib/date'
import dayjs from 'dayjs'

type Props = {
  checkpoint: Checkpoint
}

const CheckpointListItem = ({ checkpoint }: Props) => {
  const { status, status_details, city, event_timestamp } = checkpoint

  return (
    <Item
      title={<h4 className="font-bold">{status}</h4>}
      description={<p className="text-muted-foreground text-sm">{status_details}</p>}
      extra={
        <div className="flex justify-between">
          <p className="font-bold text-muted-foreground text-sm">{city}</p>
          <p className="font-bold text-muted-foreground text-sm">
            {convertToLocaleDateTime(dayjs(event_timestamp))}
          </p>
        </div>
      }
      containerProps={{ className: 'flex-col' }}
    />
  )
}

export { CheckpointListItem }
