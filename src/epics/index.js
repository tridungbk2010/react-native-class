import {combineEpics} from 'redux-observable';
import {counterEpic} from './counterEpic';
import userEpic from './userEpic';

export default combineEpics(
    counterEpic,
    userEpic
)