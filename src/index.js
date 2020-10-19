import * as Blockly from 'blockly';
import { draw_blob } from "./block_definitions/index";

window.draw_blob = draw_blob

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
    try {
      eval(`
        window.draw = function() {
          blendMode(BLEND);
          background(0);
          blendMode(ADD);

          `+ code +`

          t += 0.005;
        }
      `);
    } catch (e) {
      alert(e);
    }
  })
});
