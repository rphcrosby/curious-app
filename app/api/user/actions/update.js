import curious from '../../api'

const REQUEST_USER_UPDATE = 'REQUEST_USER_UPDATE'
const RECEIVE_USER_UPDATE = 'RECEIVE_USER_UPDATE'
const RECEIVE_USER_UPDATE_ERROR = 'RECEIVE_USER_UPDATE_ERROR'

/**
 * Action - Begin making a request to create a new user
 *
 */
export function requestUserUpdate() {
    return {
        type: REQUEST_USER_UPDATE
    }
}

/**
 * Action - Send the user create request
 *
 */
export function sendUserUpdate(data) {
    return (dispatch, getState) => {
        dispatch(requestUserUpdate())
        var user = getState().api.authentication.user;
        return curious(
            'PUT',
            'users/' + user.property('id'),
            JSON.stringify(data),
            getState()
        ).then(json => {
            // If an error was received then dispatch an error event
            if (json.status_code == 422) {
                return dispatch(receiveUserUpdateError(json))
            }

            return dispatch(receiveUserUpdate(json));
        }).done()
    }
}

/**
 * Action - Receive the created user
 *
 */
export function receiveUserUpdate(json) {
    return {
        type: RECEIVE_USER_UPDATE,
        response: json
    }
}

/**
 * Action - Receive the error that was thrown when creating the user
 *
 */
export function receiveUserUpdateError(json) {
    return {
        type: RECEIVE_USER_UPDATE_ERROR,
        response: json
    }
}
