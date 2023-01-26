import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";
import Data from "./components/Data";
import useLocalStorage from "./components/useLocalStorage";
import { useState } from "react";
import { useEffect } from "react";

const TodoFunctions = createContext();

export const TodoProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "day");
  const [todos, setTodos] = useLocalStorage("todos", Data);
  const [showTodos, setShowTodos] = useState(todos);

  // bringing in change theme function
  function changeTheme() {
    theme === "day" ? setTheme("night") : setTheme("day");
  }

  // changes backround of body based on theme
  theme === "day"
    ? (document.body.style.backgroundColor = "hsl(233, 11%, 84%)")
    : (document.body.style.backgroundColor = "hsl(235, 21%, 11%)");

  useEffect(() => {}, []);

  // add todos
  function addTodo(text) {
    if (text !== "") {
      let newTodo = {
        id: uuidv4(),
        text: text,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setShowTodos(todos);
    } else {
      alert("please type something in the form");
    }
  }

  //****
  function completeTodo(_text) {
    let newTodos = [...todos];
    let todoIndex = newTodos.findIndex((todo) => todo.text === _text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
    return newTodos[todoIndex].completed;
  }

  // delete todos
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // delete all completed todos
  function deleteAllCompleted() {
    let newTodos = [];
    todos.forEach((todo) => {
      if (todo.completed === false) {
        newTodos.push(todo);
      }
    });
    setTodos(newTodos);
  }

  //Filter all todos
  function filterAllTodos() {
    setTodos(showTodos);
  }

  //Filter completed todos
  function filterCompletedTodos() {
    let completedTodos = showTodos.filter((todo) => todo.completed);
    setTodos(completedTodos);
  }

  //Filter active todos
  function filterActiveTodos() {
    let activeTodos = showTodos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  }

  return (
    <TodoFunctions.Provider
      value={{
        showTodos,
        todos,
        theme,
        changeTheme,
        addTodo,
        deleteTodo,
        completeTodo,
        deleteAllCompleted,
        filterAllTodos,
        filterCompletedTodos,
        filterActiveTodos,
      }}
    >
      {children}
    </TodoFunctions.Provider>
  );
};

export default TodoFunctions;
