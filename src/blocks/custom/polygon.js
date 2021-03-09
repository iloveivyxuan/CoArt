import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "polygon",
    "message0": "polygon %1 sides %2 radius %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "sides",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "radius",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#EE8DB0',
    "tooltip": "",
    "helpUrl": "/block.html?library=Polygon&func=polygon"
  }
]);

Blockly.JavaScript['polygon'] = function(block) {
  var sides = Blockly.JavaScript.valueToCode(block, 'sides', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Polygon.polygon(${sides}, ${radius});
`;
  return code;
};
