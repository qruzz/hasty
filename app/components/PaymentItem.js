import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   TextInput
} from 'react-native'

import { updateUserData, database } from '../services/Firebase.js'

export default class PaymentItem extends Component {

   constructor(props) {
      super(props)

      this.state = {
         input: ''
      }
   }
   
   // TODO: Append users with + userID: '/users/' + userID
   componentDidMount() {
      database.ref('/users/10212492588289260').once('value').then(function(snapshot) {
         if (this.props.identifier == "address") {
            if (snapshot.val().address !== "") {
               this.setState({input: snapshot.val().address})
            }
         } else if (this.props.identifier == "city") {
            if (snapshot.val().city !== "") {
               this.setState({input: snapshot.val().city})
            }
         } else if (this.props.identifier == "area") {
            if (snapshot.val().area !== "") {
               this.setState({input: snapshot.val().area})
            }
         } else if (this.props.identifier == "country") {
            if (snapshot.val().country !== "") {
               this.setState({input: snapshot.val().country})
            }
         } else if (this.props.identifier == "card") {
            if (snapshot.val().card !== "") {
               this.setState({input: snapshot.val().card})
            }
         }
      }.bind(this))
   }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.type}>{this.props.type}</Text>
            <TextInput
               style={styles.input}
               value={this.state.input}
               placeholder="input"
               onFocus={() => {
                  this.setState({input: ''})
               }}
               onChangeText={(text) => {
                  this.setState({input: text})
               }}
               // TODO: import the userID of logged in user
               onEndEditing={() => {
                  console.log(this.props.identifier)
                  console.log(this.state.input)
                  updateUserData('10212492588289260', this.props.identifier, this.state.input)
               }}
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
