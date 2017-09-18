import {watchIncrementAsync} from './counterSaga';
import {watchFetchUser} from "./userSaga";


export default function* () {
    yield [
        watchIncrementAsync(),
        watchFetchUser()
    ]
}