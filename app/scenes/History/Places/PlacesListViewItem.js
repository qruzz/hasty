import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   Image,
   TouchableOpacity,
   AlertIOS
} from 'react-native'

import { Actions } from 'react-native-router-flux'

import SelectedPlacesView from './SelectedPlacesView.js'

export default class PlacesListViewItem extends Component {
   constructor(props) {
      super(props)

   }

   render() {
      return (
         <View style={styles.container}>
            <TouchableOpacity
               onPress={() => {
                  Actions.selectedPlace({
                     title: this.props.name,
                     coverPhoto: this.props.coverPhoto
                  })
               }}>
               <Image
                  style={styles.image}
                  source={{uri: this.props.coverPhoto}}>
                  <Text style={styles.name}>{this.props.name}</Text>
               </Image>
            </TouchableOpacity>
         </View>
         )
      }
   }

   const styles = StyleSheet.create({
      container: {
         marginLeft: 15,
         marginRight: 15,
         marginBottom: 10
      },
      image: {
         height: 96,
         borderRadius: 12
      },
      name: {
         backgroundColor: 'transparent',
         color: 'white',
         fontSize: 16,
         fontWeight: '600',
         marginLeft: 24,
         marginTop: 27
      }
   })
