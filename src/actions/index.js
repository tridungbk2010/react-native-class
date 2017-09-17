import {
    INCREASE,
    DECREASE,
    STOP_COUNTER,
    FETCH_USER,
    SHOW_LOADING_ICON,
    HIDE_LOADING_ICON,
    CANCEL_FETCHING_USER
} from './type';

export const counterIncrease = () => ({type: INCREASE});
export const counterDecrease = () => ({type: DECREASE});
export const stopCounter = () => ({type: STOP_COUNTER});
export const fetchUser = () => ({type: FETCH_USER});
export const cancelRequest = () => ({type: CANCEL_FETCHING_USER});


