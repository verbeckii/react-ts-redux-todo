import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../../models/Todo'

const initialState = [
  {
    id: 1,
    description: 'test todo',
    tasks: [
      {
        id: 10,
        description: 'task',
        subtasks: [
          {
            id: 1.1,
            description: 'subtask',
          },
          {
            id: 1.2,
            description: 'subtask 2',
          },
        ]
      },
      {
        id: 20,
        description: 'task 2',
        subtasks: [
          {
            id: 2.1,
            description: 'subtask',
          },
          {
            id: 2.2,
            description: 'subtask 2',
          },
        ]
      },
    ]
  }

] as Todo[];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: new Date().getTime(),
          description,
          tasks: []
        } as Todo,
      }),
    },
    addTask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.todoId);
      const task = {
        id: new Date().getTime(),
        description: action.payload.description,
        subtasks: [],
      }
      state[index].tasks.push(task);
    }, 
    addSubtask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.todoId);
      const taskIndex = state[index].tasks.findIndex((todo) => todo.id === action.payload.taskId);
      const subtask = {
        id: new Date().getTime(),
        description: action.payload.description
      }
      state[index].tasks[taskIndex].subtasks.push(subtask);
    },
    editTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.todoId);
      state[index].description = action.payload.description;
    },
    editTask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.todoId);
      const taskIndex = state[index].tasks.findIndex((todo) => todo.id === action.payload.taskId);
      state[index].tasks[taskIndex].description = action.payload.description;
    },
    editSubtask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.todoId);
      const taskIndex = state[index].tasks.findIndex((todo) => todo.id === action.payload.taskId);
      const subtaskIndex = state[index].tasks[taskIndex].subtasks.findIndex((todo) => todo.id === action.payload.subtaskId);
      state[index].tasks[taskIndex].subtasks[subtaskIndex].description = action.payload.description;
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
    removeTask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload[0]);
      const taskIndex = state[index].tasks.findIndex((todo) => todo.id === action.payload[1]);
      state[index].tasks.splice(taskIndex, 1);
    },
    removeSubtask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload[0]);
      const taskIndex = state[index].tasks.findIndex((todo) => todo.id === action.payload[1]);
      const subtaskIndex = state[index].tasks[taskIndex].subtasks.findIndex((todo) => todo.id === action.payload[1]);
      state[index].tasks[taskIndex].subtasks.splice(subtaskIndex, 1);
    },
  },
});

export const { addTodo, addTask, addSubtask, removeTodo, removeTask, removeSubtask, editTask, editSubtask, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
