import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import ToDo from '../components/ToDo';

const ToDoList = () => {
  const [allCompleted, setAllCompleted] = useState(false);
  const { state, completeAll, uncompleteAll } = useContext(AppContext);

  const handleStatus = () => {
    if (allCompleted) {
      uncompleteAll()
      setAllCompleted(false);
    } else {
      completeAll()
      setAllCompleted(true);
    }
  }

  return (
    <div className="ToDoList">
      <ul className="ToDoList-list">
        {state.todos.map(todo => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>

      <button onClick={() => handleStatus()}>{allCompleted ? 'Uncomplete all' : 'Complete all'}</button>
    </div>
  )
}

export default ToDoList;