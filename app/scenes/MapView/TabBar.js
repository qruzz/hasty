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

// const profileIcon = <Icon

export default class TabBar extends Component {
    render() {
        return (
            <ViewContainer>
               <TabBarIOS>
                  <Icon.TabBarItemIOS
                     title="Receipts"
                     iconName={"ios-filing"}>
                  </Icon.TabBarItemIOS>
                  <Icon.TabBarItemIOS
                     title="Explore"
                     iconName={"ios-compass"}>
                  </Icon.TabBarItemIOS>
                  <Icon.TabBarItemIOS
                     title="Profile"
                     iconName={"ios-contact"}>
                  </Icon.TabBarItemIOS>
               </TabBarIOS>
            </ViewContainer>
        )
    }
}
