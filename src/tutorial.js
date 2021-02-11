import p5 from 'p5';
import Blockly from 'blockly';
import "./block_definitions/index";
import './css/tutorial.css';
import './css/global.css';

document.addEventListener("DOMContentLoaded", function() {
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    saveCanvas('myCanvas');
  });

  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/',
      zoom:
      	{
      		controls: true,
      		startScale: 1.0,
      		maxScale: 3,
      		minScale: 0.3,
      		scaleSpeed: 1.2,
      		pinch: true
      	},
      trashcan: true
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', function () {
    const code = Blockly[lang].workspaceToCode(workspace);
    const geval = eval;
    try {
    	background("#fff");
      geval(code);
    } catch (e) {
      alert(e);
    }
  })
});
