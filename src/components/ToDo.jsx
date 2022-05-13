import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ToDo.sass';

const ToDo = ({ todo }) => {
  const { removeToDo } = useContext(AppContext);

  const handleClick = id => {
    removeToDo(id);
    console.log(`TO DO with ID#${id} removed`);
  }

  return (
    <li className="ToDo">
      <div className="ToDo-info">
        <h2>{todo.todo}</h2>
      </div>
      <div className="ToDo-remove" onClick={() => handleClick(todo.id)}>
        <span>
          X
        </span>
      </div>
    </li>
  )
}

export default ToDo;