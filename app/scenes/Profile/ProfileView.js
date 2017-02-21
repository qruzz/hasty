import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   Switch,
   ScrollView
} from 'react-native'

// User defined scenes, components, and services
import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'
import ProfilePayment from './ProfilePayment.js'
import ProfileActions from './ProfileActions.js'
import ProfileInformation from './ProfileInformation.js'
import ProfileDiscoverable from './ProfileDiscoverable.js'

export default class ProfileView extends Component {
   render() {
      return (
         <ViewContainer>
            <StatusbarBackground />

            <View style={styles.navbar}>
               <Text style={styles.navbarText}>Account</Text>
            </View>

            <ScrollView>
               
               <ProfileInformation />
               <ProfileDiscoverable />

               <View style={styles.split} />

               <ProfilePayment />
               <ProfileActions />

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
   split: {
      height: 20,
      backgroundColor: '#F9F9FA'
   }
})
