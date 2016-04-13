import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';
import { sendClientAuthentication } from './actions/api/authentication'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

// Authenticate with the Curious API
store.dispatch(sendClientAuthentication());

export default Root;
