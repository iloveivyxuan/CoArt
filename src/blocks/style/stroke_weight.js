import Blockly from 'blockly';

Blockly.Blocks['stroke_weight'] = {
  init: function() {
    this.appendValueInput("weight")
        .setCheck("Number")
        .appendField("stroke weight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#777CFB');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['stroke_weight'] = function(block) {
  var stroke_weight = Blockly.JavaScript.valueToCode(block, 'weight', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `strokeWeight(${stroke_weight});\n`;
  return code;
};
