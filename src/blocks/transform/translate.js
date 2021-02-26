import Blockly from 'blockly';

Blockly.Blocks['translate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("translate")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(175, 0), "x")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(175, 0), "y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#17AD80');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['translate'] = function(block) {
  var x = block.getFieldValue('x');
  var y = block.getFieldValue('y');
  var code = `translate(${x}, ${y});\n`;
  return code;
};
