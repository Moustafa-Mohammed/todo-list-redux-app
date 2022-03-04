import React from "react";
import { v4 as uuid } from "uuid";
import { addTodoAction, setTypingAction } from "../actions";
import { store } from "../store";

function Input() {
  const { typing, todos } = store.getState();
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
    <form onSubmit={handleSubmit}>
      <input value={typing} onChange={handleChange} />
    </form>
  );
}

export default Input;
