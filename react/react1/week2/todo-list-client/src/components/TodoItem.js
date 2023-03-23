import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { _id, description, completed } = todo;
  const { handleComplete, handleDelete } = useContext(TodoContext);
  return (
    <li key={_id} className="flex items-center justify-between my-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="completed"
          id={`completed-${_id}`}
          className="mr-2 leading-tight"
          checked={completed}
          onChange={(event) => handleComplete(_id, event.target.checked)}
        />
        <label
          htmlFor={`completed-${_id}`}
          className={`text-gray-700 font-bold ${
            completed ? "line-through" : ""
          }`}
        >
          {description}
        </label>
      </div>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleDelete(_id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
