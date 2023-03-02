import { createContext, useReducer } from "react";
import todos from "../todoList.json";
import { TodoReducer } from "../reducer/TodoReducer";

const INITIAL_CONTEXT = {
  todos: todos,
};

export const TodoContext = createContext(INITIAL_CONTEXT);
export const TodoContextProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(TodoReducer, INITIAL_CONTEXT.todos);

  return (
    <TodoContext.Provider value={{ todoList, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
