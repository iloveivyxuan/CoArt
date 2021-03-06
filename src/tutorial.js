import p5 from 'p5';
import Blockly from 'blockly';
import './blocks/index';
import './css/tutorial.css';
import './css/global.css';
import './css/modal.css';
import { modal, toggleModal, modalContinueButton } from './js/modal.js';
import './js/canvas';

document.addEventListener("DOMContentLoaded", function() {
  // const saveButton = document.getElementById('saveButton');
  // saveButton.addEventListener('click', function() {
  //   saveCanvas('myCanvas');
  // });

  // const workspace = Blockly.inject('blocklyDiv',
  //   {
  //     toolbox: document.getElementById('toolbox'),
  //     media: 'media/',
  //     zoom:
  //     	{
  //     		controls: true,
  //     		startScale: 1.0,
  //     		maxScale: 3,
  //     		minScale: 0.3,
  //     		scaleSpeed: 1.2,
  //     		pinch: true
  //     	},
  //     trashcan: true
  //   });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', () => {
    const code = Blockly[lang].workspaceToCode(workspace);
    var isPlay = document.getElementById('blocklyButton').classList.contains('stop');
    if (isPlay) {
      checkCode(code);
    }
    // const geval = eval;
    // try {
    // 	background("#fff");
    //   geval(code);
      // checkCode(code);
    // } catch (e) {
    //   alert(e);
    // }
  });

  // Add default blocks
  const blocks = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="setup" id="qIq?1KNe%8;P~qytfWxt" x="104" y="83">
        <statement name="setup">
          <block type="create_canvas" id="=kP3owXA?-]!~4(220T[">
            <field name="width">350</field>
            <field name="height">350</field>
            <next>
              <block type="background" id="8]qPru8KfW!W/QD@jP)_">
                <value name="color">
                  <block type="color" id="(gK~IXv*|}^(IBC_$A$">
                    <field name="color">#ffffff</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>
  `;
  const xml = Blockly.Xml.textToDom(blocks);
  Blockly.Xml.domToWorkspace(xml, window.workspace);

  // Check Code
  const checkCode = (code) => {
    const isSuccess =  code.includes(successCode[currentChallenge]);
    if (isSuccess) {
      toggleModal();
    }
  }

  modalContinueButton.addEventListener('click', () => {
    toggleModal();
    document.querySelector(`li[data-challenge='${currentChallenge}']`).classList.add('done');
    document.querySelector(`li[data-challenge='${currentChallenge}']`).classList.remove('current', 'active');
    currentChallenge += 1;
    document.querySelector(`li[data-challenge='${currentChallenge}']`).classList.add('current', 'active');
    toolbox = challengeBlocks[currentChallenge];
    workspace.updateToolbox(toolbox);
    workspace.clear();
    Blockly.Xml.domToWorkspace(xml, window.workspace);
  });

  // Progress Bar
  const challengeNum = 7;
  let currentChallenge = 0;

  const generateProgressBar = (num) => {
    let list = ``;
    for (let i = 0; i < num; i++) {
      if (i < currentChallenge) {
        list += `<li class="challenge done" data-challenge='${i}'></li>`
      }
      else if (i == currentChallenge) {
        list += `<li class="challenge active current" data-challenge='${i}'></li>`
      } else {
        list += `<li class="challenge" data-challenge='${i}'></li>`;
      }
    }
    return list
  }

  document.getElementById('progressBar').innerHTML = generateProgressBar(challengeNum);

  const lists = document.getElementsByClassName('challenge');

  const removeActive = () => {
    for (const list of lists) {
      list.classList.remove('active');
    }
  };

  for (const list of lists) {
    list.addEventListener('click', () => {
      const backToChallenge = list.dataset.challenge;
      if (backToChallenge > currentChallenge) {
        return
      }
      removeActive();
      list.classList.add('active');
      toolbox = challengeBlocks[backToChallenge];
      workspace.updateToolbox(toolbox);
      workspace.clear();
    });
  }

  // Success Conditions
  const successCode = [
    `ellipse`,
    `ellipse`,
    `ellipse`,
    `ellipse`
  ];

  // Challenge Descriptions
  const challengeDes = [
    'Drag block into the workspace.\nChange width and height to create an ellipse.'
  ];

  // Challenge Blocks XML
  const challenge1 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="simpleEllipse">
        <field name="position">center</field>
        <field name="width">100</field>
        <field name="height">100</field>
      </block>
    </xml>
  `;

  const challenge2 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="basicEllipse">
         <field name="position">center</field>
         <field name="width">100</field>
         <field name="height">100</field>
         <field name="stroke">#993399</field>
         <field name="fill">#ffccff</field>
      </block>
    </xml>
  `;

  const challenge3 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="ellipse">
        <field name="x-coordinate">100</field>
        <field name="y-coordinate">100</field>
        <field name="width">100</field>
        <field name="height">100</field>
        <field name="stroke">#993399</field>
        <field name="fill">#ffccff</field>
      </block>
    </xml>
  `;

  const challenge4 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="customized_ellipse">
        <value name="width">
          <block type="math_number">
            <field name="NUM">100</field>
          </block>
        </value>
        <value name="height">
          <block type="math_number">
            <field name="NUM">100</field>
          </block>
        </value>
        <value name="x-coordinate">
          <block type="math_number">
            <field name="NUM">200</field>
          </block>
        </value>
        <value name="y-coordinate">
          <block type="math_number">
            <field name="NUM">200</field>
          </block>
        </value>
        <statement name="styles">
          <block type="fill">
            <value name="color">
              <block type="colour_picker">
                <field name="COLOUR">#ffccff</field>
              </block>
            </value>
            <next>
              <block type="stroke">
                <value name="color">
                  <block type="colour_picker">
                    <field name="COLOUR">#993399</field>
                  </block>
                </value>
                <next>
                  <block type="stroke_weight">
                    <value name="weight">
                      <block type="math_number">
                        <field name="NUM">3</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>
  `;

  const challengeBlocks = [challenge1, challenge2, challenge3, challenge4];

  // Initialize toolbox
  let toolbox = challengeBlocks[currentChallenge];
  workspace.updateToolbox(toolbox);
});
