import React, { Component } from 'react'
import {
   View,
   TabBarIOS,
   StyleSheet,
   Text
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

// user defined scenes, components, and services
import ViewContainer from '../components/ViewContainer.js'
import Profile from './Profile/Profile.js'
import Location from './MapView/Location.js'
import Receipts from './Receipts/Receipts.js'

export default class TabBar extends Component {
   constructor(props) {
      super(props)

      this.state = {
         selectedTab: 'explore'
         // selectedTab: 'profile'
      }
   }

    render() {
        return (
            <ViewContainer>
               <TabBarIOS>
                  <Icon.TabBarItemIOS
                     title="Receipts"
                     iconName={"ios-filing"}
                     selected={this.state.selectedTab === 'receipts'}
                     onPress={() => {
                        this.setState({selectedTab: 'receipts'})
                     }}>

                     <Receipts />
                  </Icon.TabBarItemIOS>

                  <Icon.TabBarItemIOS
                     title="Explore"
                     iconName={"ios-compass"}
                     selected={this.state.selectedTab === 'explore'}
                     onPress={() => {
                        this.setState({selectedTab: 'explore'})
                     }}>

                     <Location />
                  </Icon.TabBarItemIOS>

                  <Icon.TabBarItemIOS
                     title="Profile"
                     iconName={"ios-contact"}
                     selected={this.state.selectedTab === 'profile'}
                     onPress={() => {
                        this.setState({selectedTab: 'profile'})
                     }}>

                     <Profile />
                  </Icon.TabBarItemIOS>

               </TabBarIOS>
            </ViewContainer>
        )
    }
}
