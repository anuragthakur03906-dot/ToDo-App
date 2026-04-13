import React from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className="flex justify-between items-center border-b p-2"
        >
          <span
            onClick={() => toggleTodo(id)}
            className={`cursor-pointer flex-1 ${
              completed ? "line-through text-gray-400" : ""
            }`}
          >
            {text}
          </span>

          <button
            onClick={() => deleteTodo(id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
