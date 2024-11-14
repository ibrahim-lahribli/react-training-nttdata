import Item from "./TodoListItem";

function TodoList({ todoList }) {
  console.log(todoList);

  const data = "";

  return todoList.map((el) => <Item key={el} title={el} />);
}

export default TodoList;
