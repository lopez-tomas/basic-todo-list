import React, { useContext } from 'react';
import ToDo from '../components/ToDo';
import AppContext from '../context/AppContext';

const ToDoList = () => {
  const { state } = useContext(AppContext);

  return (
    <ul className="todos">
      {state.todos.map(todo => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default ToDoList;