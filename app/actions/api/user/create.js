import curious from '../../../modules/api'

const REQUEST_USER_CREATE = 'REQUEST_USER_CREATE'
const RECEIVE_USER_CREATE = 'RECEIVE_USER_CREATE'
const RECEIVE_USER_CREATE_ERROR = 'RECEIVE_USER_CREATE_ERROR'

export function requestUserCreate() {
    return {
        type: REQUEST_USER_CREATE
    }
}

export function sendUserCreate() {
    return (dispatch, getState) => {
        dispatch(requestUserCreate())
        return curious(
            'POST',
            'users',
            JSON.stringify(getState().screens.register), getState()
        ).then(json => {
            // If an error was received then dispatch an error event
            if (json.status_code == 422) {
                return dispatch(receiveUserCreateError(json))
            }

            return dispatch(receiveUserCreate(json));
        }).done()
    }
}

export function receiveUserCreate(json) {
    return {
        type: RECEIVE_USER_CREATE,
        response: json
    }
}

export function receiveUserCreateError(json) {
    return {
        type: RECEIVE_USER_CREATE_ERROR,
        response: json
    }
}
