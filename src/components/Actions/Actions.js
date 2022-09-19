import { Button } from 'components/Button/Button'

export const Actions = () => {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <Button>Mark all completed</Button>
      <Button>Clear all completed</Button>
    </div>
  )
}
