import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "sin_cos",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "option",
        "options": [
          [
            "sin",
            "sin"
          ],
          [
            "cos",
            "cos"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "num",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": '#E4DA5A',
    "tooltip": "https://p5js.org/reference/#/p5/sin",
    "helpUrl": "Calculates the sine/cosine of an angle"
  }
]);

Blockly.JavaScript['sin_cos'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var number = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${dropdown_option}(${number})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
