import './blocks/index';
import './css/global.css';
import { Blockly } from './js/canvas';
import { firebase, database } from './js/database_init';
import './css/modal.css';
import { modal, toggleModal, modalContinueButton } from './js/modal.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

document.addEventListener("DOMContentLoaded", function() {
  // Mine Library
  var mineRef = firebase.database().ref(`libraries/Mine`);
  const geval = eval;
  mineRef.on('value', (snapshot) => {
    const mineLibrary = snapshot.val();
    const allMethods = Object.keys(mineLibrary);
    for (var method of allMethods) {
      geval(mineLibrary[method]['blockDef']);
      geval(mineLibrary[method]['blockCode']);
    }
  });

  var libraries = [];
  var data;

  var libraryBody = ``;
  var libraryRef = firebase.database().ref(`libraries/`);
  libraryRef.on('value', (snapshot) => {
    data = snapshot.val();
    libraries = Object.keys(data);
    for (var libraryName of libraries) {
      var methodsText = ``;
      const methods = Object.keys(data[libraryName]);
      for (var methodName of methods) {
        const method = data[libraryName][methodName]['function'];
        methodsText += `${methodName}: ${method},`
      }
      libraryBody = `
        var ${libraryName} = {
          ${methodsText}
        }
      `
      geval(libraryBody);
    }

    var toolbox = document.querySelector('#toolbox').innerHTML;
    var innerCategories = ``;
    for (const library of libraries) {
      var blocks = ``;
      const methods = Object.keys(data[library]);
      for (var method of methods) {
        blocks += data[library][method]['funcCallBlock'];
      }
      innerCategories += `
        <category name="${library}" colour="#EE8DB0">
          ${blocks}
        </category>
      `;
    }
    toolbox = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      ${toolbox}
      <category name="Library" expanded="false">
        ${innerCategories}
      </category>
    </xml>
    `;
    workspace.updateToolbox(toolbox);

    // Share Button
    const shareButton = document.querySelector('#shareButton');

    shareButton.addEventListener('click', () => {
      const canvas = document.querySelector('canvas')
      if (!canvas) {
        return;
      }

      const imageData = canvas.toDataURL('image/png');
      var galleryRef = firebase.database().ref(`gallery`);

      var xml = Blockly.Xml.workspaceToDom(workspace);
      var xml_text = Blockly.Xml.domToPrettyText(xml);

      var data = {
        xml: xml_text,
        imageData: imageData,
        author: 'ivyxuan'
      }

      galleryRef.push(data);

      toggleModal();
    });
  });

  // Get artwork from database
  var artworkRef = firebase.database().ref(`gallery/${id}`);
  artworkRef.on('value', (snapshot) => {
  	const data = snapshot.val();
  	const blocks = data.xml;
    const xml = Blockly.Xml.textToDom(blocks);
  	Blockly.Xml.domToWorkspace(xml, window.workspace);
  	const playButton = document.getElementById('blocklyButton');
	  playButton.click();
  });
});
