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
import { firebaseRef } from '../../services/Firebase.js'

export default class Authentication extends Component {
   constructor(props) {
      super(props)
   }

   _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function(result) {
         if (result.isCancelled) {
            alert('Login was cancelled')
         } else {
            AccessToken.getCurrentAccessToken().then(function(accessTokenData) {

               const responseInfoCallback = (error, result) => {
                  if (error) {
                     console.log(error)
                  } else {
                     console.log(result)
                  }
               }

               const infoRequest = new GraphRequest(
                  '/me',
                  {
                     accessToken: accessTokenData.accessToken.toString(),
                     parameters: {
                        fields: {
                           string: 'id, name, email, first_name, last_name'
                        }
                     }
                  },
                  responseInfoCallback
               )

               new GraphRequestManager().addRequest(infoRequest).start()

               // Actions.tabbar()
            })
         }
      })
   }

   render() {
      return (
         <ViewContainer>
            {/* <View style={styles.logo}>
               <Image source={require("../../resources/logo.png")} />
            </View> */}

            <View style={styles.container}>
               <TouchableOpacity style={styles.loginButton} onPress={this._fbAuth}>
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
      marginTop: 550
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
   }
})
