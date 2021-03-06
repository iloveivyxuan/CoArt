import Blockly from 'blockly';

Blockly.Blocks['push'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("push");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EA4F1E');
 this.setTooltip("The push() function saves the current drawing style settings and transformations, while pop() restores these settings");
 this.setHelpUrl("https://p5js.org/reference/#/p5/push");
  }
};

Blockly.JavaScript['push'] = function(block) {
  var code = `push();\n`;
  return code;
};
