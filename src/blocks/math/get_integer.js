import Blockly from 'blockly';

Blockly.Blocks['get_integer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["round","round"], ["ceiling","ceil"], ["floor","floor"]]), "options");
    this.appendValueInput("num")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#E4DA5A');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['get_integer'] = function(block) {
  var options = block.getFieldValue('options');
  var num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${options}(${num})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
