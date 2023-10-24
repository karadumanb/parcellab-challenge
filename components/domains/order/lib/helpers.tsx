export function getLastCheckPoint(order: Order): Checkpoint {
  return order.checkpoints[0]
}

export function getOrderProgress(order: Order): number {
  const maxCheckPointCount = 5

  return (order.checkpoints.length * 100) / maxCheckPointCount
}
