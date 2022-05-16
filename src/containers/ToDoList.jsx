import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import ToDo from '../components/ToDo';

const ToDoList = () => {
  const { state } = useContext(AppContext);

  return (
    <ul className="ToDoList">
      {state.todos.map(todo => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default ToDoList;