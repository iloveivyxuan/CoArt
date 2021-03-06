import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "mouse_x",
    "message0": "mouseX",
    "output": null,
    "colour": '#a55b80',
    "tooltip": "The system variable mouseX always contains the current horizontal position of the mouse, relative to (0, 0) of the canvas",
    "helpUrl": "https://p5js.org/reference/#/p5/mouseX"
  }
]);

Blockly.JavaScript['mouse_x'] = function(block) {
  var code = `mouseX`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "mouse_y",
    "message0": "mouseY",
    "output": null,
    "colour": '#a55b80',
    "tooltip": "The system variable mouseY always contains the current vertical position of the mouse, relative to (0, 0) of the canvas",
    "helpUrl": "https://p5js.org/reference/#/p5/mouseY"
  }
]);

Blockly.JavaScript['mouse_y'] = function(block) {
  var code = `mouseY`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "mouse_is_pressed",
    "message0": "mouseIsPressed",
    "output": null,
    "colour": '#a55b80',
    "tooltip": "The boolean system variable mouseIsPressed is true if the mouse is pressed and false if not",
    "helpUrl": "https://p5js.org/reference/#/p5/mouseIsPressed"
  }
]);

Blockly.JavaScript['mouse_is_pressed'] = function(block) {
  var code = `mouseIsPressed`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "mouse_button",
    "message0": "mouseButton",
    "output": null,
    "colour": '#a55b80',
    "tooltip": "Processing automatically tracks if the mouse button is pressed and which button is pressed",
    "helpUrl": "https://p5js.org/reference/#/p5/mouseButton"
  }
]);

Blockly.JavaScript['mouse_button'] = function(block) {
  var code = `mouseButton`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
