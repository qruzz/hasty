import React, { Component } from 'react'
import {
   View,
   Text,
   ListView
} from 'react-native'

export default class ReceiptsListView extends Component {
   constructor(props) {
      super(props)

      const dsR = new ListView.DataSource({
         rowHasChanged: (r1, r2) => {r1 !== r2}
      })

      this.state = {
         dataSourceReceipts: dsR.cloneWithRows(['row 1', 'row 2'])
      }
   }

   // _renderRow(rowData) {
   //    return <ReceiptsListViewItem />
   // }

    render() {
        return (
            <ListView
               source={this.state.dataSourceReceipts}
               renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        )
    }
}
