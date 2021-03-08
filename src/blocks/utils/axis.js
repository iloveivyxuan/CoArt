import Blockly from 'blockly';

Blockly.Blocks['axis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show coordinate");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#F5AE24');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['axis'] = function(block) {
  var code = `
// Show Coordinate
push();
const step = 25;
const length = max(width, height);
const minL = -length;
const maxL = length;
for (let i = minL; i <= maxL; i += step) {
  stroke('#eee');
  line(minL, i, maxL, i);
  line(i, minL, i, maxL);
  noStroke();
  fill('#444')
  textSize(10);
  if (i == 0) {
    textAlign(CENTER, TOP);
    text(i, 2, 2);
  } else {
    textAlign(LEFT, CENTER);
    text(i, 2, i);
  }
  textAlign(CENTER, TOP);
  if (i !== 0) {
    text(i, i, 2);
  }
}
pop();
`;
  return code;
};
