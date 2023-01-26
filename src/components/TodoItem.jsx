import React from "react";
import CheckIcon from "../images/icon-check.svg";
import { useState, useContext } from "react";
import TodoFunctions from "../TodoFunctions";

function TodoItem({ todo }) {
  const { theme, deleteTodo, completeTodo } = useContext(TodoFunctions);
  const [isComplete, setIsComplete] = useState(todo.completed);
  let color;

  theme === "day" ? (color = "") : (color = "dark");

  const completedStyle = {
    textDecoration: "line-through",
    color: "hsl(234, 11%, 52%)",
  };

  const checkBackground = {
    backgroundImage: "linear-gradient(hsl(192, 100%, 67%), rgb(192, 88, 243))",
  };

  function toggleComplete(_text) {
    //****
    setIsComplete(completeTodo(_text));
  }

  return (
    <li className={`list-item card ${color}`}>
      {isComplete ? (
        <>
          <span
            className="checkbox"
            type="checkbox"
            onClick={() => toggleComplete(todo.text)}
            style={checkBackground}
          >
            <img className="check-icon" src={CheckIcon} alt="" />
          </span>
          <p className={`${color}`} style={completedStyle}>
            {todo.text}
          </p>
          <button
            className={`delete-button ${color}`}
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </>
      ) : (
        <>
          <span
            className="checkbox"
            type="checkbox"
            onClick={() => toggleComplete(todo.text)}
          ></span>
          <p className={`${color}`}>{todo.text}</p>
          <button
            className={`delete-button ${color}`}
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
