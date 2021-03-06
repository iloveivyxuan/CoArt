import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "map",
    "message0": "map %1 from low %2 high %3 to low %4 high %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "from_low",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "from_high",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "to_low",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "to_high",
        "check": "Number"
      }
    ],
    "inputsInline": false,
    "output": null,
    "colour": "#E4DA5A",
    "tooltip": "Re-maps a number from one range to another",
    "helpUrl": "https://p5js.org/reference/#/p5/map"
  }
]);

Blockly.JavaScript['map'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var from_low = Blockly.JavaScript.valueToCode(block, 'from_low', Blockly.JavaScript.ORDER_ATOMIC);
  var from_high = Blockly.JavaScript.valueToCode(block, 'from_high', Blockly.JavaScript.ORDER_ATOMIC);
  var to_low = Blockly.JavaScript.valueToCode(block, 'to_low', Blockly.JavaScript.ORDER_ATOMIC);
  var to_high = Blockly.JavaScript.valueToCode(block, 'to_high', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `
  map(${value}, ${from_low}, ${from_high}, ${to_low}, ${to_high})
`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
