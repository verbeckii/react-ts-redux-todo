import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem';
import TodoPreview from './TodoPreview';

function TodoList() {
  const todoList = useSelector((state: RootState) => state.todo);

  if (!todoList) return null

  return (
    <div>
      {todoList.map((todo: any) => (
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
