import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
// import { createEpicMiddleware } from 'redux-observable';
// import rootEpic from '../epics';
import {composeWithDevTools} from 'redux-devtools-extension';

// const epicMiddleware = createEpicMiddleware(rootEpic);

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;