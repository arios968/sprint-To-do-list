import React from "react";
import TodoFunctions from "../TodoFunctions";
import { useContext } from "react";

function FilterTodos() {
  const {
    theme,
    todos,
    deleteAllCompleted,
    filterAllTodos,
    filterCompletedTodos,
    filterActiveTodos,
  } = useContext(TodoFunctions);
  const textColor = {
    color: "hsl(234, 39%, 85%)",
    cursor: "pointer",
  };

  //****
  let completedTodos = todos.filter((todo) => todo.completed === false).length;

  return (
    <>
      <div className="filtered-todos">
        {theme === "night" ? (
          <>
            <p style={textColor}>{completedTodos} items left</p>
            <p style={textColor} onClick={filterAllTodos}>
              All
            </p>
            <p style={textColor} onClick={filterActiveTodos}>
              Active
            </p>
            <p style={textColor} onClick={filterCompletedTodos}>
              Completed
            </p>
            <p style={textColor} onClick={deleteAllCompleted}>
              Clear Completed
            </p>
          </>
        ) : (
          <>
            <p>{completedTodos} items left</p>
            <p onClick={filterAllTodos}>All</p>
            <p onClick={filterActiveTodos}>Active</p>
            <p onClick={filterCompletedTodos}>Completed</p>
            <p onClick={deleteAllCompleted}>Clear Completed</p>
          </>
        )}
      </div>
    </>
  );
}

export default FilterTodos;
