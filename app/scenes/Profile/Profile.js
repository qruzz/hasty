import React, { Component } from 'react'
import {
   View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity,
   Switch,
   ScrollView
} from 'react-native'

// User defined scenes, components, and services
import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'
import PaymentItem from '../../components/PaymentItem.js'

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

      // TODO: Append users with + userID: '/users/' + userID
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

            <View style={styles.navbar}>
               <Text style={styles.navbarText}>Account</Text>
            </View>

            <ScrollView>
               <View style={styles.profile}>
                  <View style={styles.profilePicture}>
                     <Image style={styles.picture} source={{uri: this.state.picture}} />
                  </View>
                  <View>
                     <Text style={styles.name}>{this.state.firstName} {this.state.lastName}</Text>
                  </View>
               </View>

               <View style={styles.discoverable}>
                  <Text style={styles.discoverableText}>Discoverable</Text>
                  <Switch
                     style={styles.switch}
                     disabled={false}
                     value={true}
                     onTintColor='#FB5353'
                  />
               </View>
               <View style={styles.split} />

               <View style={styles.payment}>
                  <PaymentItem
                     type='Address'
                     value='input'
                  />
                  <PaymentItem
                     type='City'
                     value='input'
                  />
                  <PaymentItem
                     type='State'
                     value='input'
                  />
                  <PaymentItem
                     type='Country'
                     value='input'
                  />
                  <PaymentItem
                     type='Card no.'
                     value='input'
                  />
               </View>

               <View style={styles.actions}>
                  <View style={styles.buttons}>
                     <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.signOut}>Sign Out</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.deleteAccount}>Delete Account</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ScrollView>
         </ViewContainer>
      )
   }
}

const styles = StyleSheet.create({
   navbar: {
      height: 64,
      borderBottomWidth: 1,
      borderColor: '#B2B2B2',
      alignItems: 'center'
   },
   navbarText: {
      fontSize: 17,
      color: '#FB5353',
      marginTop: 32
   },
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
   },
   discoverable: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#B2B2B2'
   },
   discoverableText: {
      fontSize: 17,
      marginTop: 11,
      marginBottom: 11,
      marginLeft: 20,
      marginRight: 220
   },
   switch: {
      marginTop: 6
   },
   split: {
      height: 20,
      backgroundColor: '#F9F9FA'
   },
   actions: {
      height: 168,
      backgroundColor: '#F9F9FA',
      alignItems: 'center',
      justifyContent: 'center'
   },
   buttonContainer: {
      height: 44,
      borderRadius: 1,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: '#C8C7CC',
      width: 315,
      alignItems: 'center',
      // TODO: Remember to use justifyContent on other things that needs vertical centering
      justifyContent: 'center',
      marginBottom: 20
   },
   signOut: {
      fontSize: 17,
      color: 'white'
   },
   deleteAccount: {
      fontSize: 17,
      color: '#FB5353'
   }
})
