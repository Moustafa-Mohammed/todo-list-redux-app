import React from "react";
import { toggleTodoAction } from "../../actions";
import { store } from "../../store";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

import "./TodoItem.css";

function TodoItem({ todo }) {
  const handleClick = () => {
    store.dispatch(toggleTodoAction(todo.id));
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
          onClick={handleClick}
        />
        <span
          onClick={handleClick}
          style={{
            textDecoration: todo.complete ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </div>
      <div>
        <DeleteForeverIcon
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
