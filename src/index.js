import * as Blockly from 'blockly';
import { draw_blob, drawRectangle, rotateByDegree } from "./block_definitions/index";
import './css/global.css';

window.draw_blob = draw_blob;
window.drawRectangle = drawRectangle;
window.rotateByDegree = rotateByDegree;

document.addEventListener("DOMContentLoaded", function () {
  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/'
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', function () {
    var code = Blockly[lang].workspaceToCode(workspace);
    console.log(code)
    var geval = eval;
    try {
      geval(code);
    } catch (e) {
      alert(e);
    }
  })
});
