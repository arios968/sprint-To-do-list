import React from "react";
import BackImages from "./components/BackImages";
import Header from "./components/Header";
import InputForm from "./components/InputForm"
import TodoItemList from "./components/TodoItemList"
import { TodoProvider } from "./TodoFunctions";


function App() {
  return (
    <TodoProvider>
      <main className="container">
        <BackImages />
        <Header />
        <InputForm />
        <TodoItemList />
      </main>
    </TodoProvider>
  );
}

export default App;
