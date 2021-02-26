import Blockly from 'blockly';

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
        .appendField("width")
        .appendField(new Blockly.FieldTextInput("100"), "width");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height")
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
    fill('#fff');
    stroke('#000');
    strokeWeight(1);
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
        .appendField("width")
        .appendField(new Blockly.FieldTextInput("100"), "width");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height")
        .appendField(new Blockly.FieldTextInput("100"), "height");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("fill color")
        .appendField(new Blockly.FieldColour("#ffccff"), "fill");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("border color")
        .appendField(new Blockly.FieldColour("#993399"), "stroke");
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
        .appendField("at")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(0, 0, 350), "x-coordinate")
        .appendField(" y")
        .appendField(new Blockly.FieldNumber(0, 0, 350), "y-coordinate");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width")
        .appendField(new Blockly.FieldNumber(100, 0), "width");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height")
        .appendField(new Blockly.FieldNumber(100, 0), "height");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("fill color")
        .appendField(new Blockly.FieldColour("#ffccff"), "fill");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("border color")
        .appendField(new Blockly.FieldColour("#993399"), "stroke");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("border width")
        .appendField(new Blockly.FieldNumber(3), "stroke_weight");
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
  var stroke_weight = block.getFieldValue('stroke_weight');
  var colour_fill = block.getFieldValue('fill');
  const code = `
    stroke('${colour_stroke}');
    strokeWeight('${stroke_weight}')
    fill('${colour_fill}');
    ellipse(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
  `;
  return code;
};

// Customized Ellipse
Blockly.Blocks['customized_ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ellipse");
    this.appendValueInput("x-coordinate")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x-coordinate");
    this.appendValueInput("y-coordinate")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y-coordinate");
    this.appendValueInput("width")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width");
    this.appendValueInput("height")
        .setCheck("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height");
    this.appendStatementInput("styles")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#6742D0');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['customized_ellipse'] = function(block) {
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var x_coordinate = Blockly.JavaScript.valueToCode(block, 'x-coordinate', Blockly.JavaScript.ORDER_ATOMIC);
  var y_coordinate = Blockly.JavaScript.valueToCode(block, 'y-coordinate', Blockly.JavaScript.ORDER_ATOMIC);
  var statements = Blockly.JavaScript.statementToCode(block, 'styles');
  var code = `push();
${statements}
  ellipse(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
pop();\n
  `;
  return code;
};
