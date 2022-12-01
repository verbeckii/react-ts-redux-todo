import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { AppDispatch } from '../redux/store';
import { removeSubtask } from '../redux/features/todo/todoSlice';

function TodoSubtask({ id, taskId, subtasks }: { id: number, taskId: number, subtasks: any}) {
  const dispatch = useDispatch<AppDispatch>();

  if (!subtasks || subtasks?.length < 1) return null

  return (
    <>
        {subtasks.map((subtask:any) => (
            <div key={subtask.id} className="p-2 bg-light border mt-1 d-flex justify-content-between align-items-center">
                {subtask?.description}
            <div className="d-flex justify-content-end gap-2">
                <Button
                    color="primary"
                    onClick={() => {
                        //dispatch(removeTodo(id));
                    }}
                >
                    Add subtask
                </Button>
                <Button
                    color="secondary"
                    onClick={() => {
                        //dispatch(removeTodo(id));
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
