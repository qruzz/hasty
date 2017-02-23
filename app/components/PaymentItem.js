import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   TextInput
} from 'react-native'

import { updateUserData } from '../services/Firebase.js'

export default class PaymentItem extends Component {
   constructor(props) {
      super(props)

      this.state = {
         address: 'input'
      }
   }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.type}>{this.props.type}</Text>
            <TextInput
               style={styles.input}
               value={this.state.address}
               onFocus={() => {this.setState({address: ''})}}
               onChangeText={(text) => {this.setState({address: text})}}
               // TODO: import the userID of logged in user
               onEndEditing={() => {updateUserData('10212492588289260', 'address', this.state.address)}}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      height: 44,
      borderBottomWidth: 1,
      borderColor: '#c8c7cc',
      flexDirection: 'row'
   },
   type: {
      fontSize: 17,
      width: 100,
      marginLeft: 20,
      marginTop: 12,
      marginRight: 20
   },
   input: {
      height: 44,
      width: 270,
      fontSize: 17,
      color: '#C7C7CD'
   }
})
