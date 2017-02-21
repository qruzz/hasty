import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   TextInput
} from 'react-native'

export default class PaymentItem extends Component {
   constructor(props) {
      super(props)

   }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.type}>{this.props.type}</Text>
            <Text style={styles.value}>{this.props.value}</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        borderBottomWidth: 1,
        borderColor: '#B2B2B2',
        flexDirection: 'row'
    },
    type: {
      fontSize: 17,
      width: 100,
      marginLeft: 20,
      marginTop: 12,
      marginRight: 40
   },
   value: {
      fontSize: 17,
      marginTop: 12,
      color: '#C7C7CD'
   }
})
