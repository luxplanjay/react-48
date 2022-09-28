import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
