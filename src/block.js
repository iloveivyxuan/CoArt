import './blocks/index';
import './css/global.css';
import { Blockly } from './js/canvas';
import { firebase, database } from './js/database_init';

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
