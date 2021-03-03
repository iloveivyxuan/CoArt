import './blocks/index';
import './css/global.css';
import { Blockly } from './js/canvas';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

document.addEventListener("DOMContentLoaded", function() {
  fetch(`http://localhost:8080/artworks/${id}`)
    .then(response => response.json())
    .then(data => {
      const blocks = data['blockXML'];
      const xml = Blockly.Xml.textToDom(blocks);
      Blockly.Xml.domToWorkspace(xml, window.workspace);
    })
});
