import Blockly from 'blockly';

Blockly.Blocks['fill'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("fill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#777CFB');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['fill'] = function(block) {
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `fill(${color});\n`;
  return code;
};
