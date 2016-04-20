import {
    TYPE_TAG_SEARCH
} from './actions'

var defaultState = {
    query: ''
}

function step3(state = defaultState, action) {
    switch (action.type) {
        case 'TYPE_TAG_SEARCH':
            return Object.assign({}, state, {
                query: action.text
            });
        default:
            return state;
    }
}

export default step3;

