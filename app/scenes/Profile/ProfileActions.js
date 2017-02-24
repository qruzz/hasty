import React, { Component } from 'react'
import {
   View,
   TouchableOpacity,
   Text,
   StyleSheet,
   AlertIOS
} from 'react-native'

import { _fbSignOut, _deleteAccount } from '../Authentication/Functions.js'

export default class ProfileActions extends Component {

    render() {
        return (
           <View style={styles.actions}>
             <View style={styles.buttons}>
                 <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={_fbSignOut}>
                    <Text style={styles.signOut}>Sign Out</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                       AlertIOS.alert(
                          "Are you sure you want to delete your account?",
                          null,
                          [
                             {text: 'Hell No!'},
                             {text: 'Yes Please!', onPress: _deleteAccount}
                          ]
                       )
                    }}>
                    <Text style={styles.deleteAccount}>Delete Account</Text>
                 </TouchableOpacity>
             </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
   actions: {
      height: 168,
      backgroundColor: '#F9F9FA',
      alignItems: 'center',
      justifyContent: 'center'
   },
   buttonContainer: {
      height: 44,
      borderRadius: 1,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: '#C8C7CC',
      width: 315,
      alignItems: 'center',
      // TODO: Remember to use justifyContent on other things that needs vertical centering
      justifyContent: 'center',
      marginBottom: 20
   },
   signOut: {
      fontSize: 17,
      color: 'white'
   },
   deleteAccount: {
      fontSize: 17,
      color: '#FB5353'
   }
})
