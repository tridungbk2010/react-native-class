import {INCREASE, DECREASE} from './type';

// const promiseAction = new Promise(resolve => {
//     setTimeout(() => {
//         resolve({type:INCREASE});
//     }, 1000);
// });

export const counterIncrease = () => ({type:INCREASE});
export const counterDecrease = () => ({type:DECREASE});


