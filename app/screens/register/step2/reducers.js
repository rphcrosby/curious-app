import {
    SELECT_DISPLAY_PICTURE
} from './actions'

var defaultState = {
    'display_picture': {
        uri: null
    }
}

function step2(state = defaultState, action) {
    switch (action.type) {
        case 'SELECT_DISPLAY_PICTURE':
            return Object.assign({}, state, {
                display_picture: action.data
            });
        default:
            return state;
    }
}

export default step2;

