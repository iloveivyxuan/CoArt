import firebase from "firebase";
import './blocks/index';
import './css/global.css';
import { Blockly } from './js/canvas';

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
var database = firebase.database();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const libraryName = urlParams.get('library');
const funcName = urlParams.get('func');

document.addEventListener("DOMContentLoaded", function() {
  var funcRef = firebase.database().ref(`library/${libraryName}/${funcName}`);
  funcRef.on('value', (snapshot) => {
    const blocks = snapshot.val();
    const xml = Blockly.Xml.textToDom(blocks);
    Blockly.Xml.domToWorkspace(xml, window.workspace);
  });
});
