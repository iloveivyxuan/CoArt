import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDc811RV7TGC09CuNaW5EGMURgdwMVjQ-s",
  authDomain: "creativeart-f6d87.firebaseapp.com",
  databaseURL: "https://creativeart-f6d87-default-rtdb.firebaseio.com",
  projectId: "creativeart-f6d87",
  storageBucket: "creativeart-f6d87.appspot.com",
  messagingSenderId: "1036104965535",
  appId: "1:1036104965535:web:45d0971e02fd0e7ca631aa"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database };
