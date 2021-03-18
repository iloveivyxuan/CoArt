import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
  "type": "rotate",
  "message0": "rotate %1",
  "args0": [
    {
      "type": "input_value",
      "name": "degree"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17AD80",
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['rotate'] = function(block) {
  var degree = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `rotate(${degree});
`;
  return code;
};
