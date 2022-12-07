import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { changeDescription, changeTaskId, changeSubtaskId, toggleModal, changeTodoId } from '../redux/features/modal/modalSlice';
import { addSubtask, addTask, editSubtask, editTask, editTodo } from '../redux/features/todo/todoSlice';
import { AppDispatch, RootState } from '../redux/store';

function TodoPreview() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalType = useSelector((state: RootState) => state.modal.modalType);
  const description = useSelector((state: RootState) => state.modal.description);
  const todoId = useSelector((state: RootState) => state.modal.todoId);
  const taskId = useSelector((state: RootState) => state.modal.taskId);
  const subtaskId = useSelector((state: RootState) => state.modal.subtaskId);
  
  const dispatch = useDispatch<AppDispatch>();
  const toggle = () => {
    dispatch(toggleModal())
  }

  const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    dispatch(changeDescription(e.target.value))
  }

  const onSave = () => {
    switch (modalType) {
      case 'addTask':
        dispatch(addTask({todoId, description}))
        dispatch(changeDescription(''))
        dispatch(changeTodoId(''))
        dispatch(toggleModal())
        break;
      case 'addSubTask':
        dispatch(addSubtask({todoId, taskId, description}))
        dispatch(changeDescription(''))
        dispatch(changeTodoId(''))
        dispatch(changeTaskId(''))
        dispatch(toggleModal())
        break;
      case 'editTodo':
        dispatch(editTodo({todoId, description}))
        dispatch(changeDescription(''))
        dispatch(changeTodoId(''))
        dispatch(toggleModal())
        break;
      case 'editTask':
        dispatch(editTask({todoId, taskId, description}))
        dispatch(changeDescription(''))
        dispatch(changeTodoId(''))
        dispatch(changeTaskId(''))
        dispatch(toggleModal())
        break;
      case 'editSubTask':
        dispatch(editSubtask({todoId, taskId, subtaskId, description}))
        dispatch(changeDescription(''))
        dispatch(changeTodoId(''))
        dispatch(changeTaskId(''))
        dispatch(changeSubtaskId(''))
        dispatch(toggleModal())
        break;
      case 'preview':
        dispatch(changeDescription(''))
        dispatch(toggleModal())
        break;
    
      default:
        break;
    }
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Preview</ModalHeader>
            <ModalBody>
                <Input
                    value={description}
                    onChange={onChange}
                />
            </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={onSave}>
                Save
            </Button>
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
  );
}

export default TodoPreview;
