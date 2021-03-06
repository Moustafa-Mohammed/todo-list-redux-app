import { SET_TYPING_VALUE } from "../actions/constants/actionTypes";

export default function typing(state = "", action) {
  if (action.type === SET_TYPING_VALUE) {
    return action.payload;
  }
  return state;
}
