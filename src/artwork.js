import './blocks/index';
import './css/global.css';
import './js/canvas';

document.addEventListener("DOMContentLoaded", function() {
  const code = `
    function setup() {
      createCanvas(720, 720);
      noFill();
      background(255);
      strokeWeight(2);
      stroke(0, 25);
    }

    function draw() {
      if (mouseIsPressed && mouseButton == LEFT) {
        push();
        translate(width / 2, height / 2);

        var circleResolution = int(map(mouseY, 0, height, 3, 15));
        var radius = dist(mouseX, mouseY, width / 2, height / 2);
        var angle = TAU / circleResolution;

        beginShape();
        for (var i = 0; i <= circleResolution; i++) {
          var x = cos(angle * i) * radius;
          var y = sin(angle * i) * radius;
          vertex(x, y);
        }
        endShape();

        pop();
      }
    }
  `;
});
