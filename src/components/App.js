import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { GlobalStyle } from './GlobalStyle';

const defaultTasks = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList tasks={defaultTasks} />
      <GlobalStyle />
    </Layout>
  );
};
