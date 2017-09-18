import {DECREASE, INCREASE, STOP_COUNTER, FETCH_USER, INCREASE_DONE} from '../actions/type';
import {Observable} from 'rxjs';

export const counterEpic = action$ =>
    action$.ofType(INCREASE)
        .mergeMap(() => Observable.timer(0,30)
            .takeUntil(Observable.timer(1000))
            .map(() => ({type:INCREASE_DONE}))
            .takeUntil(action$.ofType(STOP_COUNTER))
        );