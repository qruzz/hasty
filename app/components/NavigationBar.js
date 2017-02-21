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
      borderColor: '#B2B2B2',
      alignItems: 'center'
   },
   navbarText: {
      fontSize: 17,
      color: '#FB5353',
      marginTop: 32
   }
})
