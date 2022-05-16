import React from 'react';

const ToDo = ({ todo }) => {
  return (
    <li className="ToDo">
      {todo.todo}
    </li>
  )
}

export default ToDo;