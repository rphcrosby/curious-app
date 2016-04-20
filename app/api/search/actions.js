import curious from '../api'

const REQUEST_SEARCH = 'REQUEST_SEARCH'
const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

/**
 * Action - Begin making a request to search
 *
 */
export function requestSearch(query) {
    return {
        type: REQUEST_SEARCH,
        query
    }
}

/**
 * Action - Send the request to search
 *
 */
export function sendSearch(query, type = null) {
    return (dispatch, getState) => {
        dispatch(requestSearch(query))
        return curious(
            'GET',
            'search?q=' + query + (type ? '&type=' + type : ''),
            '',
            getState()
        ).then(json => {
            return dispatch(receiveSearch(json));
        }).done()
    }
}

/**
 * Action - Receive the search result
 *
 */
export function receiveSearch(json) {
    return {
        type: RECEIVE_SEARCH,
        response: json
    }
}
