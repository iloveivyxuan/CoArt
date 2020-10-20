import * as Blockly from 'blockly';

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
  var code = 'drawRectangle('+position_x+','+position_y+', '+width+','+height+', '+color+');\n';
  return code;
};

function drawRectangle(position_x, position_y, width, height, color) {
  stroke(color);
  rect(position_x, position_y, width, height);
}

export { drawRectangle };
