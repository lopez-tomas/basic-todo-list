import React from 'react';

const Form = () => {
  return (
    <form className="Form">
      <input
        className="input todo-input"
        type="text"
        name="todo"
        placeholder="Buy apples"
      />
      <input
        className="btn todo-btn"
        type="submit"
        value="Create"
      />
    </form>
  )
}

export default Form;