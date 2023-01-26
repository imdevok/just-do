import { TodoItem } from "./types/types";
import TodoList from "./components/TodoList";
import { createLocalStore } from "./store/TodoStore";

function App() {
  const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", [])

  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
