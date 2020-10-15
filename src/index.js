import * as Blockly from 'blockly';

Blockly.Blocks['draw_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw a Blob");
    this.appendValueInput("radius")
        .setCheck(null)
        .appendField("Size");
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("X axis");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("Y axis");
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("color");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['draw_circle'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'draw_Circle('+value_radius+','+value_x+','+value_y+', '+value_color+');\n';
  return code;
};

function draw_Circle(size, xFactor, yFactor, color) {
  const xCenter = width/2 + noise(t/2 + xFactor) * 200 - 100
  const yCenter = height/2 + noise(t/2 + yFactor) * 200 - 100
  fill(`${color}`);
  beginShape();
  for (let theta = 0; theta < 2 * PI; theta += 0.01) {
    let r1, r2;
    if (theta < PI/2) {
      r1 = cos(theta);
      r2 = 1;
    } else if (theta < PI) {
      r1 = 0;
      r2 = sin(theta);
    } else if (theta < 3 * PI/2) {
      r1 = sin(theta);
      r2 = 0;
    } else {
      r1 = 1;
      r2 = cos(theta);
    }
    let r = size + noise(0.75 * r1, 0.75 * r2, t) * (2/3) * size;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}

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
