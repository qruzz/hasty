import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   Image,
   ListView
} from 'react-native'

import ViewContainer from '../../../components/ViewContainer.js'
import StatusbarBackground from '../../../components/StatusbarBackground.js'
import NavigationBar from '../../../components/NavigationBar.js'

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

            <NavigationBar title={this.props.title} />

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
   }
})
