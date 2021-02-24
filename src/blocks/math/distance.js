import Blockly from 'blockly';

Blockly.Blocks['distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("distance");
    this.appendValueInput("from_x")
        .setCheck("Number")
        .appendField("from x");
    this.appendValueInput("from_y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("to_x")
        .setCheck("Number")
        .appendField("to x");
    this.appendValueInput("to_y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#E4CCF6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['distance'] = function(block) {
  var from_x = Blockly.JavaScript.valueToCode(block, 'from_x', Blockly.JavaScript.ORDER_ATOMIC);
  var from_y = Blockly.JavaScript.valueToCode(block, 'from_y', Blockly.JavaScript.ORDER_ATOMIC);
  var to_x = Blockly.JavaScript.valueToCode(block, 'to_x', Blockly.JavaScript.ORDER_ATOMIC);
  var to_y = Blockly.JavaScript.valueToCode(block, 'to_y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `
    dist(${from_x}, ${from_y}, ${to_x}, ${to_y})
  `;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
