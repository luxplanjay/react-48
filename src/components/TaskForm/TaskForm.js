import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
