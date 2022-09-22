import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            completed: false,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
    toggleAllCompleted(state) {
      for (const task of state) {
        if (!task.completed) {
          task.completed = true;
        }
      }
    },
    deleteAllCompleted(state) {
      return state.filter(task => !task.completed);
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompleted,
  toggleAllCompleted,
  deleteAllCompleted,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
