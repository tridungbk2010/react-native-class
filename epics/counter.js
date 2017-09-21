import { DECREMENT, DECREMENT_ASYNC, INCREMENT, INCREMENT_ASYNC } from '../const/actionTypes';

export const increaseEpic = actions$ => actions$.ofType(INCREMENT_ASYNC)
    .mapTo({ type: INCREMENT });


export const decreaseEpic = actions$ => actions$.ofType(DECREMENT_ASYNC)
    .mapTo({ type: DECREMENT });
