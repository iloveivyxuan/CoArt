import Blockly from 'blockly';

Blockly.Blocks['no_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("no fill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#777CFB');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['no_fill'] = function(block) {
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `noFill(${color});`;
  return code;
};
