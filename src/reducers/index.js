import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    counter: counterReducer,
    userInfo: userReducer,
    loading:loadingReducer
});
