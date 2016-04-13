import { combineReducers } from 'redux'
import register from './screens/register';
import login from './screens/login';

const screens = combineReducers({
    register,
    login
});

export default screens;
