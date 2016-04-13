const TYPE_REGISTER_USERNAME = 'TYPE_REGISTER_USERNAME'
const TYPE_REGISTER_EMAIL = 'TYPE_REGISTER_EMAIL'
const TYPE_REGISTER_PASSWORD = 'TYPE_REGISTER_PASSWORD'
const TYPE_REGISTER_PASSWORD_CONFIRMATION = 'TYPE_REGISTER_PASSWORD_CONFIRMATION'

export function typeRegisterUsername(text) {
    return {
        type: TYPE_REGISTER_USERNAME,
        text
    }
}

export function typeRegisterEmail(text) {
    return {
        type: TYPE_REGISTER_EMAIL,
        text
    }
}

export function typeRegisterPassword(text) {
    return {
        type: TYPE_REGISTER_PASSWORD,
        text
    }
}

export function typeRegisterPasswordConfirmation(text) {
    return {
        type: TYPE_REGISTER_PASSWORD_CONFIRMATION,
        text
    }
}
