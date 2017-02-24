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
import ProfileView from './Profile/ProfileView.js'
import Location from './MapView/Location.js'
import History from './History/History.js'

export default class TabBar extends Component {
   constructor(props) {
      super(props)

      this.state = {
         // selectedTab: 'discover'
         // selectedTab: 'account'
         selectedTab: 'history'
      }
   }

    render() {
        return (
            <ViewContainer>
               <TabBarIOS
                  barTintColor="white"
                  tintColor="#FB5353">
                  <TabBarIOS.Item
                     title="History"
                     icon={require('../resources/receipts@4x.png')}
                     selected={this.state.selectedTab === 'history'}
                     onPress={() => {
                        this.setState({selectedTab: 'history'})
                     }}>

                     <History />
                  </TabBarIOS.Item>

                  <TabBarIOS.Item
                     title="Discover"
                     icon={require('../resources/discover@4x.png')}
                     selected={this.state.selectedTab === 'discover'}
                     onPress={() => {
                        this.setState({selectedTab: 'discover'})
                     }}>

                     <Location />
                  </TabBarIOS.Item>

                  <TabBarIOS.Item
                     title="Account"
                     icon={require('../resources/account@4x.png')}
                     selected={this.state.selectedTab === 'account'}
                     onPress={() => {
                        this.setState({selectedTab: 'account'})
                     }}>

                     <ProfileView />
                  </TabBarIOS.Item>

               </TabBarIOS>
            </ViewContainer>
        )
    }
}
