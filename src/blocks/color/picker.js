import Blockly from 'blockly';

Blockly.Blocks['color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setOutput(true, null);
    this.setColour('#FFEDED');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['color'] = function(block) {
  var color = block.getFieldValue('color');
  var code = `'${color}'`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};
