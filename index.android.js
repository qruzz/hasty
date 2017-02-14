import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App.js'

export default class hasty extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('hasty', () => hasty);
