import * as Blockly from 'blockly';
import { draw_blob, drawRectangle, rotateByDegree } from "./block_definitions/index";

window.draw_blob = draw_blob;
window.drawRectangle = drawRectangle;
window.rotateByDegree = rotateByDegree;

const challenges = [
  {
    description: "Can you Draw a rectangle?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="[@,NkfxhoR[dJ[e=o8aJ" x="137" y="132">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
              <value name="position_x">
                <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                  <field name="NUM">0</field>
                </block>
              </value>
              <value name="position_y">
                <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                  <field name="NUM">0</field>
                </block>
              </value>
              <value name="width">
                <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                  <field name="NUM">100</field>
                </block>
              </value>
              <value name="height">
                <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                  <field name="NUM">100</field>
                </block>
              </value>
              <value name="color">
                <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                  <field name="COLOUR">#993399</field>
                </block>
              </value>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
        }
        p.draw = function() {
          p.stroke('#993399');
          p.rect(0, 0, 100, 100);
        }
      }
      var demo = new p5(sketch, 'demo');
    `
  }, {
    description: "Can you rotate the rectangle by 4 degrees?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="xI{zeGY;piZg;j3c3w(4" x="235" y="226">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
              <value name="degree">
                <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                  <field name="NUM">4</field>
                </block>
              </value>
              <next>
                <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                  <value name="position_x">
                    <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                      <field name="NUM">0</field>
                    </block>
                  </value>
                  <value name="position_y">
                    <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                      <field name="NUM">0</field>
                    </block>
                  </value>
                  <value name="width">
                    <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                      <field name="NUM">100</field>
                    </block>
                  </value>
                  <value name="height">
                    <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                      <field name="NUM">100</field>
                    </block>
                  </value>
                  <value name="color">
                    <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                      <field name="COLOUR">#993399</field>
                    </block>
                  </value>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
        }
        p.draw = function() {
          p.stroke('#993399');
          p.rotate(2*PI / (180 / 4));
          p.rect(0, 0, 100, 100);
        }
      }
      var demo = new p5(sketch, 'demo');
    `
  }, {
    description: "Can you draw 3 rectangles rotated by 4 degrees, 8 degrees, and 12 degrees seperately?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="74*21pgDT^fQsZv#gLC" x="127" y="182">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/">
              <value name="TIMES">
                <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
                  <field name="NUM">3</field>
                </shadow>
              </value>
              <statement name="DO">
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                      <field name="NUM">4</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
        }
        p.draw = function() {
          for (var i = 0; i <= 3; i++) {
            p.stroke('#993399');
            p.rotate(2*PI / (180 / 4));
            p.rect(0, 0, 100, 100);
          }
        }
      }
      var demo = new p5(sketch, 'demo');
    `
  }, {
    description: "What if we need to draw 10 rectangles?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="74*21pgDT^fQsZv#gLC" x="127" y="182">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/">
              <value name="TIMES">
                <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
                  <field name="NUM">10</field>
                </shadow>
              </value>
              <statement name="DO">
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                      <field name="NUM">4</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
        }
        p.draw = function() {
          for (var i = 0; i <= 10; i++) {
            p.stroke('#993399');
            p.rotate(2*PI / (180 / 4));
            p.rect(0, 0, 100, 100);
          }
        }
      }
      var demo = new p5(sketch, 'demo');
    `
  }, {
    description: "Can we move drawings to the center of canvas?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="move_to_center" id="*C%j_sgF[|Iw$)/rEA![" x="153" y="156">
          <next>
            <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/">
              <value name="TIMES">
                <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
                  <field name="NUM">10</field>
                </shadow>
              </value>
              <statement name="DO">
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                      <field name="NUM">4</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </next>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
        }
        p.draw = function() {
          p.translate(width/2, height/2);
          for (var i = 0; i <= 10; i++) {
            p.stroke('#993399');
            p.rotate(2*PI / (180 / 4));
            p.rect(0, 0, 100, 100);
          }
        }
      }
      var demo = new p5(sketch, 'demo');
    `
  }, {
    tips: [
      "`draw` will be executed repeatedly"
    ],
    description: "Can we make it move?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <variables>
          <variable id="AGenXV]55]#?X1M%8$HZ">draw</variable>
        </variables>
        <block type="variables_set" id="T2RQf4D:QJVP2fu$ADx^" x="133" y="27">
          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">draw</field>
          <value name="VALUE">
            <block type="math_number" id="e8}kSiAKa0X*_%5{m{+m">
              <field name="NUM">0</field>
            </block>
          </value>
        </block>
        <block type="procedures_defnoreturn" id=",D5C6xD,jZlnFK-)W#KY" x="124" y="171">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="move_to_center" id="*C%j_sgF[|Iw$)/rEA![">
              <next>
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="variables_get" id="L{x|m(tE,e=0m|4pyvs}">
                      <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">draw</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                      <next>
                        <block type="math_change" id="*:gBYFVQ#)cVfHm)jg?M">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">draw</field>
                          <value name="DELTA">
                            <shadow type="math_number" id="w-$F:6Xe4$7zY0lk%E1_">
                              <field name="NUM">4</field>
                            </shadow>
                          </value>
                        </block>
                      </next>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        var t = 0;
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
        }
        p.draw = function() {
          p.translate(width/2, height/2);
          p.stroke('#993399');
          p.rotate(2*PI / (180 / t));
          p.rect(0, 0, 100, 100);
          t += 4;
        }
      }
      var demo = new p5(sketch, 'demo');
    `
  }
];

document.addEventListener("DOMContentLoaded", function () {
  let currentChallenge = null;

  const buttons = document.getElementsByClassName('challenge_button');
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
      const challegeIndex = event.target.dataset.index;
      currentChallenge = challegeIndex;
      document.getElementById('challangeDes').innerHTML = challenges[challegeIndex].description;
      const code = challenges[challegeIndex].code;

      const div = document.getElementById('demo');
      div.removeChild(div.firstChild);
      eval(code);
    })
  });

  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/'
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  var xml_text = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/" x="148" y="185">
        <value name="TIMES">
          <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
            <field name="NUM">60</field>
          </shadow>
        </value>
        <statement name="DO">
          <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
            <value name="degree">
              <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                <field name="NUM">4</field>
              </block>
            </value>
            <next>
              <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                <value name="position_x">
                  <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                    <field name="NUM">0</field>
                  </block>
                </value>
                <value name="position_y">
                  <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                    <field name="NUM">0</field>
                  </block>
                </value>
                <value name="width">
                  <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                    <field name="NUM">100</field>
                  </block>
                </value>
                <value name="height">
                  <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                    <field name="NUM">100</field>
                  </block>
                </value>
                <value name="color">
                  <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                    <field name="COLOUR">#993399</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>
  `;

  var xml = Blockly.Xml.textToDom(xml_text);
  Blockly.Xml.domToWorkspace(xml, workspace);

  const answerButton = document.getElementById('answerButton');
  answerButton.addEventListener('click', function() {
    if (currentChallenge !== null) {
      const blocks = challenges[currentChallenge].blocks;
      var xml = Blockly.Xml.textToDom(blocks);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  });

  button.addEventListener('click', function () {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
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
