import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "rgba",
    "message0": "rgba ( %1 , %2 , %3 , %4 )",
    "args0": [
      {
        "type": "field_number",
        "name": "r",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "g",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "b",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "a",
        "value": 1,
        "min": 0,
        "max": 1
      }
    ],
    "output": null,
    "colour": '#FFEDED',
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['rgba'] = function(block) {
  var r = block.getFieldValue('r');
  var g = block.getFieldValue('g');
  var b = block.getFieldValue('b');
  var a = block.getFieldValue('a');
  var code = `'rgba(${r}, ${g}, ${b}, ${a})'`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
