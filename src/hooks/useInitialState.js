import { useState } from 'react';

const initialState = {
  todos: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const createToDo = (payload) => {
    setState({
      ...state,
      todos: [...state.todos, payload]
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

export default useInitialState;