import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Dimensions
} from 'react-native'

import MapView from 'react-native-maps'
import ViewContainer from '../../components/ViewContainer.js'

const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = width / height
const LATITUDE = 54.913811
const LONGITUDE = 9.792178
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


export default class Location extends Component {
   constructor(props) {
      super(props)

      this.state = {
         region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
         }
      }
   }

   render() {
      return (
         <View style={styles.container}>
            <MapView
               style={styles.map}
               initialRegion={this.state.region}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: SCREEN_HEIGHT - 40
    },
    map: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute'
   }
})