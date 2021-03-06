import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "two_pi",
    "message0": "two_pi",
    "output": null,
    "colour": '#A46DEA',
    "tooltip": "TWO_PI is a mathematical constant with the value 6.28318530717958647693",
    "helpUrl": "https://p5js.org/reference/#/p5/TWO_PI"
  }
]);

Blockly.JavaScript['two_pi'] = function(block) {
  var code = `TWO_PI`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
