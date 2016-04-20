import {
    RECEIVE_SEARCH
} from './actions'

export const SEARCH_NO_RESULTS = 'SEARCH_NO_RESULTS'
export const SEARCH_IS_SEARCHING = 'SEARCH_IS_SEARCHING'
export const SEARCH_HAS_RESULTS = 'SEARCH_NO_RESULTS'

var initialState = {
    query: '',
    status: SEARCH_NO_RESULTS,
    results: {
        'tags': [],
        'users': []
    }
}

function search(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_SEARCH':
            return Object.assign({}, state, {
                status: SEARCH_IS_SEARCHING,
                results: initialState.results,
                query: action.query
            });
        case 'RECEIVE_SEARCH':
            return Object.assign({}, state, {
                status: SEARCH_HAS_RESULTS,
                results: action.response
            });
        default:
            return state;
    }
}

export default search;
