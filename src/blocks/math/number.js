import Blockly from 'blockly';

Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "num");
    this.setOutput(true, null);
    this.setColour('#E4CCF6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['number'] = function(block) {
  var number = block.getFieldValue('num');
  var code = `${number}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
