import {
    TYPE_LOGIN_USERNAME,
    TYPE_LOGIN_PASSWORD
} from '../../actions/screens/login'
import {
    RECEIVE_USER_AUTHENTICATION_ERROR
} from '../../actions/api/authentication'

function login(state = {
    username: '',
    password: '',
    error: ''
}, action) {
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
        default:
            return state;
    }
}

export default login;
