import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { AppDispatch } from '../redux/store';
import { removeTask } from '../redux/features/todo/todoSlice';
import TodoSubtask from './TodoSubtask';
import { changeDescription, changeModalType, changeTaskId, changeTodoId, toggleModal } from '../redux/features/modal/modalSlice';
import { Task } from '../models/Task';

function TodoTask({ id, tasks }: { id: number, tasks: Task[]}) {
  const dispatch = useDispatch<AppDispatch>();

  const onAddSubTask = (id: number, taskId: number) => {
    dispatch(changeTodoId(id))
    dispatch(changeTaskId(taskId))
    dispatch(changeModalType('addSubTask'))
    dispatch(toggleModal())
  }

  if (!tasks || tasks?.length < 1) return null

  const onEdit = (description:string, id: number, taskId: number) => {
    dispatch(changeDescription(description))
    dispatch(changeTodoId(id))
    dispatch(changeTaskId(taskId))
    dispatch(changeModalType('editTask'))
    dispatch(toggleModal())
  }

  return (
    <div className="d-grid gap-3 mt-2">
        {tasks.map((task:Task) => (
            <div key={task?.id} className="p-2 bg-light border">
                <div className="d-flex justify-content-end gap-2 align-items-center">
                    <div className="me-auto">{task?.description}</div>
                    <Button
                        color="primary"
                        onClick={() => onAddSubTask(id, task.id)} 
                    >
                        Add Subtask
                    </Button>
                    <Button
                        color="secondary"
                        onClick={() => onEdit(task.description, id, task.id)}
                    >
                        Edit Task
                    </Button>
                    <Button
                        color="danger"
                        onClick={() => {
                            dispatch(removeTask([id, task.id]));
                        }}
                    >
                        Remove Task
                    </Button>
                </div>
                <TodoSubtask id={id} taskId={task.id} subtasks={task.subtasks} />
            </div>
        ))}
    </div>
  );
}

export default TodoTask;
