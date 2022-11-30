import React, { useState } from 'react';
import TodoPreview from './TodoPreview';

function TodoItem({description}: { description: string; }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <p>
        <a href="/#" onClick={toggle}>
          {description}
        </a>
      </p>
      <TodoPreview description={description} modal={modal} toggle={toggle}/>
    </>
  );
}

export default TodoItem;
