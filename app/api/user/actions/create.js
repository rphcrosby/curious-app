import curious from '../../api'

const REQUEST_USER_CREATE = 'REQUEST_USER_CREATE'
const RECEIVE_USER_CREATE = 'RECEIVE_USER_CREATE'
const RECEIVE_USER_CREATE_ERROR = 'RECEIVE_USER_CREATE_ERROR'

/**
 * Action - Begin making a request to create a new user
 *
 */
export function requestUserCreate() {
    return {
        type: REQUEST_USER_CREATE
    }
}

/**
 * Action - Send the user create request
 *
 */
export function sendUserCreate() {
    return (dispatch, getState) => {
        dispatch(requestUserCreate())
        return curious(
            'POST',
            'users',
            JSON.stringify(getState().screens.register.step1), getState()
        ).then(json => {
            // If an error was received then dispatch an error event
            if (json.status_code == 422) {
                return dispatch(receiveUserCreateError(json))
            }

            return dispatch(receiveUserCreate(json));
        }).done()
    }
}

/**
 * Action - Receive the created user
 *
 */
export function receiveUserCreate(json) {
    return {
        type: RECEIVE_USER_CREATE,
        response: json
    }
}

/**
 * Action - Receive the error that was thrown when creating the user
 *
 */
export function receiveUserCreateError(json) {
    return {
        type: RECEIVE_USER_CREATE_ERROR,
        response: json
    }
}
