import {DECREASE, INCREASE, STOP_COUNTER, FETCH_USER} from '../actions/type';


export const counterEpic = action$ =>
    action$.ofType(INCREASE)
        .delay(1000)
        .takeUntil(action$.ofType(STOP_COUNTER));