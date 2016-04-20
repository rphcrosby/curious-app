import {
    TYPE_LOGIN_USERNAME,
    TYPE_LOGIN_PASSWORD
} from './actions'

import {
    RECEIVE_USER_AUTHENTICATION_ERROR
} from '../../api/authentication/actions'

var defaultState = {
    username: '',
    password: '',
    error: ''
}

function login(state = defaultState, action) {
    switch (action.type) {
        case 'TYPE_LOGIN_USERNAME':
            return Object.assign({}, state, {
                username: action.text,
                error: ''
            });
        case 'TYPE_LOGIN_PASSWORD':
            return Object.assign({}, state, {
                password: action.text,
                error: ''
            });
        case 'RECEIVE_USER_AUTHENTICATION_ERROR':
            return Object.assign({}, state, {
                error: action.response.message
            });
        case 'RESET_LOGIN_FORM':
            return defaultState;
        default:
            return state;
    }
}

export default login;

