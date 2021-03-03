import Blockly from 'blockly';

Blockly.Blocks['rectangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("rectangle");
    this.appendValueInput("x-coordinate")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x-coordinate");
    this.appendValueInput("y-coordinate")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y-coordinate");
    this.appendValueInput("width")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width");
    this.appendValueInput("height")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height");
    this.appendStatementInput("styles")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#6742D0');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['rectangle'] = function(block) {
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var x_coordinate = Blockly.JavaScript.valueToCode(block, 'x-coordinate', Blockly.JavaScript.ORDER_ATOMIC);
  var y_coordinate = Blockly.JavaScript.valueToCode(block, 'y-coordinate', Blockly.JavaScript.ORDER_ATOMIC);
  var statements = Blockly.JavaScript.statementToCode(block, 'styles');
  var code = `push();
${statements}
  rect(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
pop();
`;
  return code;
};
