const handleToggle = (id, todoList, setTodoList) => {
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

export default handleToggle;
