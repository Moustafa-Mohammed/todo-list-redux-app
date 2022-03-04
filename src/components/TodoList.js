import React from "react";
import { store } from "../store";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = store.getState();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
