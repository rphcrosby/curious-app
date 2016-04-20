import curious from '../../api'

const REQUEST_TAG_SUBSCRIBE = 'REQUEST_TAG_SUBSCRIBE'
const RECEIVE_TAG_SUBSCRIBE = 'RECEIVE_TAG_SUBSCRIBE'
const REQUEST_TAG_UNSUBSCRIBE = 'REQUEST_TAG_UNSUBSCRIBE'
const RECEIVE_TAG_UNSUBSCRIBE = 'REQUEST_TAG_UNSUBSCRIBE'

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
export function sendTagSubscribe(id) {
    return (dispatch, getState) => {
        dispatch(requestTagSubscribe())
        return curious(
            'POST',
            'tags/' + id + '/subscribers',
            '{}',
            getState()
        ).then(json => {
            return dispatch(receiveTagSubscribe());
        }).done()
    }
}

/**
 * Action - Receive the subscribe to tag response
 *
 */
export function receiveTagSubscribe() {
    return {
        type: RECEIVE_TAG_SUBSCRIBE
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
export function sendTagUnsubscribe(id) {
    return (dispatch, getState) => {
        dispatch(requestTagUnsubscribe())
        return curious(
            'DELETE',
            'tags/' + id + '/subscribers',
            '{}',
            getState()
        ).then(json => {
            return dispatch(receiveTagUnsubscribe());
        }).done()
    }
}

/**
 * Action - Receive the subscribe to tag response
 *
 */
export function receiveTagUnsubscribe() {
    return {
        type: RECEIVE_TAG_UNSUBSCRIBE
    }
}
