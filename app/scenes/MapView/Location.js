import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Dimensions,
   Text
} from 'react-native'

// npm library imports
import MapView from 'react-native-maps'

// user defined scenes, components, and services
import ViewContainer from '../../components/ViewContainer.js'
import PlacesListViewItem from '../History/Places/PlacesListViewItem.js'

const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


export default class Location extends Component {
   constructor(props) {
      super(props)

      this.state = {
         initialPosition: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0
         },
         markerPosition: {
            latitude: 0,
            longitude: 0
         },
         lastPosition: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0
         }
      }
   }

   // Specifies the unique ID of the watchPosition call to cancel. The ID is returned by the watchPosition call.
   watchID: ?number = null

   // Call when the component mounted
   componentDidMount() {
      // Get the current position from the build in geolocation chip, and store in state
      navigator.geolocation.getCurrentPosition((position) => {
         // Parse the position variables to floats
         var lat = parseFloat(position.coords.latitude)
         var long = parseFloat(position.coords.longitude)

         // Create object with the current position
         var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
         }

         // Set the current position and the marker in sate
         this.setState({initialPosition: initialRegion})
         this.setState({markerPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

      // Create a event watcher for changes in position from the geolocation chip
      this.watchID = navigator.geolocation.watchPosition((position) => {
         // Parse the position variables to floats
         var lat = parseFloat(position.coords.latitude)
         var long = parseFloat(position.coords.longitude)

         // Create object with the current position
         var lastRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
         }

         // Set the current position and the marker in sate
         this.setState({initialPosition: lastRegion})
         this.setState({markerPosition: lastRegion})
      })
   }

   // Will stop watching for changes in position when the component is unmounted
   componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
   }

   render() {
      return (
         <View style={styles.container}>
            <MapView
               style={styles.map}
               region={this.state.initialPosition}
            >
               <MapView.Marker
                  coordinate={this.state.markerPosition}>
                  <View style={styles.radius}>
                     <View style={styles.marker} />
                  </View>
               </MapView.Marker>
            </MapView>
            <View style={styles.placesContainer}>
               <View style={styles.placesList}>
                  <Text style={styles.nearby}>NEARBY</Text>
                  <PlacesListViewItem name="Testing" coverPhoto="https://source.unsplash.com/random" />
               </View>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      position: 'relative',
      height: SCREEN_HEIGHT - 40,
      justifyContent: 'flex-end',
      alignItems: 'stretch',
   },
   map: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute'
   },
   radius: {
      height: 50,
      width: 50,
      borderRadius: 50 / 2,
      overflow: 'hidden',
      backgroundColor: 'rgba(0,122,255,0.1)',
      borderWidth: 1,
      borderColor: 'rgba(0,122,255,0.3)',
      alignItems: 'center',
      justifyContent: 'center'
   },
   marker: {
      height: 20,
      width: 20,
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 20 / 2,
      overflow: 'hidden',
      backgroundColor: '#007AFF'
   },
   placesContainer: {
      backgroundColor: 'transparent',
      alignItems: 'stretch'
   },
   placesList: {
      backgroundColor: 'white',
      height: 150,
      paddingTop: 8.5,
      borderRadius: 20,
   },
   nearby: {
      marginLeft: 15,
      marginBottom: 18.5,
      color: '#c8c7cc'
   }
})
