import {
    RECEIVE_CLIENT_AUTHENTICATION,
    RECEIVE_USER_AUTHENTICATION
} from './actions'

import User from '../../models/user'

export const AUTHENTICATION_STATE_DISCONNECTED = 'AUTHENTICATION_STATE_DISCONNECTED'
export const AUTHENTICATION_STATE_CONNECTING = 'AUTHENTICATION_STATE_CONNECTING'
export const AUTHENTICATION_STATE_CLIENT_CONNECTED = 'AUTHENTICATION_STATE_CLIENT_CONNECTED'
export const AUTHENTICATION_STATE_USER_CONNECTED = 'AUTHENTICATION_STATE_USER_CONNECTED'
export const AUTHENTICATION_STATE_FAILED = 'AUTHENTICATION_STATE_FAILED'

function authentication(state = {
    status: AUTHENTICATION_STATE_DISCONNECTED,
    access_token: null,
    user: null
}, action) {
    switch (action.type) {
        case 'REQUEST_CLIENT_AUTHENTICATION':
            return Object.assign({}, state, {
                status: AUTHENTICATION_STATE_CONNECTING
            });
        case 'REQUEST_USER_AUTHENTICATION':
            return Object.assign({}, state, {
                status: AUTHENTICATION_STATE_CONNECTING
            });
        case 'RECEIVE_CLIENT_AUTHENTICATION':
            return Object.assign({}, state, {
                access_token: action.token,
                status: AUTHENTICATION_STATE_CLIENT_CONNECTED
            });
        case 'RECEIVE_USER_AUTHENTICATION':
            return Object.assign({}, state, {
                access_token: action.token,
                status: AUTHENTICATION_STATE_USER_CONNECTED
            });
        case 'RECEIVE_CLIENT_AUTHENTICATION_ERROR':
            return Object.assign({}, state, {
                status: AUTHENTICATION_STATE_FAILED
            });
        case 'RECEIVE_USER_ME':
            return Object.assign({}, state, {
                user: new User(action.response.data)
            });
        default:
            return state;
    }
}

export default authentication;
