import * as Blockly from 'blockly';

Blockly.Blocks['draw_blob'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw a Blob");
    this.appendValueInput("radius")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("radius");
    this.appendValueInput("color")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("color");
    this.setColour(50);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['draw_blob'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'draw_blob('+value_radius+','+Math.floor(Math.random()*5)+','+Math.floor(Math.random()*5)+', '+value_color+', '+Math.floor(Math.random()*5)+');\n';
  return code;
};

function draw_blob(size, xFactor, yFactor, color, diff) {
  const xCenter = width/2 + noise(t/2 + xFactor) * 200 - 100;
  const yCenter = height/2 + noise(t/2 + yFactor) * 200 - 100;
  fill(`${color}`);
  beginShape();
  for (let theta = 0; theta < 2 * PI; theta += 0.01) {
    let r1, r2;
    r1 = cos(theta) + 1;
    r2 = sin(theta) + 1;
    let r = size + noise(0.75 * r1, 0.75 * r2, t + diff) * (2/3) * size;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}

export { draw_blob }
