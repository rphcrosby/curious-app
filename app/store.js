import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// Import reducers
import { apiReducer } from './api/reducers'
import { screenReducer } from './screens/reducers'

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    api: apiReducer,
    screens: screenReducer
});

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store
