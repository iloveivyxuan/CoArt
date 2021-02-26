import Blockly from 'blockly';

Blockly.Blocks['stroke'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck("")
        .appendField("stroke");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#777CFB');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['stroke'] = function(block) {
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `stroke(${color});\n`;
  return code;
};
