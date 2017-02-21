import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { database } from '../../services/Firebase.js'
import { userID } from '../Authentication/Functions.js'

export default class ProfileInformation extends Component {
   constructor(props) {
      super(props)

      this.state = {
         firstName: '',
         lastName: '',
         picture: ''
      }

      // TODO: Append users with + userID: '/users/' + userID
      database.ref('/users/10212492588289260').once('value').then(function(snapshot) {
         this.setState({firstName: snapshot.val().first_name})
         this.setState({lastName: snapshot.val().last_name})
         this.setState({picture: snapshot.val().profile_picture})
      }.bind(this))
   }

    render() {
        return (
           <View style={styles.profile}>
             <View style={styles.profilePicture}>
                 <Image style={styles.picture} source={{uri: this.state.picture}} />
             </View>
             <View>
                 <Text style={styles.name}>{this.state.firstName} {this.state.lastName}</Text>
             </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
   profile: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#B2B2B2'
   },
   profilePicture: {
      marginTop: 30,
      marginBottom: 30,
   },
   picture: {
      height: 162,
      width: 162,
      borderRadius: 12
   },
   name: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 30
   }
})
