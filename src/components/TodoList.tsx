import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Todo } from '../models/Todo';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem';
import TodoPreview from './TodoPreview';

function TodoList() {
  const todoList = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    if (todoList && todoList.length > 0) {
      document.documentElement.style.setProperty('--bodyColor', '')
    } else {
      document.documentElement.style.setProperty('--bodyColor', 'black')
    }
  }, [todoList])
  
  if (!todoList) return null

  return (
    <div>
      {todoList.map((todo: Todo) => (
        <TodoItem 
            key={todo.id}
            id={todo.id}
            description={todo.description}
            tasks={todo.tasks}
        />
      ))}
      <TodoPreview />
    </div>
  );
}

export default TodoList;
