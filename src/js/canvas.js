import p5 from 'p5';
import Blockly from 'blockly';
import '@blockly/block-plus-minus';
import '@blockly/field-slider';
import { registerTooltipExtension } from './blockly-plugin';
import { WorkspaceSearch } from '@blockly/plugin-workspace-search';
import hljs from 'highlight.js/lib/core';
import processing from 'highlight.js/lib/languages/processing';
import 'highlight.js/styles/darcula.css';

hljs.registerLanguage('processing', processing);

window.Blockly = Blockly;

registerTooltipExtension((block) => {
  // Custom tooltip render function.
  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.style.backgroundColor = block.getColour();
  tooltip.style.borderColor = block.getColourTertiary();

  const blockTooltipText = document.createElement('div');
  blockTooltipText.textContent = block.getTooltip();
  tooltip.appendChild(blockTooltipText);

  return tooltip;
}, 'tooltip-extension');

// Customize the tooltip CSS.
Blockly.Css.register([
  `
    div.blocklyTooltipDiv {
      border: none !important;
      box-shadow: none !important;
      background-color: transparent !important;
      opacity: 0.92 !important;
    }
    .custom-tooltip {
      color: #fff;
      border: 1px solid #000;
      border-radius: 4px;
      padding: 0.5rem 1rem;
    }
  `,
]);

// Add the tooltip extension to all blocks.
Object.keys(Blockly.Blocks).forEach((blockId) => {
  const block = Blockly.Blocks[blockId];
  if (block.init) {
    const oldInit = block.init;
    block.init = function() {
      if (oldInit) oldInit.call(this);
      this.jsonInit({
        'extensions': ['tooltip-extension'],
      });
    };
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    saveCanvas('myCanvas');
  });

  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/',
      renderer: 'thrasos',
      theme: Blockly.Themes.Tritanopia,
      zoom: {
    		controls: true,
    		startScale: 1,
    		maxScale: 3,
    		minScale: 0.3,
    		scaleSpeed: 1.2,
    		pinch: true
    	},
      trashcan: true
    });

  window.workspace = workspace;

  const workspaceSearch = new WorkspaceSearch(workspace);
  workspaceSearch.init();

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', () => {
    var isPlay = document.getElementById('blocklyButton').classList.contains('stop');
    if (isPlay) {
      button.classList.remove('stop');
      button.classList.add('play');
      remove();
    } else {
      const geval = eval;
      var xml = Blockly.Xml.workspaceToDom(workspace);
      var xml_text = Blockly.Xml.domToPrettyText(xml);
      console.log(xml_text);
      const code = Blockly[lang].workspaceToCode(workspace);
      try {
        geval(code);
        button.classList.remove('play');
        button.classList.add('stop');
        new p5();
      } catch (e) {
        alert(e);
      }
    }
  });

  function udpateCodeGenerator(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    const highlightedCode = hljs.highlight('processing', `${code}`).value
    document.querySelector('pre code').innerHTML = highlightedCode;
  }
  workspace.addChangeListener(udpateCodeGenerator);
});

export { Blockly };
