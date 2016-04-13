import React, { Component, Navigator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Register from './components/screens/register'
import RegisterConfirmation from './components/screens/registerconfirmation'
import main from './stylesheets/main'

class App extends Component {

    _renderScene(route, nav) {
        var Component = Register;
        if (route !== undefined) {
            if (route.id === 'registerconfirmation') {
                Component = RegisterConfirmation;
            }
        }
        return <Component navigator={nav} />
    }

    render() {
        return (
            <Navigator
                style={main.wrapper}
                renderScene={this._renderScene}
            />
        )
    }
}

App = connect()(App)

export default App;
