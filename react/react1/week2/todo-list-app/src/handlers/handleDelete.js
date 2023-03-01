const handleDelete = (id, todoList, setTodoList) => {
  setTodoList(todoList.filter((todo) => todo.id !== id));
};

export default handleDelete;
