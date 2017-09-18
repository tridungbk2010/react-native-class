import {INCREASE, INCREASE_DONE} from "../actions/type";
import {delay} from 'redux-saga';
import {takeLatest, takeEvery, throttle, put} from 'redux-saga/effects';

function* incrementAsync() {
    yield count = 1;
    while(count <= 30){
        yield put({type: INCREASE_DONE});
        yield delay(30);
        yield count++;
    }
}

export function* watchIncrementAsync() {
    yield takeLatest(INCREASE, incrementAsync);
}

