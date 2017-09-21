import { DECREMENT_ASYNC, INCREMENT_ASYNC } from '../const/actionTypes';

export const increaseNumber = () => ({ type: INCREMENT_ASYNC });
export const decreaseNumber = () => ({ type: DECREMENT_ASYNC });
