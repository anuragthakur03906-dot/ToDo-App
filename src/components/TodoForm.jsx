import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {

  // Input field state
  const [input, setInput] = useState("");

  // Add todo handler
  const handleAdd = () => {

    // Prevent empty input
    if (!input.trim()) return;

    // Send data to parent
    addTodo(input.trim());

    // Clear input after adding
    setInput("");
  };

  return (
    <div className="mb-4">

      {/* Input Field */}
      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Enter a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />

      {/* Add Button */}
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