import { DISPLAY_COMPLETED_TODOS } from "../actions/constants/actionTypes";
export default function completedTodos(state = [], action) {
  switch (action.type) {
    case DISPLAY_COMPLETED_TODOS:
      return [action.payload];
    default:
      return state;
  }
}
