import { combineReducers } from "redux";
import todos from "./todosReducer";
import typing from "./typingReducer";

export const reducer = combineReducers({
  todos,
  typing,
});
