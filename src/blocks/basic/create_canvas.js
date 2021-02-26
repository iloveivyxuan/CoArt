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
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['create_canvas'] = function(block) {
  var width = block.getFieldValue('width');
  var height = block.getFieldValue('height');
  var code = `createCanvas(${width}, ${height});\n`;
  return code;
};
