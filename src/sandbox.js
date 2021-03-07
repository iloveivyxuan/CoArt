import './blocks/index';
import './css/global.css';
import './js/canvas';
import { firebase, database } from './js/database_init';

const libraries = [];

const geval = eval;
var libraryBody = ``;
var libraryRef = firebase.database().ref(`libraries/`);
libraryRef.on('value', (snapshot) => {
  const data = snapshot.val();
  const libraries = Object.keys(data);
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
});

document.addEventListener("DOMContentLoaded", function() {
  var toolbox = document.querySelector('#toolbox').innerHTML;
  toolbox = `
  <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    ${toolbox}
    <category name="Library" expanded="false">
      <category name="Polygon" colour="#EE8DB0">
        <block type="polygon">
          <value name="sides">
            <shadow type="math_number">
              <field name="NUM">3</field>
            </shadow>
          </value>
          <value name="radius">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
        </block>
        <block type="rounded_polygon">
          <value name="sides">
            <shadow type="math_number">
              <field name="NUM">3</field>
            </shadow>
          </value>
          <value name="radius">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
        </block>
      </category>
    </category>
  </xml>
  `;
  workspace.updateToolbox(toolbox);
});
