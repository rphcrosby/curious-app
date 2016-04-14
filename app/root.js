import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root;
