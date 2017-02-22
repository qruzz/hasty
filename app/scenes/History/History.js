import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'

import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'
import NavigationBar from '../../components/NavigationBar.js'

import HistoryListView from './HistoryListView.js'

export default class History extends Component {
   render() {
      return (
         <ViewContainer>
            <StatusbarBackground />

            <NavigationBar title="Receipts" />

            <View style={styles.history}>
               <Text style={styles.historyText}>HISTORY</Text>
            </View>

            <HistoryListView />

         </ViewContainer>
      )
   }
}

const styles = StyleSheet.create({
   history: {
      height: 45,
      justifyContent: 'center'
   },
   historyText: {
      fontWeight: '600',
      color: '#C8C7CD',
      marginLeft: 20
   }
})
