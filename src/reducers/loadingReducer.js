import * as actionTypes from '../actions/type';

export default function (state = false, action) {
    switch (action.type) {
        case actionTypes.FETCH_USER:
            return true;

        case actionTypes.FETCH_USER_SUCCESS:
        case actionTypes.CANCEL_FETCHING_USER:
            return false;
        default:
            return state;
    }
}