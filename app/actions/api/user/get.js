import curious from '../../../modules/api'

const REQUEST_USER_ME = 'REQUEST_USER_ME'
const RECEIVE_USER_ME = 'RECEIVE_USER_ME'

/**
 * Action - Begin making a request to get the authenticated user
 *
 */
export function requestUserMe() {
    return {
        type: REQUEST_USER_ME
    }
}

/**
 * Action - Send the request to get the authenticated user
 *
 */
export function sendUserMe() {
    return (dispatch, getState) => {
        dispatch(requestUserMe())
        return curious(
            'GET',
            'users/me'
        ).then(json => {
            return dispatch(receiveUserMe(json));
        }).done()
    }
}

/**
 * Action - Receive the authenticated user
 *
 */
export function receiveUserMe(json) {
    return {
        type: RECEIVE_USER_ME,
        response: json
    }
}
