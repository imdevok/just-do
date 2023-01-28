import { TodoItem } from "./types/types";
import TodoList from "./components/TodoList";
import { createLocalStore } from "./store/TodoStore";
import { Component } from "solid-js";

const App: Component = () => {
  const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", {
    data: []
  })

  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
