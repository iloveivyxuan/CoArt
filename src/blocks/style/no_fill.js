import Blockly from 'blockly';

Blockly.Blocks['no_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("no fill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#777CFB');
 this.setTooltip("Disables filling geometry");
 this.setHelpUrl("https://p5js.org/reference/#/p5/noFill");
  }
};

Blockly.JavaScript['no_fill'] = function(block) {
  var code = `noFill();\n`;
  return code;
};
