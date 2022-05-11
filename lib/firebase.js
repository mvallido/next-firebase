import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCALEnf3ZpvW1ROuVHqaI7KoVxDTOLYRHQ",
  authDomain: "nxtfire-app.firebaseapp.com",
  projectId: "nxtfire-app",
  storageBucket: "nxtfire-app.appspot.com",
  messagingSenderId: "153462859025",
  appId: "1:153462859025:web:751eb7233e64eee15b18b0",
  measurementId: "G-W40J7HD9MM"
};

// if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
// }

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore()
export const storage = firebase.storage()
