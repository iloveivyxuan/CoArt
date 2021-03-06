import Blockly from 'blockly';

Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup");
    this.appendStatementInput("setup")
        .setCheck(null);
    this.setColour('#EA4F1E');
 this.setTooltip("The setup() function is called once when the program starts");
 this.setHelpUrl("https://p5js.org/reference/#/p5/setup");
  }
};

Blockly.JavaScript['setup'] = function(block) {
  var statements = Blockly.JavaScript.statementToCode(block, 'setup');
  var code = `
function setup() {
${statements}
}`;
  return code;
};
