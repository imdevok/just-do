import React from "react";

function FilterButton(props) {
  let taskStatus = props.name

  if (taskStatus === "Active") {
    taskStatus = "Активные"
  } 
  if (taskStatus === "All") {
    taskStatus = "Все"
  }
  if (taskStatus === "Completed") {
    taskStatus = "Завершённые"
  }
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Показать </span>
      <span>{taskStatus}</span>
      <span className="visually-hidden"> задачи</span>
    </button>
  );
}

export default FilterButton;
