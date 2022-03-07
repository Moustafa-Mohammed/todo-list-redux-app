import React from "react";
import { store } from "../../store";
import TodoItem from "../TodoItem/TodoItem";

import "./TodoList.css";
function TodoList() {
  const { todos } = store.getState();
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
