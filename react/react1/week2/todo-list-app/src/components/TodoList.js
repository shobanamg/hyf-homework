import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import addRandomTodo from "../handlers/addRandomTodo";
import { TodoContext } from "../context/TodoContext";
import Timer from "./Timer";

const TodoList = () => {
  const { todoList, setTodoList } = useContext(TodoContext);
  return (
    <div className="todo-list">
      <div>You have used {<Timer />}seconds on this Website</div>
      <button onClick={() => addRandomTodo(todoList, setTodoList)}>
        Add Random todoItem
      </button>
      <span>{todoList.length ? "" : " No items"}</span>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
