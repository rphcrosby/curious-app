import React, { Component, Navigator } from 'react-native';
import { connect } from 'react-redux';
import main from './stylesheets/main'
import sceneSelector from './components/screens'

class App extends Component {
    render() {
        return (
            <Navigator
                style={main.wrapper}
                renderScene={sceneSelector}
            />
        )
    }
}

App = connect()(App)

export default App;
