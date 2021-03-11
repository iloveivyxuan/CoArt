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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8c66f7');
  this.setTooltip("Draws an ellipse (oval) to the screen");
  this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
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
  const code = `ellipse(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
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
    this.appendStatementInput("styles")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#6d46d9');
 this.setTooltip("Draws an ellipse (oval) to the screen");
 this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
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
  var statements = Blockly.JavaScript.statementToCode(block, 'styles');
  const code = `push();
${statements}
  ellipse(${x_coordinate}, ${y_coordinate}, ${width}, ${height});
pop();
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
 this.setTooltip("Draws an ellipse (oval) to the screen");
 this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
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
pop();
`;
  return code;
};
