import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Image
} from 'react-native'

// npm library imports
import { Actions } from 'react-native-router-flux'
import FBSDK, {
   LoginManager,
   AccessToken,
   GraphRequest,
   GraphRequestManager
} from 'react-native-fbsdk'

// user defined scenes, components, and services
import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'
import { _fbAuth } from './Functions.js'

export default class Authentication extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <ViewContainer>
            <StatusbarBackground />
            <View style={styles.logoContainer}>
               <Image style={styles.logo} source={require("../../resources/icon.png")} />
               <Image style={styles.name} source={require("../../resources/logo1@4x.png")} />
            </View>

            <View style={styles.container}>
               <TouchableOpacity style={styles.loginButton} onPress={_fbAuth}>
                  <Image source={require("../../resources/FB-f-Logo__blue_50.png")} />
                  <Text style={styles.loginText}>Continue with Facebook</Text>
               </TouchableOpacity>
            </View>
         </ViewContainer>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      height: 50,
      alignItems: 'center',
      marginTop: 300
   },
   loginButton: {
      flexDirection: 'row'
   },
   loginText: {
      color: '#3B579D',
      fontSize: 17,
      fontWeight: '400',
      paddingTop: 15,
      paddingLeft: 15
   },
   logoContainer: {
      alignItems: 'center'
   },
   logo: {
      marginTop: 150,
      height: 100,
      width: 100
   },
   name: {
      marginTop: 20
   }
})
