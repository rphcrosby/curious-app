import { combineReducers } from 'redux'
import authentication from './api/authentication'
import user from './api/user'

/**
 * Combine the reducers for the various parts of the API
 *
 */
const api = combineReducers({
    authentication,
    user
});

export default api;
