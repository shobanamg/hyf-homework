import React from "react";
import TodoItem from "./TodoItem";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017",
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017",
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017",
  },
];

const TodoList = () => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            description={todo.description}
            deadline={todo.deadline}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
