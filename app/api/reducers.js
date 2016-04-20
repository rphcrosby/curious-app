import { combineReducers } from 'redux';

// Import API reducers
import authentication from './authentication/reducers'
import search from './search/reducers'
import user from './user/reducers'

export const apiReducer = combineReducers({
    authentication,
    search,
    user
})
