import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { AppDispatch } from '../redux/store';
import { removeTask } from '../redux/features/todo/todoSlice';
import TodoSubtask from './TodoSubtask';

function TodoTask({ id, tasks }: { id: number, tasks: any}) {
  const dispatch = useDispatch<AppDispatch>();

  if (!tasks || tasks?.length < 1) return null

  return (
    <div className="d-grid gap-3 mt-2">
        {tasks.map((task:any) => (
            <div key={task?.id} className="p-2 bg-light border">
                <div className="d-flex justify-content-end gap-2 align-items-center">
                    <div className="me-auto">{task?.description}</div>
                    <Button
                        color="primary"
                        onClick={() => {
                            //dispatch(removeTask([id, task.id]));
                        }}
                    >
                        Add Task
                    </Button>
                    <Button
                        color="secondary"
                        onClick={() => {
                            //dispatch(removeTodo(id));
                        }}
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
