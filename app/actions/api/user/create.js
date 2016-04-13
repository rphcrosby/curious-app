import fetch from 'isomorphic-fetch'

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
        return fetch(`http://curious-api.app/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.curious.v1+json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getState().api.authentication.access_token
            },
            body: JSON.stringify(getState().screens.register)
        }).then(response => response.json())
        .then(json => {
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
