import * as Blockly from 'blockly';

Blockly.Blocks['ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw an epplipse");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("at")
        .appendField(new Blockly.FieldDropdown([["center","center"], ["top-left","top-left"], ["bottom-right","bottom-right"]]), "position");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with width")
        .appendField(new Blockly.FieldTextInput("100"), "width");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with height")
        .appendField(new Blockly.FieldTextInput("100"), "height");
    this.setInputsInline(false);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['ellipse'] = function(block) {
  var position = block.getFieldValue('position');
  var width = block.getFieldValue('width');
  var height = block.getFieldValue('height');
  var x_coordinate;
  var y_coordinate;
  if (position === 'center') {
  	x_coordinate = '175';
  	y_coordinate = '175';
  } else if (position === 'top-left') {
  	x_coordinate = str(float(width)/2);
  	y_coordinate = str(float(height)/2);
  } else if (position === 'bottom-right') {
  	x_coordinate = str(350 - float(width/2));
  	y_coordinate = str(350 - float(height/2));
  }
  var code = 'ellipse('+x_coordinate+', '+y_coordinate+', '+width+', '+height+')';
  return code;
};
