import React, { useState } from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }) => {

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    if (!editText.trim()) return;
    updateTodo(id, editText);
    setEditId(null);
  };

  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className="flex justify-between items-center border-b p-2"
        >

          {/* EDIT MODE */}
          {editId === id ? (
            <>
              <input
                className="border p-1 flex-1 mr-2"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <button
                onClick={() => handleSave(id)}
                className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span
                onClick={() => toggleTodo(id)}
                className={`cursor-pointer flex-1 ${
                  completed ? "line-through text-gray-400" : ""
                }`}
              >
                {text}
              </span>

              <button
                onClick={() => handleEdit(id, text)}
                className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded"
              >
                Edit
              </button>
            </>
          )}

          {/* DELETE BUTTON */}
          <button
            onClick={() => deleteTodo(id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>

        </li>
      ))}
    </ul>
  );
};

export default TodoList;