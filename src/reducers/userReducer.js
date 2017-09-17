import * as actionTypes from '../actions/type';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.FETCH_USER_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}