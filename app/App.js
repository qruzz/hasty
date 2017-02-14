import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// npm library imports
import { Router, Scene } from 'react-native-router-flux'

// user defined scenes, components, and services
import ViewContainer from './components/ViewContainer.js'
import Authentication from './scenes/Authentication.js'

export default class App extends Component {
    render() {
        return (
           <Router>
             <Scene key={'root'}>
                <Scene
                   key={'authentication'}
                   component={Authentication}
                   initial={true}
                   hideNavBar={true} />
             </Scene>

           </Router>
        )
    }
}
