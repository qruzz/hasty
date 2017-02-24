import * as Firebase from 'firebase'

var config = {
   apiKey: "AIzaSyB5c9YmYOYLCR8AQATeaLISy61dDXApLdI",
   authDomain: "hasty-67c5c.firebaseapp.com",
   databaseURL: "https://hasty-67c5c.firebaseio.com"
}

export const firebaseRef = Firebase.initializeApp(config)

export const database = firebaseRef.database()

export function writeUserData(userID, firstName, lastName, email, picture) {
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

export function updateUserData(userID, key, value) {
   database.ref('users/' + userID + '/' + key).transaction(function(currentKeyValue){
      return value
   })
}
