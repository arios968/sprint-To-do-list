import React from "react";
import TodoItem from "./TodoItem";
import FilterTodos from "./FilterTodos";
import TodoFunctions from "../TodoFunctions";
import { useContext } from "react";

function TodoItemList({ handleDelete }) {
  const { todos, theme } = useContext(TodoFunctions);
  let color;

  theme === "day" ? (color = "") : (color = "dark");

  return (
    <section className={`list-items-area ${color}`}>
      <ul>
        {/* {todos.map((todo) => (
          
          <TodoItem key={todo.id} handleDelete={handleDelete} color={color} />
        ))} */}
        {todos.map((todo) => (
          <TodoItem key={todo.id} handleDelete={handleDelete} todo={todo} />
        ))}
      </ul>
      <FilterTodos color={color} />
    </section>
  );
}

export default TodoItemList;
