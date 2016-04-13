import fetch from 'isomorphic-fetch'

const CURIOUS_BASE_URL = 'http://curious-api.app/'
const CURIOUS_API_VERSION = 'v1'
export const CURIOUS_CLIENT_ID = 'FCOdtUbeEwKVoY70eoEznOjAkD73UnCLdYTRuMmV'
export const CURIOUS_CLIENT_SECRET = 'RmeuI6faOUx9vW14gwzTxf8fENGTrf9Js8GSH3cr'

/**
 * Convenience method for making calls to the Curious API
 *
 * @param string method
 * @param string uri
 * @param string body
 * @param object state
 */
function curious(method, uri, body, state) {

    var headers = {
        'Accept': 'application/vnd.curious.' + CURIOUS_API_VERSION + '+json',
        'Content-Type': 'application/json'
    }

    // If a state was provided then check if a token has been defined, if so
    // use it to make API calls
    if (state !== undefined) {
        var token = state.api.authentication.access_token
        if (token) {
            headers['Authorization'] = 'Bearer ' + token
        }
    }

    // Perform the API call and return a promise
    return fetch(CURIOUS_BASE_URL + uri, {
            method,
            body,
            headers
        }).then(response => response.json())
}

export default curious
