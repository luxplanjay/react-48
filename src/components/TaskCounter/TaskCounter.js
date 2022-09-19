import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  return (
    <div>
      <p className={css.text}>Active: 3</p>
      <p className={css.text}>Completed: 2</p>
    </div>
  );
};
