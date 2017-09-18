import {INCREASE, INCREASE_DONE} from "../actions/type";
import {delay} from 'redux-saga';
import {takeLatest, put} from 'redux-saga/effects';

function* incrementAsync() {
    yield delay(1000);
    yield put({ type: INCREASE_DONE });
}

export function* watchIncrementAsync() {
    yield takeLatest(INCREASE, incrementAsync);
}
