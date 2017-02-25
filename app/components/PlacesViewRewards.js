import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'

import ViewContainer from './ViewContainer.js'

export default class PlacesViewRewards extends Component {
   constructor(props) {
      super(props)

      this.state = {
         item: 'coffee',
         capacity: 10,
         progress: 5
      }
   }

   render() {

      let fillWidth = (290 / this.state.capacity) * this.state.progress

      return (
         <ViewContainer>
            <View style={styles.container}>
               <Text style={styles.description}>{'Get 1 ' + this.state.item + ' for every ' + this.state.capacity + '!'}</Text>
               <View style={styles.meter}>
                  <View width={fillWidth} style={styles.ticks} />
               </View>
               <Text style={styles.counter}>{this.state.progress + ' / ' + this.state.capacity}</Text>
            </View>
         </ViewContainer>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center'
   },
   description: {
      fontSize: 14,
      marginTop: 15
   },
   meter: {
      marginTop: 15,
      width: 290,
      height: 30,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#76C445',
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'stretch'
   },
   ticks: {
      backgroundColor: '#76C445'
   },
   counter: {
      marginTop: 15,
      color: '#76C445'
   }
})
