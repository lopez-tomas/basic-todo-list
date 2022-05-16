import { useState } from 'react';

const initialState = {
  todos: [],
  lastId: 1
};

const useInitialSte = () => {
  const [state, setState] = useState(initialState);

  const createToDo = (payload) => {
    setState({
      ...state,
      todos: [...state.todos, payload],
      lastId: state.lastId + 1
    });
  };

  const removeToDo = (id) => {
    setState({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id),
    });
  };

  return {
    state,
    createToDo,
    removeToDo,
  }
};

export default useInitialSte;