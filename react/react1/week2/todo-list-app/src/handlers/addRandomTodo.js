import uuid from "react-uuid";

const addRandomTodo = (todoList, setTodoList) => {
  const id = uuid();

  const randomTodo = {
    id: id,
    description: `Random Todo`,
    done: false,
  };
  setTodoList([...todoList, randomTodo]);
};

export default addRandomTodo;
