import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   SegmentedControlIOS
} from 'react-native'

import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'
import NavigationBar from '../../components/NavigationBar.js'

import PlacesListView from './Places/PlacesListView.js'

export default class History extends Component {
   constructor(props) {
      super(props)

      this.state = {
         selectedIndex: 0
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

            <PlacesListView />

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
