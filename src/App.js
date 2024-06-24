import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => todo.id===id ? {...todo, completed: !todo.completed} : todo)
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id!==id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </header>
    </div>
  );
}

export default App;
