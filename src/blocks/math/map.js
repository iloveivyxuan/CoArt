import Blockly from 'blockly';

Blockly.Blocks['map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("map");
    this.appendValueInput("value")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("from low");
    this.appendValueInput("from_low")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("high");
    this.appendValueInput("from_high")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("to low");
    this.appendValueInput("to_low")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("high");
    this.appendValueInput("to_high")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#E4CCF6');
 this.setTooltip("Re-maps a number from one range to another");
 this.setHelpUrl("https://p5js.org/reference/#/p5/map");
  }
};

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
