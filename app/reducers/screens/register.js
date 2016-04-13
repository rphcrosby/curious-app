import {
    TYPE_REGISTER_USERNAME,
    TYPE_REGISTER_EMAIL,
    TYPE_REGISTER_PASSWORD,
    TYPE_REGISTER_PASSWORD_CONFIRMATION
} from '../../actions/screens/register'
import {
    RECEIVE_USER_CREATE_ERROR
} from '../../actions/api/user/create'

function register(state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
}, action) {
    switch (action.type) {
        case 'TYPE_REGISTER_USERNAME':
            return Object.assign({}, state, {
                username: action.text
            });
        case 'TYPE_REGISTER_EMAIL':
            return Object.assign({}, state, {
                email: action.text
            });
        case 'TYPE_REGISTER_PASSWORD':
            return Object.assign({}, state, {
                password: action.text
            });
        case 'TYPE_REGISTER_PASSWORD_CONFIRMATION':
            return Object.assign({}, state, {
                password_confirmation: action.text
            });
        case 'RECEIVE_USER_CREATE_ERROR':
            return Object.assign({}, state, {
                errors: action.response.errors
            });
        default:
            return state;
    }
}

export default register;

