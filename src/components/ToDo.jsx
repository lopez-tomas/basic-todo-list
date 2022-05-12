import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const ToDo = ({ todo }) => {
  const { removeToDo } = useContext(AppContext);

  const handleClick = id => {
    removeToDo(id);
  }

  return (
    <li>
      <span
        onClick={() => handleClick(todo.id)}
        style={{marginRight: '2rem', color: 'red', cursor: 'pointer'}}
      >
        X
      </span>
      {todo.todo}
    </li>
  )
}

export default ToDo;