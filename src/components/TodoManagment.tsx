import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'reactstrap';
import { addTodo } from '../redux/features/todo/todoSlice';
import { AppDispatch } from '../redux/store';

function TodoManagment() {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='row'>
      <div className='col-10'>
        <Input
          variant="outlined"
          onChange={(e) => setTodoDescription(e.target.value)}
          value={todoDescription}
        />
      </div>
      <div className='col'>
        <Button
          color="primary"
          onClick={() => {
            dispatch(addTodo(todoDescription));
            setTodoDescription("");
          }}
          disabled={!todoDescription}
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}

export default TodoManagment;
