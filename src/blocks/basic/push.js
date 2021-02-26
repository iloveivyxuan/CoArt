import Blockly from 'blockly';

Blockly.Blocks['push'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("push");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EA4F1E');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['push'] = function(block) {
  var code = `push();\n`;
  return code;
};
