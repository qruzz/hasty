import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   AlertIOS
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import _ from 'lodash'

export default class HistoryListViewItem extends Component {
   render() {
      return (
         <View style={styles.borderBottom}>
            <TouchableOpacity style={styles.container} onPress={() => {
               AlertIOS.alert('Testing something')
            }}>
               <Text style={styles.venue}>
                  {_.capitalize(this.props.venue)}
               </Text>
               <Text style={styles.price}>
                  {this.props.price}
               </Text>
               <Icon name="ios-arrow-forward" size={22} color="#c7c7cc" />
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   borderBottom: {
      borderBottomWidth: 1,
      borderColor: '#c8c7cc',
      marginLeft: 20,
      height: 44,
      justifyContent: 'center',
   },
   container: {
      flexDirection: 'row',
      alignSelf: 'stretch'
   },
   venue: {
      fontSize: 17,
      color: '#030303',
      marginRight: 250
   },
   price: {
      fontSize: 17,
      color: '#8f8e94',
      marginRight: 12
   },

})
