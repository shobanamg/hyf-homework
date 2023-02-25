import React from "react";

const TodoItem = ({ todo }) => {
  const { description, deadline } = todo;
  return (
    <div className="todo-item">
      <li>
        {description}, {deadline}
      </li>
    </div>
  );
};

export default TodoItem;
