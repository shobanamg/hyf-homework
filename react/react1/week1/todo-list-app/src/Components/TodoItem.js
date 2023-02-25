import React from "react";

const TodoItem = ({ description, deadline }) => {
  return (
    <div className="todo-item">
      <li>
        {description}, {deadline}
      </li>
    </div>
  );
};

export default TodoItem;
