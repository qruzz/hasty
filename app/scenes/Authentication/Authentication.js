import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Image
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import FBSDK, {
   LoginManager,
   AccessToken,
   GraphRequest,
   GraphRequestManager
} from 'react-native-fbsdk'

import ViewContainer from '../../components/ViewContainer.js'

export default class Authentication extends Component {
   constructor(props) {
      super(props)

      this.state = {
         accessToken: ''
      }

      this._fbAuth = this._fbAuth.bind(this)
      this._graphProfileRequest = this._graphProfileRequest.bind(this)
      this._responseInfoCallback = this._responseInfoCallback.bind(this)
   }

   _responseInfoCallback(error: ?Object, result: ?Object) {
      if (error) {
         alert('Error fetching data: ' + error.toString())
      } else {
         console.log('Success fetching data: ' + result.toString())
      }
   }

   _graphProfileRequest() {

      const profileRequestParams = {
         parameters: {
            fields: {
               string: 'id, name, email, first_name, last_name'
            }
         }
      }

      const profileRequestConfig = {
         httpMethod: 'GET',
         version: 'v2.5',
         parameters: profileRequestParams,
         accessToken: this.state.accessToken.toString()
      }

      const profileRequest = new GraphRequest(
         '/me',
         {
            accessToken: this.state.accessToken.toString(),
            parameters: {
               fields: {
                  string: 'id, name, email, first_name, last_name'
               }
            }
         },
         this._responseInfoCallback
      )

      new GraphRequestManager().addRequest(profileRequest).start()
   }

   _fbAuth() {
      var self = this
      LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
         if (result.isCancelled) {
            alert('Login was cancelled')
         } else {
            AccessToken.getCurrentAccessToken().then(function(accessTokenData) {
               self.setState({accessToken: accessTokenData.accessToken})
               console.log(self.state.accessToken)

               self._graphProfileRequest()

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
