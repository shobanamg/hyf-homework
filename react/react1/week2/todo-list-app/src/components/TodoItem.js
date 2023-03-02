import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { DELETE_TODO, COMPLETE_TODO } from "../constants/todoActions";

const TodoItem = ({ todo }) => {
  const { id, description, done } = todo;
  const { dispatch } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        {description}
      </li>
      <input
        type="checkbox"
        checked={done}
        onChange={() => dispatch({ type: COMPLETE_TODO, payload: id })}
      />
      <button onClick={() => dispatch({ type: DELETE_TODO, payload: id })}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
