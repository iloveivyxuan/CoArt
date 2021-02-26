import Blockly from 'blockly';

Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw");
    this.appendStatementInput("draw")
        .setCheck(null);
    this.setColour('#EA4F1E');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['draw'] = function(block) {
  var statements = Blockly.JavaScript.statementToCode(block, 'draw');
  var code = `
function draw() {
${statements}
}`;
  return code;
};
