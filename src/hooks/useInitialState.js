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

  const changeToDoStatus = (id) => {
    let mapped = state.todos.map(todo => {
      return todo.id === id
        ? {...todo, completed: !todo.completed}
        : {...todo};
    });

    setState({
      ...state,
      todos: [...mapped]
    });
  }

  return {
    state,
    createToDo,
    changeToDoStatus
  }
};

export default useInitialSte;