import {
    RECEIVE_USER_CREATE
} from './actions/create'

import {
    RECEIVE_TAG_SUBSCRIBE,
    RECEIVE_TAG_UNSUBSCRIBE
} from './actions/tags'

import User from '../../models/user'

function user(state = {
    user: null
}, action) {
    switch (action.type) {
        case 'RECEIVE_USER_CREATE':
            return Object.assign({}, state, {
                user: new User(action.response.data)
            });
        default:
            return state;
    }
}

export default user;
