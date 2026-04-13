import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    addTodo(input.trim());
    setInput("");
  };

  return (
    <div className="mb-4">
      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Enter a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />

      <button
        className="w-full bg-indigo-600 text-white p-2 rounded"
        onClick={handleAdd}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;