import Blockly from 'blockly';

Blockly.Blocks['get_coordinate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get coordinate");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#F5AE24');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['get_coordinate'] = function(block) {
  var code = `
// Get Mouse coordinate
push();
stroke('#ddd');
line(mouseX, 0, mouseX, mouseY);
line(0, mouseY, mouseX, mouseY);
var x = min(mouseX+10, 270);
var y = min(mouseY, 330);
x = max(0, x);
y = max(0, y);
rect(x, y, 80, 20, 6);
textAlign(CENTER, CENTER);
text(\`x: \${int(mouseX)}, y: \${int(mouseY)}\`, x+40, y+10);
pop();
`;
  return code;
};
