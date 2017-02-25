import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   ListView
} from 'react-native'

import data from '../../../services/Places.json'
import { database } from '../../../services/Firebase.js'

import FBSDK, { AccessToken } from 'react-native-fbsdk'

import PlacesListViewItem from './PlacesListViewItem.js'

export default class PlacesListView extends Component {
   constructor(props) {
      super(props)

      const ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => {r1 !== r2}
      })

      this.state = {
         dataSource: ds.cloneWithRows(data.places)
      }
   }

   // componentDidMount() {
   //    database.ref('places/').once('value').then(function(snapshot) {
   //       this.setState({
   //          dataSource: ds.cloneWithRows(snapshot.val())
   //       })
   //    })
   // }

   _renderRow(rowData) {
      return (
         <PlacesListViewItem name={rowData.name} coverPhoto={rowData.cover_photo} />
      )
   }

   render() {
      return (
         <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
         />
      )
   }
}
