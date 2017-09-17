import * as actionTypes from '../actions/type';
import {Observable} from 'rxjs';

const fakeApi = () => Observable.of({
    userId: 1,
    name: "chris",
    email: "chris.ho@innovatube.com"
}).delay(1000);

export default action$ => action$.ofType(actionTypes.FETCH_USER)
    .map(() => ({type:actionTypes.SHOW_LOADING_ICON}))
    .mergeMap(() => fakeApi()
        .map(response => ({type: actionTypes.FETCH_USER_SUCCESS, payload: response}))
        .map(() => ({type:actionTypes.HIDE_LOADING_ICON}))
    );





