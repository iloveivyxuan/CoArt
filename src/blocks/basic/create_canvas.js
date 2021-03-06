import Blockly from 'blockly';

Blockly.Blocks['create_canvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create canvas")
        .appendField("width")
        .appendField(new Blockly.FieldNumber(350, 0), "width")
        .appendField("height")
        .appendField(new Blockly.FieldNumber(350, 0), "height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EA4F1E');
 this.setTooltip("Creates a canvas element in the document, and sets the dimensions of it in pixels");
 this.setHelpUrl("https://p5js.org/reference/#/p5/createCanvas");
  }
};

Blockly.JavaScript['create_canvas'] = function(block) {
  var width = block.getFieldValue('width');
  var height = block.getFieldValue('height');
  var code = `createCanvas(${width}, ${height});\n`;
  return code;
};
