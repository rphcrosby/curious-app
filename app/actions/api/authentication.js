import fetch from 'isomorphic-fetch'

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
        return fetch(`http://curious-api.app/authentication/client`, {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.curious.v1+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'client_credentials',
                client_id: 'FCOdtUbeEwKVoY70eoEznOjAkD73UnCLdYTRuMmV',
                client_secret: 'RmeuI6faOUx9vW14gwzTxf8fENGTrf9Js8GSH3cr'
            })
        }).then(response => response.json())
        .then(json => dispatch(receieveClientAuthentication(json)))
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
