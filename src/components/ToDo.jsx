import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ToDo.sass';

const ToDo = ({ todo }) => {
  const { removeToDo } = useContext(AppContext);

  const handleClick = id => {
    removeToDo(id);
  }

  return (
    <li className="ToDo">
      <div className="ToDo-info">
        <h2>{todo.todo}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adip  incididunt ut labore et dolor sit amet... (to be implemented)
        </p>
      </div>
      <div className="ToDo-remove">
        <span onClick={() => handleClick(todo.id)}>
          X
        </span>
      </div>
    </li>
  )
}

export default ToDo;