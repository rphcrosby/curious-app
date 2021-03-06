import curious from '../../api'

const REQUEST_TAG_SUBSCRIBE = 'REQUEST_TAG_SUBSCRIBE'
const RECEIVE_TAG_SUBSCRIBE = 'RECEIVE_TAG_SUBSCRIBE'
const REQUEST_TAG_UNSUBSCRIBE = 'REQUEST_TAG_UNSUBSCRIBE'
const RECEIVE_TAG_UNSUBSCRIBE = 'RECEIVE_TAG_UNSUBSCRIBE'

/**
 * Action - Begin making a request to subscribe a user to a tag
 *
 */
export function requestTagSubscribe() {
    return {
        type: REQUEST_TAG_SUBSCRIBE
    }
}

/**
 * Action - Send the susbcribe to tag request
 *
 */
export function sendTagSubscribe(tags) {
    return (dispatch, getState) => {
        dispatch(requestTagSubscribe())
        var user = getState().api.authentication.user
        return curious(
            'POST',
            'users/' + user.property('id') + '/tags',
            JSON.stringify({
                'tags': tags
            }),
            getState()
        ).then(json => {
            return dispatch(receiveTagSubscribe(json));
        }).done()
    }
}

/**
 * Action - Receive the subscribe to tag response
 *
 */
export function receiveTagSubscribe(json) {
    return {
        type: RECEIVE_TAG_SUBSCRIBE,
        response: json
    }
}

/**
 * Action - Begin making a request to subscribe a user to a tag
 *
 */
export function requestTagUnsubscribe() {
    return {
        type: REQUEST_TAG_UNSUBSCRIBE
    }
}

/**
 * Action - Send the susbcribe to tag request
 *
 */
export function sendTagUnsubscribe(tags) {
    return (dispatch, getState) => {
        dispatch(requestTagUnsubscribe())
        var user = getState().api.authentication.user
        return curious(
            'DELETE',
            'users/' + user.property('id') + '/tags',
            JSON.stringify({
                'tags': tags
            }),
            getState()
        ).then(json => {
            return dispatch(receiveTagUnsubscribe(json));
        }).done()
    }
}

/**
 * Action - Receive the subscribe to tag response
 *
 */
export function receiveTagUnsubscribe(json) {
    return {
        type: RECEIVE_TAG_UNSUBSCRIBE,
        response: json
    }
}
