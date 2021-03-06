import React, { useContext } from 'react';
import ToDo from '../components/ToDo';
import AppContext from '../context/AppContext';
import '../styles/ToDoList.sass';

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