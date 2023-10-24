'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

type Props = {
  checkpoint: Checkpoint
}

const CheckpointMap = ({ checkpoint }: Props) => {
  return (
    <div className="mt-4">
      <div className="w-full relative" style={{ height: 240 }}>
        <Image alt="map" src={checkpoint.meta?.pickup_address_map_url as string} fill />
      </div>
      <Button asChild className="w-full" size="lg">
        <a href={checkpoint.meta?.pickup_address_link} target="__blank">
          Get directions
        </a>
      </Button>
    </div>
  )
}

export { CheckpointMap }
