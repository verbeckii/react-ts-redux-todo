import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/features/todo/todoSlice";
import modalReducer from "../redux/features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;