import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectVisibleTasks } from 'redux/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
