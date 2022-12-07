import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { AppDispatch } from '../redux/store';
import { removeTodo } from '../redux/features/todo/todoSlice';
import TodoTask from './TodoTask';
import { changeDescription, changeModalType, changeTodoId, toggleModal } from '../redux/features/modal/modalSlice';

function TodoItem({description, id, tasks}: { description: string; id: number, tasks: any}) {
  const dispatch = useDispatch<AppDispatch>();

  const onAddTask = (id: number) => {
    dispatch(changeTodoId(id))
    dispatch(changeModalType('addTask'))
    dispatch(toggleModal())
  }

  const onEdit = (id: number, description:string) => {
    dispatch(changeDescription(description))
    dispatch(changeTodoId(id))
    dispatch(changeModalType('editTodo'))
    dispatch(toggleModal())
  }

  const onPreview = () => {
    dispatch(changeDescription(description))
    dispatch(changeModalType('preview'))
    dispatch(toggleModal())
  }

  return (
    <div className="d-grid gap-3 mt-3">
      <div className="p-2 bg-light border">
        <div className="d-flex justify-content-between align-items-center">
          <a href="/#" 
            onClick={() => onPreview()}
          >
            {description}
          </a>
          <div className="d-flex justify-content-end gap-2 align-items-center">
            <Button
              color="primary"
              onClick={() => {
                onAddTask(id)
              }}
            >
              Add task
            </Button>
            <Button
              color="primary"
              onClick={() => {
                onEdit(id, description)
              }}
            >
              Edit task
            </Button>
            <Button
              color="danger"
              onClick={() => {
                dispatch(removeTodo(id));
              }}
            >
              Remove Item
            </Button>
          </div>
        </div>
        <TodoTask id={id} tasks={tasks} />
      </div>
    </div>
  );
}

export default TodoItem;
