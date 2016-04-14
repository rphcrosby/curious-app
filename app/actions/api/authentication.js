import curious, {
    CURIOUS_CLIENT_ID,
    CURIOUS_CLIENT_SECRET
} from '../../modules/api'

const REQUEST_CLIENT_AUTHENTICATION = 'REQUEST_CLIENT_AUTHENTICATION'
const RECEIVE_CLIENT_AUTHENTICATION = 'RECEIVE_CLIENT_AUTHENTICATION'
const RECEIVE_CLIENT_AUTHENTICATION_ERROR = 'RECEIVE_CLIENT_AUTHENTICATION_ERROR'
const REQUEST_USER_AUTHENTICATION = 'REQUEST_USER_AUTHENTICATION'
const RECEIVE_USER_AUTHENTICATION = 'RECEIVE_USER_AUTHENTICATION'
const RECEIVE_USER_AUTHENTICATION_ERROR = 'RECEIVE_USER_AUTHENTICATION_ERROR'

/**
 * Action - Begin making a request for client authentication information
 *
 */
export function requestClientAuthentication() {
    return {
        type: REQUEST_CLIENT_AUTHENTICATION
    }
}

/**
 * Action - Send the client authentication request
 *
 */
export function sendClientAuthentication() {
    return dispatch => {
        dispatch(requestClientAuthentication())
        return curious(
            'POST',
            'authentication/client',
            JSON.stringify({
                grant_type: 'client_credentials',
                client_id: CURIOUS_CLIENT_ID,
                client_secret: CURIOUS_CLIENT_SECRET
            })
        ).then(json => {
            dispatch(receiveClientAuthentication(json))
        }).catch(function() {
            dispatch(receiveClientAuthenticationError())
        }).done()
    }
}

/**
 * Action - Receive the client authentication response
 *
 */
export function receiveClientAuthentication(json) {
    return {
        type: RECEIVE_CLIENT_AUTHENTICATION,
        token: json.access_token
    }
}

/**
 * Action - Receive the client authentication error response
 *
 */
export function receiveClientAuthenticationError() {
    return {
        type: RECEIVE_CLIENT_AUTHENTICATION_ERROR
    }
}

/**
 * Action - Begin making a request for user authentication information
 *
 */
export function requestUserAuthentication() {
    return {
        type: REQUEST_USER_AUTHENTICATION
    }
}

/**
 * Action - Send the user authentication request
 *
 */
export function sendUserAuthentication() {
    return (dispatch, getState) => {
        dispatch(requestUserAuthentication())
        return curious(
            'POST',
            'authentication/user',
            JSON.stringify({
                grant_type: 'password',
                client_id: CURIOUS_CLIENT_ID,
                client_secret: CURIOUS_CLIENT_SECRET,
                username: getState().screens.login.username,
                password: getState().screens.login.password
            })
        ).then(json => {
            // If an error was received then dispatch an error event
            if (json.status_code == 500) {
                return dispatch(receiveUserAuthenticationError(json))
            }

            return dispatch(receiveUserAuthentication());
        }).done()
    }
}

/**
 * Action - Receive the user authentication response
 *
 */
export function receiveUserAuthentication(json) {
    return {
        type: RECEIVE_USER_AUTHENTICATION,
        token: json.access_token
    }
}

/**
 * Action - Receive the user authentication response error
 *
 */
export function receiveUserAuthenticationError(json) {
    return {
        type: RECEIVE_USER_AUTHENTICATION_ERROR,
        response: json
    }
}
