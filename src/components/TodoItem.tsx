import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { AppDispatch } from '../redux/store';
import TodoPreview from './TodoPreview';
import { removeTodo } from '../redux/features/todo/todoSlice';
import TodoTask from './TodoTask';

function TodoItem({description, id, tasks}: { description: string; id: number, tasks: any}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="d-grid gap-3 mt-3">
      <div className="p-2 bg-light border">
        <div className="d-flex justify-content-between align-items-center">
          <a href="/#" onClick={toggle}>
            {description}
          </a>
          <Button
            color="danger"
            onClick={() => {
              dispatch(removeTodo(id));
            }}
          >
            Remove Item
          </Button>
        </div>
        <TodoTask id={id} tasks={tasks} />
      </div>
      <TodoPreview description={description} modal={modal} toggle={toggle}/>
    </div>
  );
}

export default TodoItem;
