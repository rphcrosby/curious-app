// Import react components
import React, {
    Component,
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'

// Import connection states
import {
    AUTHENTICATION_STATE_DISCONNECTED,
    AUTHENTICATION_STATE_CONNECTING,
    AUTHENTICATION_STATE_CLIENT_CONNECTED,
    AUTHENTICATION_STATE_FAILED
} from '../../api/authentication/reducers'

// Import API actions
import { sendClientAuthentication } from '../../api/authentication/actions'

// Import stylesheets
import { splash } from '../../stylesheets/screens'

/**
 * Determine what parts of the state to pass to the component
 *
 * @param object state
 */
const mapStateToProps = (state) => {
    return {
        authentication: state.api.authentication
    };
}

class Splash extends Component
{
    componentDidMount() {
        this.props.dispatch(sendClientAuthentication())
    }

    goToLogin() {
        this.props.navigator.push({ id: 'login' })
    }

    getConnectionStatus() {
        switch (this.props.authentication.status) {
            case 'AUTHENTICATION_STATE_CONNECTING':
                return 'CONNECTING TO CURIOUS'
            case 'AUTHENTICATION_STATE_CLIENT_CONNECTED':
                setTimeout(() => {
                    this.goToLogin()
                }, 1000)
                return 'CONNECTED'
            case 'AUTHENTICATION_STATE_FAILED':
                return 'THERE WAS A PROBLEM CONNECTING TO CURIOUS'
        }
    }

    render() {
        const { authentication } = this.props
        return (
            <View style={splash.screen}>
                <Text style={splash.status}>{ this.getConnectionStatus() }</Text>
            </View>
        )
    }
}

Splash = connect(mapStateToProps)(Splash)

export default Splash;
