import React from 'react-native';

// Import screens
import step1 from './screens/register/step1'
import step2 from './screens/register/step2'
import login from './screens/login'
import splash from './screens/splash'

/**
 * Selects a scene to show based on the ID of the route that was passed
 *
 * @param object route
 * @param object nav
 */
function sceneSelector(route, nav) {

    // Specify the default route that should be shown when no route is passed
    var Component = splash

    // If no route was specified then fallback to the default route
    if (route == undefined) {
        return <Component navigator={nav} />
    }

    // Figure out the right screen component to show based on the passed route ID
    switch (route.id) {
        case 'login':
            Component = login
            break
        case 'register.step1':
            Component = step1
            break
        case 'register.step2':
            Component = step2
            break
    }

    return <Component navigator={nav} />
}

export default sceneSelector
