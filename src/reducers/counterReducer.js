import {INCREASE, DECREASE} from '../actions/type';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
    return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}
