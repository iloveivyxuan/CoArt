import * as Blockly from 'blockly';

Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Random");
    this.appendValueInput("left")
        .setCheck(null)
        .appendField("Left Boundary");
    this.appendValueInput("right")
        .setCheck(null)
        .appendField("Right Boundary");
    this.setOutput(true, "Number");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['random'] = function(block) {
  var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'random('+value_left+','+value_right+');\n';
  return code;
};
