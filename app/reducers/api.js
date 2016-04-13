import { combineReducers } from 'redux'
import authentication from './api/authentication'
import user from './api/user'

const api = combineReducers({
    authentication,
    user
});

export default api;
