const TYPE_TAG_SEARCH = 'TYPE_TAG_SEARCH'

/**
 * Action - Typing in the tag search field on step 3 of registration
 *
 */
export function typeTagSearch(text) {
    return {
        type: TYPE_TAG_SEARCH,
        text
    }
}
