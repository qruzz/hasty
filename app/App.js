import React, { Component } from 'react'
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

// npm library imports
import { Router, Scene } from 'react-native-router-flux'

// user defined scenes, components, and services
import Authentication from './scenes/Authentication/Authentication.js'
import Location from './scenes/MapView/Location.js'
import TabBar from './scenes/MapView/TabBar.js'

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
               <Scene
                  key={'location'}
                  component={Location}
                  //  initial={true}
                  hideNavBar={true} />
               <Scene
                  key={'tabbar'}
                  component={TabBar}
                  // initial={true}
                  hideNavBar={true} />
            </Scene>
         </Router>
      )
   }
}
