import React, { Component } from 'react'
import {
   View,
   TabBarIOS,
   StyleSheet,
   Text
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import Location from './Location.js'
import ViewContainer from '../../components/ViewContainer.js'
import Profile from '../Profile.js'

export default class TabBar extends Component {
   constructor(props) {
      super(props)

      this.state = {
         selectedTab: 'explore'
      }
   }

    render() {
        return (
            <ViewContainer>
               <TabBarIOS>
                  <Icon.TabBarItemIOS
                     title="Receipts"
                     iconName={"ios-filing"}
                     selected={this.state.selectedTab === 'receipts'}>


                  </Icon.TabBarItemIOS>

                  <Icon.TabBarItemIOS
                     title="Explore"
                     iconName={"ios-compass"}
                     selected={this.state.selectedTab === 'explore'}>

                     <Location />
                  </Icon.TabBarItemIOS>

                  <Icon.TabBarItemIOS
                     title="Profile"
                     iconName={"ios-contact"}
                     selected={this.state.selectedTab === 'profile'}>

                     <Profile />
                  </Icon.TabBarItemIOS>

               </TabBarIOS>
            </ViewContainer>
        )
    }
}
