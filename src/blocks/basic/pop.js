import Blockly from 'blockly';

Blockly.Blocks['pop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EA4F1E');
 this.setTooltip("The push() function saves the current drawing style settings and transformations, while pop() restores these settings");
 this.setHelpUrl("https://p5js.org/reference/#/p5/pop");
  }
};

Blockly.JavaScript['pop'] = function(block) {
  var code = `pop();\n`;
  return code;
};
