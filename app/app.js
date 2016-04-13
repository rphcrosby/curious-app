import React, { Component, Navigator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Register from './components/screens/register'
import RegisterConfirmation from './components/screens/registerconfirmation'

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
                style={styles.wrapper}
                renderScene={this._renderScene}
            />
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});

App = connect()(App)

export default App;
