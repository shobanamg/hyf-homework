import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";
import Timer from "./Timer";
import { ADD_TODO } from "../constants/todoActions";

const TodoList = () => {
  const { todoList, dispatch } = useContext(TodoContext);
  return (
    <div className="todo-list">
      <p>You have used {<Timer />}seconds on this Website</p>
      <button onClick={() => dispatch({ type: ADD_TODO })}>
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
