const SELECT_DISPLAY_PICTURE = 'SELECT_DISPLAY_PICTURE'

/**
 * Action - A user selects a display picture from their library or takes on using
 * their camera
 *
 */
export function selectDisplayPicture(data) {
    return {
        type: SELECT_DISPLAY_PICTURE,
        data
    }
}
