import {
    RECEIVE_CLIENT_AUTHENTICATION,
    RECEIVE_USER_AUTHENTICATION
} from '../../actions/api/authentication'

export const AUTHENTICATION_STATE_DISCONNECTED = 'AUTHENTICATION_STATE_DISCONNECTED'
export const AUTHENTICATION_STATE_CONNECTING = 'AUTHENTICATION_STATE_CONNECTING'
export const AUTHENTICATION_STATE_CONNECTED = 'AUTHENTICATION_STATE_CONNECTED'
export const AUTHENTICATION_STATE_FAILED = 'AUTHENTICATION_STATE_FAILED'

function authentication(state = {
    status: AUTHENTICATION_STATE_DISCONNECTED,
    access_token: null
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
                status: AUTHENTICATION_STATE_CONNECTED
            });
        case 'RECEIVE_USER_AUTHENTICATION':
            return Object.assign({}, state, {
                access_token: action.token,
                status: AUTHENTICATION_STATE_CONNECTED
            });
        case 'RECEIVE_CLIENT_AUTHENTICATION_ERROR':
            return Object.assign({}, state, {
                status: AUTHENTICATION_STATE_FAILED
            });
        default:
            return state;
    }
}

export default authentication;
