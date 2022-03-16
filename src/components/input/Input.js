import { TextField } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
import { addTodoAction, setTypingAction } from "../../actions";
import { store } from "../../store";

import "./Input.css";

function Input() {
  const { typing } = store.getState();
  const handleChange = (e) => {
    store.dispatch(setTypingAction(e.target.value));
    console.log(store.getState());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(
      addTodoAction({ text: typing, id: uuid(), complete: false })
    );
    store.dispatch(setTypingAction(""));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        label="Add todo"
        variant="filled"
        color="secondary"
        className="form-input"
        value={typing}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
