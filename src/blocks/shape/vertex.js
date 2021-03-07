import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "begin_shape",
    "message0": "begin shape",
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#6742D0',
    "tooltip": "Using the beginShape() and endShape() functions allow creating more complex forms",
    "helpUrl": "https://p5js.org/reference/#/p5/beginShape"
  }
]);

Blockly.JavaScript['begin_shape'] = function(block) {
  var sides = Blockly.JavaScript.valueToCode(block, 'sides', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `beginShape();
`;
  return code;
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "end_shape",
    "message0": "end shape",
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#6742D0',
    "tooltip": "Using the beginShape() and endShape() functions allow creating more complex forms",
    "helpUrl": "https://p5js.org/reference/#/p5/endShape"
  }
]);

Blockly.JavaScript['end_shape'] = function(block) {
  var sides = Blockly.JavaScript.valueToCode(block, 'sides', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `endShape();
`;
  return code;
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "vertex",
    "message0": "vertex %1 x %2 y %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#6742D0',
    "tooltip": "All shapes are constructed by connecting a series of vertices",
    "helpUrl": "https://p5js.org/reference/#/p5/vertex"
  }
]);

Blockly.JavaScript['vertex'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `vertex(${x}, ${y});
`;
  return code;
};
