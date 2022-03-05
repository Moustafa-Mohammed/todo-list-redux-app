import React from "react";
import { toggleTodoAction, removeTodoAction } from "../../actions";
import { store } from "../../store";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

import "./TodoItem.css";

function TodoItem({ todo }) {
  const handleToggleTodo = () => {
    store.dispatch(toggleTodoAction(todo.id));
  };
  const handleRemoveTodo = () => {
    store.dispatch(removeTodoAction(todo.id));
  };
  return (
    <li className="list-item">
      <div>
        <Checkbox
          checked={todo.complete}
          sx={{
            color: pink[600],
            "&.Mui-checked": {
              color: pink[800],
            },
          }}
          color="secondary"
          onClick={handleToggleTodo}
        />
        <span
          onClick={handleToggleTodo}
          style={{
            textDecoration: todo.complete ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </div>
      <div>
        <DeleteForeverIcon
          onClick={handleRemoveTodo}
          sx={{
            color: pink[600],
            cursor: "pointer",
            "&:hover": {
              color: pink[800],
            },
          }}
        />
      </div>
    </li>
  );
}

export default TodoItem;
