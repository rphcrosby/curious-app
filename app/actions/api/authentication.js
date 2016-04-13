import curious, {
    CURIOUS_CLIENT_ID,
    CURIOUS_CLIENT_SECRET
} from '../../modules/api'

const REQUEST_CLIENT_AUTHENTICATION = 'REQUEST_CLIENT_AUTHENTICATION'
const RECEIVE_CLIENT_AUTHENTICATION = 'RECEIVE_CLIENT_AUTHENTICATION'

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
        ).then(json => dispatch(receieveClientAuthentication(json)))
        .done()
    }
}

/**
 * Action - Receive the client authentication response
 *
 */
export function receieveClientAuthentication(json) {
    return {
        type: RECEIVE_CLIENT_AUTHENTICATION,
        token: json.access_token
    }
}
