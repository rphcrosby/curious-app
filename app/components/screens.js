import React from 'react-native';

// Import screens
import step1 from './screens/register/step1'
import step2 from './screens/register/step2'

function sceneSelector(route, nav) {
    var Component = step1

    if (route == undefined) {
        return <Component navigator={nav} />
    }

    switch (route.id) {
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
