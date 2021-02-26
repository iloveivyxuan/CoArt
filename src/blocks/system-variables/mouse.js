import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "mouse_x",
    "message0": "mouseX",
    "output": null,
    "colour": '#a55b80',
    "tooltip": "",
    "helpUrl": ""
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
    "tooltip": "",
    "helpUrl": ""
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
    "tooltip": "",
    "helpUrl": ""
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
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['mouse_button'] = function(block) {
  var code = `mouseButton`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
