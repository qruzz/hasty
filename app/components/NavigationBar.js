import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class NavigationBar extends Component {
   constructor(props) {
      super(props)
   }

   _renderBackButton() {
      if (this.props.back === 1) {
         return (
            <View>
               <Text>Back</Text>
            </View>
         )
      }
   }

    render() {
        return (
           <View style={styles.navbar}>
             {this._renderBackButton()}
             <Text style={styles.navbarText}>{this.props.title} {this.props.back}</Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
   navbar: {
      height: 64,
      borderBottomWidth: 1,
      borderColor: '#c8c7cc',
      alignItems: 'center'
   },
   navbarText: {
      fontSize: 19,
      color: '#FB5353',
      marginTop: 32
   }
})
