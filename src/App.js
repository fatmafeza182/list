import React, { useState } from 'react';
import './App.css';
import List from './companents/List'
import Form from './companents/Form';
import Create from './companents/Create'

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  }
  console.log(todos)
  return (
    <div >
      <Create onCreateTodo={createTodo} />
      <List todos={todos} onRemoveTodo={removeTodo} OnUpdateTodo={updateTodo} />

    </div>
  );
}

export default App;
