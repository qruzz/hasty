import React, { Component } from 'react'
import {
   View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity
} from 'react-native'

// user defined scenes, components, and services
import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'

import { database } from '../../services/Firebase.js'
import { userID } from '../Authentication/Functions.js'

export default class Profile extends Component {
   constructor(props) {
      super(props)

      this.state = {
         firstName: '',
         lastName: '',
         picture: ''
      }

      // TODO: Append users with + userID
      database.ref('/users/10212492588289260').once('value').then(function(snapshot) {
         this.setState({firstName: snapshot.val().first_name})
         this.setState({lastName: snapshot.val().last_name})
         this.setState({picture: snapshot.val().profile_picture})
      }.bind(this))
   }

   render() {
      return (
         <ViewContainer>
            <StatusbarBackground />

            <View style={styles.profile}>
               <View style={styles.profilePicture}>
                  <Image style={styles.picture} source={{uri: this.state.picture}} />
               </View>

               <View style={styles.information}>
                  <Text style={styles.name}>{this.state.firstName} {this.state.lastName}</Text>
                  <Text style={styles.preferences}>likes flat whites</Text>
               </View>
            </View>

            <View style={styles.payment}>

            </View>
         </ViewContainer>
      )
   }
}

const styles = StyleSheet.create({
   profile: {
      flex: 1,
      flexDirection: 'row'
   },
   profilePicture: {
      height: 50,
      width: 50,
   },
   picture: {
      height: 50,
      width: 50
   },
   information: {

   },
   name: {

   },
   preferences: {

   },
   payment: {

   }
})
