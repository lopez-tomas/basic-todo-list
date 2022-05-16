import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ToDo.sass';

const ToDo = ({ todo }) => {
  const { changeToDoStatus } = useContext(AppContext);

  const handleClick = (id) => {
    changeToDoStatus(id);
  }

  return (
    <li
      onClick={() => handleClick(todo.id)}
      className={`ToDo ${todo.completed ? 'completed' : ''}`}
    >
      {todo.todo}
    </li>
  )
}

export default ToDo;