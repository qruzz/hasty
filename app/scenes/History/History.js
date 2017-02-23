import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   SegmentedControlIOS,
   ListView
} from 'react-native'

import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'
import NavigationBar from '../../components/NavigationBar.js'


import ReceiptsListViewItem from './Receipts/ReceiptsListViewItem.js'
import PlacesListViewItem from './Places/PlacesListViewItem.js'

import data from '../../services/Places.json'

export default class History extends Component {
   constructor(props) {
      super(props)

      const ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => {r1 !== r2}
      })

      this.state = {
         selectedIndex: 0,
         dataSourcePlaces: ds.cloneWithRows(data.places),
         dataSourceReceipts: ds.cloneWithRows(data)
      }
   }

   _renderRowPlaces(rowData) {
      return (
         <PlacesListViewItem name={rowData.name} coverPhoto={rowData.cover_photo} />
      )
   }

   _renderRowReceipts(rowData) {
      return (
         <ReceiptsListViewItem venue="Kislings" price="USD271" />
      )
   }

   _renderView() {
      if(this.state.selectedIndex === 0) {
         return (
            <ListView
               dataSource={this.state.dataSourcePlaces}
               renderRow={this._renderRowPlaces}
            />
         )
      } else {
         return (
            <ListView
               dataSource={this.state.dataSourceReceipts}
               renderRow={this._renderRowReceipts}
            />
         )
      }
   }

   render() {
      return (
         <ViewContainer>
            <StatusbarBackground />

            <NavigationBar title="History" />

            <SegmentedControlIOS
               style={styles.segmentedControl}
               values={['Places', 'Receipts']}
               selectedIndex={this.state.selectedIndex}
               tintColor="#fb5353"
               onChange={(event) => {
                  this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex})
                  console.log(this.state.selectedIndex)
               }}
            />

            <View style={styles.hairline} />

            {this._renderView()}

         </ViewContainer>
      )
   }
}

const styles = StyleSheet.create({
   segmentedControl: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 8,
      marginRight: 8
   },
   hairline: {
      height: 1,
      backgroundColor: '#c8c8c8'
   }
})
