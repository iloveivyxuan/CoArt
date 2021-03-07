import './blocks/index';
import './css/global.css';
import './js/canvas';
import { firebase, database } from './js/database_init';

document.addEventListener("DOMContentLoaded", function() {
  var libraries = [];
  var data;

  const geval = eval;
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
    }
    geval(libraryBody);

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
  });
});
