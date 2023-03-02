import uuid from "react-uuid";
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../constants/todoActions";

export const TodoReducer = (todoList, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todoList,
        {
          id: uuid(),
          description: `Random Todo`,
          done: false,
        },
      ];

    case DELETE_TODO:
      return todoList.filter((todo) => todo.id !== action.payload);

    case COMPLETE_TODO:
      return todoList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });

    default:
      console.log("Unknown action type in TodoReducer: ");
  }
};
