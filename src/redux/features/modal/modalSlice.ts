import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isOpen: false,
  modalType: '',
  description: '',
  todoId: '',
  taskId: '',
  subtaskId: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isOpen = !state.isOpen
    },
    changeDescription(state, action) {
      state.description = action.payload
    },
    changeTaskId(state, action) {
      state.taskId = action.payload
    },
    changeTodoId(state, action) {
      state.todoId = action.payload
    },
    changeSubtaskId(state, action) {
      state.subtaskId = action.payload
    },
    changeModalType(state, action) {
      state.modalType = action.payload
    },
  }
});

export const { toggleModal, changeDescription, changeTaskId, changeSubtaskId, changeTodoId, changeModalType } = modalSlice.actions;

export default modalSlice.reducer;
