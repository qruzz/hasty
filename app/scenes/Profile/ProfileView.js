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
import NavigationBar from '../../components/NavigationBar.js'

export default class ProfileView extends Component {
   render() {
      return (
         <ViewContainer>
            <StatusbarBackground />

            <NavigationBar title="Account" />

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
   split: {
      height: 20,
      backgroundColor: '#F9F9FA'
   }
})
