import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  // ==================== STATE ====================
  // Stores list of all todos
  const [todos, setTodos] = useState([]);

  // ==================== ADD TODO ====================
  // Adds new todo item into list
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(), // unique id based on timestamp
        text,           // todo text
        completed: false // default status
      },
    ]);
  };

  // ==================== TOGGLE TODO ====================
  // Toggle completed / not completed state
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // ==================== DELETE TODO ====================
  // Remove todo from list
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ==================== UI ====================
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow w-[400px]">

        {/* App Title */}
        <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          Todo App
        </h1>

        {/* Input Form Component */}
        <TodoForm addTodo={addTodo} />

        {/* Todo List Component */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

      </div>
    </div>
  );
}

export default App;