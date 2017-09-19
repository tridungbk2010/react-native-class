import {
    INCREASE,
    DECREASE,
    STOP_COUNTER,
    FETCH_USER,
    CANCEL_FETCHING_USER, FETCH_USER_SUCCESS
} from './type';

import axios from 'axios';


// export const counterIncreaseSuccess = () => ({type: INCREASE});
export const counterDecrease = () => ({type: DECREASE});
export const stopCounter = () => ({type: STOP_COUNTER});
// export const fetchUser = () => ({type: FETCH_USER});
export const cancelRequest = () => ({type: CANCEL_FETCHING_USER});

//call api to fetch data
export const counterIncrease = () => async dispatch => {
    await delay(1000);
    dispatch({type: INCREASE});
};

export const fetchUser = () => async dispatch => {
    dispatch({type:FETCH_USER});
    const data = await fakeDataApi();
    dispatch({type:FETCH_USER_SUCCESS, payload:data});
};

const delay = (time) => new Promise(resolve => setTimeout(() => {
    resolve(true);
}, time));


const fakeDataApi = () => new Promise(resolve => setTimeout(() => {
    resolve({
        name: "Chris Ho",
        position: "JS Dev",
        email: "tridungbk@gmail.com"
    })
}, 1000));