import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "two_pi",
    "message0": "two_pi",
    "output": null,
    "colour": '#A46DEA',
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['two_pi'] = function(block) {
  var code = `TWO_PI`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
