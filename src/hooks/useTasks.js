import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter, getTasks } from 'redux/selectors';

export const useTasks = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getStatusFilter);

  switch (filter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};
