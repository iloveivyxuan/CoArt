import Blockly from 'blockly';

Blockly.Blocks['background'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("background");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#777CFB');
 this.setTooltip("The background() function sets the color used for the background of the p5.js canva");
 this.setHelpUrl("https://p5js.org/reference/#/p5/background");
  }
};

Blockly.JavaScript['background'] = function(block) {
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `background(${color});\n`;
  return code;
};
