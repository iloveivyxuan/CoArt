import * as Blockly from 'blockly';

Blockly.Blocks['move_to_center'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw from the center of the canvas");
    this.setColour(40);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_to_center'] = function(block) {
  var code = 'translate('+width/2+','+height/2+');\n';
  return code;
};
