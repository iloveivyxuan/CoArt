import * as Blockly from 'blockly';
import { draw_blob } from "./block_definitions/index";

window.draw_blob = draw_blob;

Blockly.Blocks['draw_rectangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw a Rectangle");
    this.appendValueInput("position_x")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PositionX");
    this.appendValueInput("position_y")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PositionY");
    this.appendValueInput("width")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width");
    this.appendValueInput("height")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height");
    this.appendValueInput("color")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color");
    this.setColour(10);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['draw_rectangle'] = function(block) {
  var position_x = Blockly.JavaScript.valueToCode(block, 'position_x', Blockly.JavaScript.ORDER_ATOMIC);
  var position_y = Blockly.JavaScript.valueToCode(block, 'position_y', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'draw_rectangle('+position_x+','+position_y+', '+width+','+height+', '+color+');\n';
  return code;
};

Blockly.Blocks['rotate_by_degree'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate");
    this.appendValueInput("degree")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("degree");
    this.setInputsInline(true);
    this.setColour(400);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['rotate_by_degree'] = function(block) {
  var degree = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'rotate_by_degree('+degree+');\n';
  return code;
};

function rotate_by_degree(degree) {
  rotate(2*PI / (180 / degree));
}

function draw_rectangle(position_x, position_y, width, height, color) {
  stroke(color);
  rect(position_x, position_y, width, height);
}

window.draw_rectangle = draw_rectangle;
window.rotate_by_degree = rotate_by_degree;

document.addEventListener("DOMContentLoaded", function () {
  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/'
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  // var xml_text = `
  //   <xml xmlns="https://developers.google.com/blockly/xml">
  //     <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/" x="148" y="185">
  //       <value name="TIMES">
  //         <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
  //           <field name="NUM">60</field>
  //         </shadow>
  //       </value>
  //       <statement name="DO">
  //         <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
  //           <value name="degree">
  //             <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
  //               <field name="NUM">4</field>
  //             </block>
  //           </value>
  //           <next>
  //             <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
  //               <value name="position_x">
  //                 <block type="math_number" id="N:^A[SbM2]6lA;wG658">
  //                   <field name="NUM">0</field>
  //                 </block>
  //               </value>
  //               <value name="position_y">
  //                 <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
  //                   <field name="NUM">0</field>
  //                 </block>
  //               </value>
  //               <value name="width">
  //                 <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
  //                   <field name="NUM">100</field>
  //                 </block>
  //               </value>
  //               <value name="height">
  //                 <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
  //                   <field name="NUM">100</field>
  //                 </block>
  //               </value>
  //               <value name="color">
  //                 <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
  //                   <field name="COLOUR">#993399</field>
  //                 </block>
  //               </value>
  //             </block>
  //           </next>
  //         </block>
  //       </statement>
  //     </block>
  //   </xml>
  // `
  // var xml = Blockly.Xml.textToDom(xml_text);
  // Blockly.Xml.domToWorkspace(xml, workspace);

  button.addEventListener('click', function () {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
    var code = Blockly[lang].workspaceToCode(workspace);
    console.log(code)
    try {
      eval(`
        window.draw = function() {
          background("#fff")
          translate(width/2, height/2);
          `+ code +`
        }
      `);
    } catch (e) {
      alert(e);
    }
  })
});
