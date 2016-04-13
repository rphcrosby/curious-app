const TYPE_LOGIN_USERNAME = 'TYPE_LOGIN_USERNAME'
const TYPE_LOGIN_PASSWORD = 'TYPE_LOGIN_PASSWORD'

/**
 * Action - Typing in the username field on the registration screen
 *
 */
export function typeLoginUsername(text) {
    return {
        type: TYPE_LOGIN_USERNAME,
        text
    }
}

/**
 * Action - Typing in the password field on the registration screen
 *
 */
export function typeLoginPassword(text) {
    return {
        type: TYPE_LOGIN_PASSWORD,
        text
    }
}
