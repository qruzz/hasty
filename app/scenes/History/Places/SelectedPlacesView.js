import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   Image,
   ListView,
   TouchableOpacity
} from 'react-native'

import ViewContainer from '../../../components/ViewContainer.js'
import StatusbarBackground from '../../../components/StatusbarBackground.js'
import NavigationBar from '../../../components/NavigationBar.js'

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'

export default class SelectedPlacesView extends Component {
   constructor(props) {
      super(props)

      const ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => {r1 !== r2}
      })

      this.state = {
         dataSource: ds.cloneWithRows(['row 1', 'row 2'])
      }
   }

   _renderRow(rowData) {
      return (
         <View><Text>{rowData}</Text></View>
      )
   }

   render() {
      return (
         <ViewContainer>
            <StatusbarBackground />

            <View style={styles.navbar}>
               <TouchableOpacity style={styles.exit} onPress={() => {Actions.pop()}}>
                  <Icon name="ios-close" size={35} color={"#c8c7cc"}/>
               </TouchableOpacity>
               <Text style={styles.navbarText}>{this.props.title}</Text>
            </View>

            <View style={styles.container}>
               <View>
                  <Image
                     style={styles.coverPhoto}
                     source={{uri: this.props.coverPhoto}}
                  />
               </View>
               <View style={styles.rewards}>

               </View>
               <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
               />
            </View>
         </ViewContainer>
      )
   }
}

const styles = StyleSheet.create({
    coverPhoto: {
        height: 192
    },
    rewards: {
      height: 124
   },
   navbar: {
      height: 64,
      borderBottomWidth: 1,
      borderColor: '#c8c7cc',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
   },
   navbarText: {
      fontSize: 19,
      color: '#FB5353',
      alignSelf: 'center'
   },
   exit: {
      marginLeft: 20,
      alignSelf: 'flex-start'
   }
})