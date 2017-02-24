import * as Firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

var config = {
   apiKey: "AIzaSyB5c9YmYOYLCR8AQATeaLISy61dDXApLdI",
   authDomain: "hasty-67c5c.firebaseapp.com",
   databaseURL: "https://hasty-67c5c.firebaseio.com"
}

export const firebaseRef = Firebase.initializeApp(config)

export const database = firebaseRef.database()

export function writeUserData(userID, firstName, lastName, email, picture) {
   let user = database.ref('users').child(userID)
   if (!user) {
      database.ref('users/' + userID).set({
         first_name: firstName,
         last_name: lastName,
         email: email,
         profile_picture: picture,
         address: '',
         city: '',
         area: '',
         country: '',
         card: ''
      })
   }
}

export function updateUserData(userID, key, value) {
   database.ref('users/' + userID + '/' + key).transaction(function(currentKeyValue){
      return value
   })
}

export function deleteUserData(userID) {
   database.ref('users/' + userID).remove().then(function() {
      // Delete successful
      console.log("Deleted account")
      Actions.authentication()
   }).catch(function(error) {
      // Error occured during deletion
      console.log('Error occured during deletion of account')
   })
}
