import { writeUserData } from '../../services/Firebase.js'

import { Actions } from 'react-native-router-flux'

import FBSDK, {
   LoginManager,
   AccessToken,
   GraphRequest,
   GraphRequestManager
} from 'react-native-fbsdk'

export var userID = ''

export function _fbAuth() {
   LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function(result) {
      if (result.isCancelled) {
         alert('Login was cancelled')
      } else {
         AccessToken.getCurrentAccessToken().then(function(accessTokenData) {

            const responseInfoCallback = (error, result) => {
               if (error) {
                  console.log(error)
               } else {
                  userID = result.id
                  // TODO: Make a test to see if the user exist, if - update rather than write
                  writeUserData(result.id, result.first_name, result.last_name, result.email, result.picture.data.url)
               }
            }

            const infoRequest = new GraphRequest(
               '/me',
               {
                  accessToken: accessTokenData.accessToken.toString(),
                  parameters: {
                     fields: {
                        string: 'id, name, email, first_name, last_name, picture'
                     }
                  }
               },
               responseInfoCallback
            )

            new GraphRequestManager().addRequest(infoRequest).start()

            Actions.tabbar()
         })
      }
   })
}
