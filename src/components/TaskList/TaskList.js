import { Task } from 'components/Task/Task';
import { useTasks } from 'hooks/useTasks';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useTasks();

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
