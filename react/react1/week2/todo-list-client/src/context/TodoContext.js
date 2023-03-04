import { createContext, useReducer } from "react";
import { TodoReducer } from "../reducer/todoReducer";
import {
  dispatchAddTodo,
  dispatchCompleteTodo,
  dispatchDeleteTodo,
  useFetchTodos,
} from "./todoDispatcher";

const initialState = {
  todos: [],
};

export const TodoContext = createContext(initialState);
export const TodoContextProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(TodoReducer, initialState.todos);

  useFetchTodos(dispatch);

  const handleAdd = async (todo) => {
    await dispatchAddTodo(dispatch, todo);
  };

  const handleDelete = async (id) => {
    await dispatchDeleteTodo(dispatch, id);
  };

  const handleComplete = async (id, completed) => {
    await dispatchCompleteTodo(dispatch, completed, id);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, handleAdd, handleComplete, handleDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
