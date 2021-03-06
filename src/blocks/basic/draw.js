import Blockly from 'blockly';

Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw");
    this.appendStatementInput("draw")
        .setCheck(null);
    this.setColour('#EA4F1E');
 this.setTooltip("Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called");
 this.setHelpUrl("https://p5js.org/reference/#/p5/draw");
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
