import * as Firebase from 'firebase'

var config = {
   apiKey: "AIzaSyB5c9YmYOYLCR8AQATeaLISy61dDXApLdI",
   authDomain: "hasty-67c5c.firebaseapp.com",
   databaseURL: "https://hasty-67c5c.firebaseio.com"
}

export const firebaseRef = Firebase.initializeApp(config);
