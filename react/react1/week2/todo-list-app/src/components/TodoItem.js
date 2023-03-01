import React, { useContext } from "react";
import handleToggle from "../handlers/handleToggle";
import handleDelete from "../handlers/handleDelete";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { id, description, done } = todo;
  const { todoList, setTodoList } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        {description}
      </li>
      <input
        type="checkbox"
        checked={done}
        onChange={() => handleToggle(id, todoList, setTodoList)}
      />
      <button onClick={() => handleDelete(id, todoList, setTodoList)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
