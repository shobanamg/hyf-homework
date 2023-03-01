import { createContext, useState } from "react";
import todos from "../todoList.json";

const INITIAL_CONTEXT = {
  todos: todos,
};

export const TodoContext = createContext(INITIAL_CONTEXT);
export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(INITIAL_CONTEXT.todos);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};
