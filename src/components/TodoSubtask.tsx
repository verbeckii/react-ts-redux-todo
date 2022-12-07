import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { AppDispatch } from '../redux/store';
import { removeSubtask } from '../redux/features/todo/todoSlice';
import { changeDescription, changeModalType, changeSubtaskId, changeTaskId, changeTodoId, toggleModal } from '../redux/features/modal/modalSlice';
import { Subtask } from '../models/Subtask';

function TodoSubtask({ id, taskId, subtasks }: { id: number, taskId: number, subtasks: Subtask[]}) {
  const dispatch = useDispatch<AppDispatch>();

  const onEdit = (id: number, taskId: number, subtaskId: number, description:string, ) => {
    dispatch(changeDescription(description))
    dispatch(changeTodoId(id))
    dispatch(changeTaskId(taskId))
    dispatch(changeSubtaskId(subtaskId))
    dispatch(changeModalType('editSubTask'))
    dispatch(toggleModal())
  }

  if (!subtasks || subtasks?.length < 1) return null

  return (
    <>
        {subtasks.map((subtask:Subtask) => (
            <div key={subtask.id} className="p-2 bg-light border mt-1 d-flex justify-content-between align-items-center">
                {subtask?.description}
                <div className="d-flex justify-content-end gap-2">
                    <Button
                        color="secondary"
                        onClick={() => {
                            onEdit(id, taskId, subtask.id, subtask.description)
                        }}
                    >
                        Edit subtask
                    </Button>
                    <Button
                        color="danger"
                        onClick={() => {
                            dispatch(removeSubtask([id, taskId, subtask.id]));
                        }}
                    >
                        Remove subtask
                    </Button>
                </div>
            </div>
        ))}
    </>
  );
}

export default TodoSubtask;
