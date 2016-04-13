import { combineReducers } from 'redux';
import screens from './screens';
import api from './api';

const rootReducer = combineReducers({
    screens,
    api
});

export default rootReducer;
