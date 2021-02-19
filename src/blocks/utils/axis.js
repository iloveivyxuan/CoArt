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
    push();
    const step = 25;
    const min = -400;
    const max = 400;
    for (let i = min; i <= max; i += step) {
      stroke('#eee');
      line(min, i, max, i);
      line(i, min, i, max);
      noStroke();
      fill('#444')
      textSize(10);
      if (i == 0) {
        textAlign(CENTER, TOP);
        text(\`\${i}\`, 2, 2);
      } else {
        textAlign(LEFT, CENTER);
        text(\`\${i}\`, 2, i);
      }
      textAlign(CENTER, TOP);
      if (i !== 0) {
        text(\`\${i}\`, i, 2);
      }
    }
    pop();
  `;
  return code;
};
