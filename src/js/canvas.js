import p5 from 'p5';
import Blockly from 'blockly';
import hljs from 'highlight.js/lib/core';
import processing from 'highlight.js/lib/languages/processing';
import 'highlight.js/styles/darcula.css';

hljs.registerLanguage('processing', processing);

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

  button.addEventListener('click', () => {
    var isPlay = document.getElementById('blocklyButton').classList.contains('stop');
    if (isPlay) {
      button.classList.remove('stop');
      button.classList.add('play');
      remove();
    } else {
      button.classList.remove('play');
      button.classList.add('stop');
      const code = Blockly[lang].workspaceToCode(workspace);
      const geval = eval;
      console.log(code);
      try {
        geval(code);
        new p5();
      } catch (e) {
        alert(e);
      }
    }
  });

  function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
    const highlightedCode = hljs.highlight('processing', `${code}`).value
    document.querySelector('pre code').innerHTML = highlightedCode;
  }
  workspace.addChangeListener(myUpdateFunction);
});
