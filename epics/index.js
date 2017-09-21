import {combineEpics} from 'redux-observable';
import {increaseEpic, decreaseEpic} from "./counter";

export default combineEpics(
    increaseEpic,
    decreaseEpic
)