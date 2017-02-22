import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

export default class ProfileDiscoverable extends Component {
    render() {
        return (
           <View style={styles.discoverable}>
             <Text style={styles.discoverableText}>Discoverable</Text>
             <Switch
                 style={styles.switch}
                 disabled={false}
                 value={true}
                 onTintColor='#FB5353'
             />
          </View>
        )
    }
}

const styles = StyleSheet.create({
   discoverable: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#c8c7cc'
   },
   discoverableText: {
      fontSize: 17,
      marginTop: 11,
      marginBottom: 11,
      marginLeft: 20,
      marginRight: 220
   },
   switch: {
      marginTop: 6
   }
})
