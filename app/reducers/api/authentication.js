import {
    RECEIVE_CLIENT_AUTHENTICATION,
    RECEIVE_USER_AUTHENTICATION
} from '../../actions/api/authentication'

function authentication(state = {
    access_token: ''
}, action) {
    switch (action.type) {
        case 'RECEIVE_CLIENT_AUTHENTICATION':
            return Object.assign({}, state, {
                access_token: action.token
            });
        case 'RECEIVE_USER_AUTHENTICATION':
            return Object.assign({}, state, {
                access_token: action.token
            });
        default:
            return state;
    }
}

export default authentication;
