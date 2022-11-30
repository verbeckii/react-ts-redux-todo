import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    description: string;
}

const initialState = [] as Todo[];

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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
