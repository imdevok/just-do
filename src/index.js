import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const DATA = [
  { id: "todo-0", name: "Купить хлеб", completed: true },
  { id: "todo-1", name: "Отправить письмо", completed: false },
  { id: "todo-2", name: "Забронировать столик", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
