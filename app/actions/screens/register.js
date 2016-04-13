const RESET_REGISTER_FORM = 'RESET_REGISTER_FORM'
const TYPE_REGISTER_USERNAME = 'TYPE_REGISTER_USERNAME'
const TYPE_REGISTER_EMAIL = 'TYPE_REGISTER_EMAIL'
const TYPE_REGISTER_PASSWORD = 'TYPE_REGISTER_PASSWORD'
const TYPE_REGISTER_PASSWORD_CONFIRMATION = 'TYPE_REGISTER_PASSWORD_CONFIRMATION'

/**
 * Action - Resets the register form
 *
 */
export function resetRegisterForm() {
    return {
        type: RESET_REGISTER_FORM
    }
}

/**
 * Action - Typing in the username field on the registration screen
 *
 */
export function typeRegisterUsername(text) {
    return {
        type: TYPE_REGISTER_USERNAME,
        text
    }
}

/**
 * Action - Typing in the email field on the registration screen
 *
 */
export function typeRegisterEmail(text) {
    return {
        type: TYPE_REGISTER_EMAIL,
        text
    }
}

/**
 * Action - Typing in the password field on the registration screen
 *
 */
export function typeRegisterPassword(text) {
    return {
        type: TYPE_REGISTER_PASSWORD,
        text
    }
}

/**
 * Action - Typing in the password confirmations field on the registration screen
 *
 */
export function typeRegisterPasswordConfirmation(text) {
    return {
        type: TYPE_REGISTER_PASSWORD_CONFIRMATION,
        text
    }
}
