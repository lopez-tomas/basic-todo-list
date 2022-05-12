import React from 'react';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
import Header from './components/Header';
import Form from './containers/Form';
import ToDoList from './containers/ToDoList';
import './styles/App.sass';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <main className="App">
        <section className="form-container">
          <h1>Create your TO DOs!</h1>
          <Form/>
        </section>
        <section className="todos-container">
          <h1>TO DO List</h1>
          <ToDoList />
        </section>
      </main>
    </AppContext.Provider>
  );
}

export default App;