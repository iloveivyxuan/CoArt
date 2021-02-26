import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "width",
    "message0": "width",
    "output": null,
    "colour": '#a55b80',
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['width'] = function(block) {
  var code = `width`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "height",
    "message0": "height",
    "output": null,
    "colour": '#a55b80',
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['height'] = function(block) {
  var code = `height`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
