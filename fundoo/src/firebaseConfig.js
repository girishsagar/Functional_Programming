import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDXLBDHf-vejwxOBYo5aXsNq2KWsEpFGcI",
  authDomain: "fundoo-keep.firebaseapp.com",
  databaseURL: "https://fundoo-keep.firebaseio.com",
  projectId: "fundoo-keep",
  storageBucket: "fundoo-keep.appspot.com",
  messagingSenderId: "785709131579",
  appId: "1:785709131579:web:b433b44c1710ceaada391e",
  measurementId: "G-4T4H4QHGP0"
}
const firebaseConfiguration=firebase.initializeApp(firebaseConfig);
export default firebaseConfiguration;



// import firebase from "firebase";
// import 'firebase/storage';
// require('dotenv').config();
// const firebaseConfig = {
// apiKey: process.env.apiKeyy,
// authDomain: "fundoo-firebase-auth.firebaseapp.com",
// databaseURL: "https://fundoo-firebase-auth.firebaseio.com",
// projectId: "fundoo-firebase-auth",
// storageBucket: "fundoo-firebase-auth.appspot.com",
// messagingSenderId: process.env.messagingSenderIdd,
// appId: process.env.appIdd
// };
// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage()
// const database = firebase.database();
// const firestore = firebase.firestore();

// export default {
// storage, firebase, database, firestore
// }