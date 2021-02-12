import * as Blockly from 'blockly';

Blockly.Blocks['rotate_by_degree'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate");
    this.appendValueInput("degree")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("degree");
    this.appendDummyInput()
        .appendField("°");
    this.setInputsInline(true);
    this.setColour(400);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['rotate_by_degree'] = function(block) {
  var degree = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'rotateByDegree('+degree+');\n';
  return code;
};

function rotateByDegree(degree) {
  rotate(2*PI / (180 / degree));
}

export { rotateByDegree };
