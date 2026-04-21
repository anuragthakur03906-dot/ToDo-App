import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  // ==================== STATE ====================
const [todos, setTodos] = useState(() =>
  JSON.parse(localStorage.getItem("todos") || "[]")
);

  // ==================== LOAD FROM LOCALSTORAGE ====================
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  // ==================== SAVE TO LOCALSTORAGE ====================
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ==================== ADD TODO ====================
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false
      },
    ]);
  };

  // ==================== TOGGLE TODO ====================
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
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ==================== UPDATE TODO ====================
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // ==================== UI ====================
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow w-[400px]">

        <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          Todo App
        </h1>

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;