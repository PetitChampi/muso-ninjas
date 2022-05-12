import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCqMBRANhqa1CShVVGuXYeePkSfjuhfEUA",
  authDomain: "muso-ninjas-3c3c5.firebaseapp.com",
  projectId: "muso-ninjas-3c3c5",
  storageBucket: "muso-ninjas-3c3c5.appspot.com",
  messagingSenderId: "365478837755",
  appId: "1:365478837755:web:e0a30e25cbcd914e675f5e"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }