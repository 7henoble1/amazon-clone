import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCshaRxOfc1Rg8PFbImiSqE1i1r8EPf7bQ",
  authDomain: "clone-8a857.firebaseapp.com",
  databaseURL: "https://clone-8a857-default-rtdb.firebaseio.com",
  projectId: "clone-8a857",
  storageBucket: "clone-8a857.appspot.com",
  messagingSenderId: "257537294101",
  appId: "1:257537294101:web:a0a85940140eef70a5b31c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };