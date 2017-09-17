import * as actionTypes from '../actions/type';

export default function (state = false, action) {
    switch (action.type) {
        case actionTypes.SHOW_LOADING_ICON:
            return true;

        case actionTypes.HIDE_LOADING_ICON:
            return false;
        default:
            return state;
    }
}