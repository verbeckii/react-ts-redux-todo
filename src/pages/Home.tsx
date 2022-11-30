import React from 'react';
import TodoList from '../components/TodoList';
import TodoManagment from '../components/TodoManagment';

function Home() {
  return (
    <div className='container'>
      <div className='mt-4'>
        <TodoManagment />
      </div>
      <TodoList/>
    </div>
  );
}

export default Home;
