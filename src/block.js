import './blocks/index';
import './css/global.css';
import { Blockly } from './js/canvas';
import { firebase, database } from './js/database_init';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const libraryName = urlParams.get('library');
const funcName = urlParams.get('func');
console.log(libraryName)
console.log(funcName)

document.addEventListener("DOMContentLoaded", function() {
  var funcRef = firebase.database().ref(`libraries/${libraryName}/${funcName}`);
  funcRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const blocks = data['funcDefBlock'];
    const xml = Blockly.Xml.textToDom(blocks);
    Blockly.Xml.domToWorkspace(xml, window.workspace);
  });
});
