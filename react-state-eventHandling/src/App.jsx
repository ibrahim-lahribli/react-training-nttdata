import "./App.css";
import Header from "./Header";
import ActionBar from "./ActionBar";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [title] = useState("Todo List");
  //const todoList = ["task1", "task2", "task3"];

  const [todoList, setTodoList] = useState(["task1", "task2", "task3"]);

  const updateTodoList = (newValue) => {
    setTodoList([...todoList, newValue]);
  };
  return (
    <div>
      <Header title={title} />
      <ActionBar updateTodoList={updateTodoList} />
      <TodoList todoList={todoList} id={1} />
    </div>
  );
}

export default App;
