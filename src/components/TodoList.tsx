import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem';

function TodoList() {
  const todoList = useSelector((state: RootState) => state);

  return (
    <div>
      {todoList.map(todo => (
        <TodoItem 
            key={todo.id}
            description={todo.description}
        />
      ))}
    </div>
  );
}

export default TodoList;
