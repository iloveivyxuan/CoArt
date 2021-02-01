import * as Blockly from 'blockly';

// Ellipse with position options - center, top-left, and bottom-right
Blockly.Blocks['simpleEllipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw an ellipse");
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
    this.setColour('#8c66f7');
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.JavaScript['simpleEllipse'] = function(block) {
  const position = block.getFieldValue('position');
  const width = block.getFieldValue('width');
  const height = block.getFieldValue('height');
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
  const code = `
    ellipse(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
  `;
  return code;
};

// Ellipse with stroke and fill functions
Blockly.Blocks['basicEllipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw an ellipse");
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
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with outline")
        .appendField(new Blockly.FieldColour("#993399"), "stroke");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filled by color")
        .appendField(new Blockly.FieldColour("#ffccff"), "fill");
    this.setInputsInline(false);
    this.setColour('#6d46d9');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['basicEllipse'] = function(block) {
  const position = block.getFieldValue('position');
  const width = block.getFieldValue('width');
  const height = block.getFieldValue('height');
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
  const colour_stroke = block.getFieldValue('stroke');
  const colour_fill = block.getFieldValue('fill');
  const code = `
    stroke('${colour_stroke}');
    fill('${colour_fill}');
    ellipse(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
  `
  return code;
};

// Ellipse can set position x and y
Blockly.Blocks['ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw an ellipse");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("at x-coordinate")
        .appendField(new Blockly.FieldNumber(100, 0, 350), "x-coordinate")
        .appendField("and y-coordinate")
        .appendField(new Blockly.FieldNumber(100, 0, 350), "y-coordinate");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with width")
        .appendField(new Blockly.FieldNumber(100, 0), "width")
        .appendField("and height")
        .appendField(new Blockly.FieldNumber(100, 0), "height");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with outline")
        .appendField(new Blockly.FieldColour("#993399"), "stroke");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filled by color")
        .appendField(new Blockly.FieldColour("#ffccff"), "fill");
    this.setInputsInline(false);
    this.setColour('#5935BC');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['ellipse'] = function(block) {
  var x_coordinate = block.getFieldValue('x-coordinate');
  var y_coordinate = block.getFieldValue('y-coordinate');
  var width = block.getFieldValue('width');
  var height = block.getFieldValue('height');
  var colour_stroke = block.getFieldValue('stroke');
  var colour_fill = block.getFieldValue('fill');
  const code = `
    stroke('${colour_stroke}');
    fill('${colour_fill}');
    ellipse(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
  `;
  return code;
};
