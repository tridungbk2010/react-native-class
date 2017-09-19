import {put, call, take, fork, cancel, takeLatest} from 'redux-saga/effects';
import {CANCEL_FETCHING_USER, FETCH_USER, FETCH_USER_SUCCESS} from "../actions/type";

const fetchUserApi = (delay) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            name: "Chris Ho",
            position: "Front-end developer",
            email: 'tridungbk@gmail.com'
        })
    }, delay)
});

function* fetchUser() {
    try {
        const response = yield call(fetchUserApi, 1000);
        yield put({type: FETCH_USER_SUCCESS, payload: response});
    } catch (err) {
        yield put({type: CANCEL_FETCHING_USER});
    }
}

export function* watchFetchUser() {
    yield takeLatest(FETCH_USER, fetchUser);
    while(yield take(FETCH_USER)){
        const getUser = yield fork(fetchUser);
        yield take(CANCEL_FETCHING_USER);
        yield cancel(getUser);
    }

}