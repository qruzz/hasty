import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class SelectedPlacesListViewItem extends Component {
   render() {
      return (
         <View style={styles.vertical}>
            <View style={styles.container}>
               <Text style={styles.item}>
                  Burger
               </Text>
               <Text style={styles.price}>
                  USD271
               </Text>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   vertical: {
      justifyContent: 'center',
      height: 44,
      borderBottomWidth: 1,
      borderColor: '#c8c7cc'
   },
   container: {
      alignSelf: 'stretch',
      flexDirection: 'row'
   },
   item: {
      fontSize: 17,
      color: '#030303',
      marginRight: 250
   },
   price: {
      fontSize: 17,
      color: '#8f8e94',
      marginRight: 12
   }
})
