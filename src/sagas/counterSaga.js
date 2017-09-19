import {INCREASE, INCREASE_DONE, STOP_COUNTER} from "../actions/type";
import {delay} from 'redux-saga';
import {takeLatest, takeEvery, throttle, put,cancel, fork, take} from 'redux-saga/effects';

function* incrementAsync() {
    while(true){
        yield put({type: INCREASE_DONE});
        yield delay(10);
    }
}

export function* watchIncrementAsync() {
    while(yield take(INCREASE)){
        const increaseAsync = yield fork(incrementAsync);
        yield take(STOP_COUNTER);
        yield cancel(increaseAsync);
    }
}

