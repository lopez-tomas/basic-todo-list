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
      id: state.todos.length + 1,
      todo: todo,
    }
    if (todo !== "") {
      createToDo(data);
      form.current.reset();
    }
	}

  return (
    <form action="/" className="form" ref={form}>
      <div>
        <label className="label todo-label" htmlFor="todo">TO DO: </label>
        <input
          className="input todo-input"
          type="text" name="todo"
          placeholder="Buy apples & bananas"
          required
        />
      </div>
      <input
        className="create-todo-button"
        type="submit"
        value="Create TO DO"
        onClick={handleSubmit}
      />
    </form>
  )
}

export default Form;