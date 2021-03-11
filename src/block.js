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
  const geval = eval;

  var funcRef = firebase.database().ref(`libraries/${libraryName}/${funcName}`);
  funcRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const blocks = data['funcDefBlock'];
    const xml = Blockly.Xml.textToDom(blocks);
    Blockly.Xml.domToWorkspace(xml, window.workspace);
    generateUploadBlock();
  });

  const generateUploadBlock = () => {
    uploadButton.addEventListener('click', () => {
      const uploadButton = document.querySelector('#uploadButton');
      var xml = Blockly.Xml.workspaceToDom(workspace);
      var xml_text = Blockly.Xml.domToPrettyText(xml);
      const newFuncName = xml_text.split('<field name="NAME">')[1].split('</field>')[0];

      const args = xml_text.match(/<arg name="(.*)" varid="/g).map(x => x.split('"')[1]);
      const argsNum = args.length;

      var message0 = `${newFuncName} %1`
      for (var i = 0; i < argsNum; i++) {
        message0 += ` ${args[i]} %${i+2}`
      }

      var args0 = `[
              {
                "type": "input_dummy"
              }`
      for (var i = 0; i < argsNum; i++) {
        args0 += `,{
                "type": "input_value",
                "name": "${args[i]}",
                "align": "RIGHT"
              }`
      }
      args0 += `]`

      const helpUrl = `/block.html?library=Mine&func=${newFuncName}`;

      const blockDef = `Blockly.defineBlocksWithJsonArray([
        {
          "type": "${newFuncName}",
          "message0": "${message0}",
          "args0": ${args0},
          "previousStatement": null,
          "nextStatement": null,
          "colour": '#EE8DB0',
          "tooltip": "",
          "helpUrl": "${helpUrl}"
        }]);`

      var blockCode = `Blockly.JavaScript['${newFuncName}'] = function(block) {\n`;
      for (var i = 0; i < argsNum; i++) {
        blockCode += `var ${args[i]} = Blockly.JavaScript.valueToCode(block, '${args[i]}', Blockly.JavaScript.ORDER_ATOMIC);\n`
      }
      const executableCode = `Mine.${newFuncName}(`;
      var input = [];
      for (var i = 0; i < argsNum; i++) {
        input.push(`\$\{${args[i]}\}`);
      }
      input = input.join(', ')
      blockCode += `var code = \`Mine.${newFuncName}(${input});\n\`;`
      blockCode += `return code;};`;

      // console.log(blockCode)
      // console.log(blockDef)

      const code = Blockly.JavaScript.workspaceToCode(workspace);
      var newFunction = ``;
      newFunction += code.match(/function ([\s\S]*)}\n/)[1].substring(newFuncName.length);
      newFunction += `}`
      const index = newFunction.indexOf(') {');
      newFunction = newFunction.substring(0, index+1) + ' =>' + newFunction.substring(index+1);

      var newFuncCallBlock = ``;
      newFuncCallBlock += `<block type=\"${newFuncName}\">`
      for (var i = 0; i < argsNum; i++) {
        newFuncCallBlock += `<value name=\"${args[i]}\"></value>`
      }
      newFuncCallBlock += `</block>`

      var libraryRef = firebase.database().ref(`libraries`);
      libraryRef.update({
        "Mine": {
          [newFuncName]: {
            'function': newFunction,
            'funcCallBlock': newFuncCallBlock,
            'blockDef': blockDef,
            'blockCode': blockCode
          }
        }
      });
    });
  }
});
