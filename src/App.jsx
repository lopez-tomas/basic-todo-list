import React from 'react';
import Form from './containers/Form';
import ToDoList from './containers/ToDoList';
import './styles/App.sass';

function App() {
  return (
    <main className="App">
      <section className="Form-container">
        <h1>Create your TO DOs!</h1>
        <Form />
      </section>
      <section className="ToDoList-container">
        <h1>TO DO List</h1>
        <ToDoList />
      </section>
    </main>
  );
}

export default App;