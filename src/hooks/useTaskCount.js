import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';

export const useTaskCount = () => {
  const tasks = useSelector(getTasks);

  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
};
