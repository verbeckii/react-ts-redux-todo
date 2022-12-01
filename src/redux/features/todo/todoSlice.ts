import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    description: string;
    tasks?: any,
}

const initialState = [
  {
    id: 1,
    description: 'test',
    tasks: [
      {
        id: 1,
        description: 'test task',
        subtasks: [
          {
            id: 1.1,
            description: 'test subtask',
          },
          {
            id: 1.2,
            description: 'test subtask',
          },
        ]
      },
      {
        id: 2,
        description: 'test2 task2',
        subtasks: [
          {
            id: 2.1,
            description: 'test subtask2',
          },
          {
            id: 2.2,
            description: 'test subtask2',
          },
        ]
      },
    ]
    //tasks: []
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
          } as Todo,
        }),
      },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
    removeTask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload[0]);
      const taskIndex = state[index].tasks.findIndex((todo: any) => todo.id === action.payload[1]);
      state[index].tasks.splice(taskIndex, 1);
    },
    removeSubtask(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload[0]);
      const taskIndex = state[index].tasks.findIndex((todo: any) => todo.id === action.payload[1]);
      const subtaskIndex = state[index].tasks[taskIndex].subtasks.findIndex((todo: any) => todo.id === action.payload[1]);
      state[index].tasks[taskIndex].subtasks.splice(subtaskIndex, 1);
    },
  },
});

export const { addTodo, removeTodo, removeTask, removeSubtask } = todoSlice.actions;

export default todoSlice.reducer;
