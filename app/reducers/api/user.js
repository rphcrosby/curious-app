import {
    RECEIVE_USER_CREATE
} from '../../actions/api/user/create'

function user(state = {
    user: null
}, action) {
    switch (action.type) {
        case 'RECEIVE_USER_CREATE':
            return Object.assign({}, state, {
                user: action.response.data
            });
        default:
            return state;
    }
}

export default user;
