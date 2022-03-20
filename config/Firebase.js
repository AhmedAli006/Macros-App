// TODO: Replace with your app's Firebase project configuration
import { initializeApp } from "firebase/app";
// Authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//Database
import {
  getDatabase,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove
} from "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCRl3at5HwckI2y5guaceByVFzQDwn2dF0",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://macros-4ec7f-default-rtdb.firebaseio.com/",
  projectId: "macros-4ec7f",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "1:790796082736:android:ecae6edf044e16b14f57f5",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove
};