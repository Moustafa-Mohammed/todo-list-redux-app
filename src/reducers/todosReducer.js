import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actions/constants/actionTypes";
import { allTodos } from "../todosData";
export default function todosReducer(state = allTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, complete: !todo.complete }
      );
    default:
      return state;
  }
}
