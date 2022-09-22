import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleChange = value => dispatch(setStatusFilter(value));

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
