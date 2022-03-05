import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_TYPING_VALUE,
  DISPLAY_COMPLETED_TODOS,
} from "./constants/actionTypes";
export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}
export function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function setTypingAction(inputVal) {
  return {
    type: SET_TYPING_VALUE,
    payload: inputVal,
  };
}
export function displayCompletedTodos(todos) {
  return {
    type: DISPLAY_COMPLETED_TODOS,
    payload: todos,
  };
}
