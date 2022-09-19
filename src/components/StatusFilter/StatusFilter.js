import { Button } from 'components/Button/Button';

export const StatusFilter = () => {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
};
