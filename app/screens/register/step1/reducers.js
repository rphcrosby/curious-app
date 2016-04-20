import {
    RESET_REGISTER_FORM,
    TYPE_REGISTER_USERNAME,
    TYPE_REGISTER_EMAIL,
    TYPE_REGISTER_PASSWORD,
    TYPE_REGISTER_PASSWORD_CONFIRMATION
} from './actions'

import {
    RECEIVE_USER_CREATE_ERROR
} from '../../../api/user/actions/create'

var defaultState = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: []
}

function step1(state = defaultState, action) {
    switch (action.type) {
        case 'TYPE_REGISTER_USERNAME':
            return Object.assign({}, state, {
                username: action.text,
                errors: []
            });
        case 'TYPE_REGISTER_EMAIL':
            return Object.assign({}, state, {
                email: action.text,
                errors: []
            });
        case 'TYPE_REGISTER_PASSWORD':
            return Object.assign({}, state, {
                password: action.text,
                errors: []
            });
        case 'TYPE_REGISTER_PASSWORD_CONFIRMATION':
            return Object.assign({}, state, {
                password_confirmation: action.text,
                errors: []
            });
        case 'RECEIVE_USER_CREATE_ERROR':
            return Object.assign({}, state, {
                errors: action.response.errors
            });
        case 'RESET_REGISTER_FORM':
            return defaultState
        default:
            return state;
    }
}

export default step1;

