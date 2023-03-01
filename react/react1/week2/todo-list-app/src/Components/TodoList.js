import React, { useState } from "react";
import TodoItem from "./TodoItem";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

const TodoList = () => {
  const [todoList, setTodoList] = useState(todos);
  const [nextId, setNextId] = useState(todos.length + 1);

  const addRandomTodo = () => {
    const randomTodo = {
      id: nextId,
      description: `Random Todo #${nextId}`,
      done: false,
    };
    setTodoList([...todoList, randomTodo]);
    setNextId(nextId + 1);
  };

  const handleToggle = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <button onClick={addRandomTodo}>Add Random todoItem</button>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
