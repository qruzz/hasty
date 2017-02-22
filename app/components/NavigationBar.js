import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class NavigationBar extends Component {
    render() {
        return (
           <View style={styles.navbar}>
             <Text style={styles.navbarText}>{this.props.title}</Text>
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
