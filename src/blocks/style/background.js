import Blockly from 'blockly';

Blockly.Blocks['background'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("background");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#777CFB');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['background'] = function(block) {
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `background(${color});\n`;
  return code;
};
