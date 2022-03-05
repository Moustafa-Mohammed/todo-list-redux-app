import { combineReducers } from "redux";
import completedTodos from "./completedTodos";
import allTodos from "./todosReducer";
import typing from "./typingReducer";

export const reducer = combineReducers({
  allTodos,
  typing,
  completedTodos,
});
