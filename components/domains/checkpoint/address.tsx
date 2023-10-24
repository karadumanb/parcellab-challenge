import { MapPinIcon } from 'lucide-react'
import { getAddressSummary } from './lib/helpers'

type Props = {
  checkpoint: Checkpoint
}

const CheckpointAddress = ({ checkpoint }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <MapPinIcon />
      <p className="text-muted-foreground">{getAddressSummary(checkpoint)}</p>
    </div>
  )
}

export { CheckpointAddress }
