import Blockly from 'blockly';

Blockly.Blocks['pop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EA4F1E');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['pop'] = function(block) {
  var code = `pop();`;
  return code;
};
