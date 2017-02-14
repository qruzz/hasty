import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity
} from 'react-native'

import FBSDK, { LoginManager, AccessToken} from 'react-native-fbsdk'

import ViewContainer from '../components/ViewContainer.js'

export default class Authentication extends Component {
   constructor(props) {
      super(props)
   }

   _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
         if (result.isCancelled) {
            alert('Login was cancelled')
         } else {
            AccessToken.getCurrentAccessToken().then(function(accessTokenData) {
               console.log(accessTokenData.accessToken)

            })
         }
      })
   }

   render() {
      return (
         <ViewContainer>
            <View>
               <TouchableOpacity onPress={this._fbAuth}>
                  <Text>
                     Continue with Facebook
                  </Text>
               </TouchableOpacity>
            </View>
         </ViewContainer>
      )
   }
}
