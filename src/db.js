import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyDM07M5pvyeopsQ3_ZLG4mDSRrSedOz8Tw",
  authDomain: "trabajofinaltienda-8c84b.firebaseapp.com",
  projectId: "trabajofinaltienda-8c84b",
  storageBucket: "trabajofinaltienda-8c84b.appspot.com",
  messagingSenderId: "899148335796",
  appId: "1:899148335796:web:c11120a8b26f8edad225e1",
  measurementId: "G-DJQZQ3YNMB"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }


// if using Firebase JS SDK < 5.8.0
//db.settings({ timestampsInSnapshots: true })
