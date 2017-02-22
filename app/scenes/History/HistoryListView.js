import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   ListView
} from 'react-native'

import HistoryListViewItem from './HistoryListViewItem.js'

export default class ReceiptsListView extends Component {
   constructor(props) {
      super(props)

      const ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => {r1 !== r2}
      })

      this.state = {
         dataSource: ds.cloneWithRows(['row 1', 'row 2'])
      }
   }

   render() {
      return (
         <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <HistoryListViewItem venue={rowData} price="USD270"/>}
         />
      )
   }
}
