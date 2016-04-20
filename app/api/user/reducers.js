import {
    RECEIVE_USER_CREATE
} from './actions/create'

import {
    RECEIVE_TAG_SUBSCRIBE,
    RECEIVE_TAG_UNSUBSCRIBE
} from './actions/tags'

function user(state = {
    user: null
}, action) {
    switch (action.type) {
        case 'RECEIVE_USER_CREATE':
            return Object.assign({}, state, {
                user: action.response.data
            });
        case 'RECEIVE_TAG_SUBSCRIBE':
            return Object.assign({}, state, {
                user: action.response.data
            });
        case 'RECEIVE_TAG_UNSUBSCRIBE':
            return Object.assign({}, state, {
                user: action.response.data
            });
        default:
            return state;
    }
}

export default user;
