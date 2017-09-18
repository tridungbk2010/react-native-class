import * as actionTypes from '../actions/type';
import {Observable} from 'rxjs';

const fakeApi = () => Observable.of({
    userId: 1,
    name: "chris",
    position: "Front-end",
    email: "chris.ho@innovatube.com"
}).delay(2000);

export default action$ => action$.ofType(actionTypes.FETCH_USER)
    .mergeMap(() => fakeApi()
        .map(response => ({
            type: actionTypes.FETCH_USER_SUCCESS,
            payload: response})
        ).takeUntil(action$.ofType(actionTypes.CANCEL_FETCHING_USER))
    );





