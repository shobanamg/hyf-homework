import React from "react";

const TodoItem = ({ todo, handleToggle, handleDelete }) => {
  const { id, description, done } = todo;

  return (
    <div className="todo-item">
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        {description}
      </li>
      <input type="checkbox" checked={done} onChange={() => handleToggle(id)} />
      <button onClick={() => handleDelete(id)}> Delete</button>
    </div>
  );
};

export default TodoItem;
