import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteAllCompleted, toggleAllCompleted } from 'redux/actions';

export const Actions = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <Button onClick={() => dispatch(toggleAllCompleted())}>
        Mark all completed
      </Button>
      <Button onClick={() => dispatch(deleteAllCompleted())}>
        Clear all completed
      </Button>
    </div>
  );
};
