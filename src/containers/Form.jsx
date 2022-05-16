import React, { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';

const Form = () => {
  const { state, createToDo } = useContext(AppContext);
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    let todo = formData.get('todo');
    formData.set('todo', "");

    const data = {
      id: state.lastId,
      todo: todo,
      completed: false,
    }
    if (todo !== "") {
      createToDo(data);
      form.current.reset();
    }
  }

  return (
    <form action="/" className="Form" ref={form}>
      <input
        className="input todo-input"
        type="text"
        name="todo"
        placeholder="Buy apples"
        required
      />
      <input
        onClick={handleSubmit}
        className="btn todo-btn"
        type="submit"
        value="Create"
      />
    </form>
  )
}

export default Form;