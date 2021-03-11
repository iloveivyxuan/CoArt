import p5 from 'p5';
import './css/browse.css';

document.addEventListener("DOMContentLoaded", function() {
  var sketch = function(p) {
  	p.setup = function() {
		  p.createCanvas(350, 350);
		  p.background('#ffffff');
		  p.push();
		    p.fill('#ffccff');
		    p.stroke('#993399');
		    p.strokeWeight(3);

		    p.ellipse(150, 260, 30, 100);
		  p.pop();
		  p.push();
		    p.fill('#ffccff');
		    p.stroke('#993399');
		    p.strokeWeight(3);

		    p.ellipse(200, 260, 30, 100);
		  p.pop();
		  p.push();
		    p.fill('#ffccff');
		    p.stroke('#993399');
		    p.strokeWeight(3);

		    p.rect(125, 175, 100, 100);
		  p.pop();
		  p.push();
		    p.fill('#ffccff');
		    p.stroke('#993399');
		    p.strokeWeight(3);

		    p.ellipse(175, 175, 100, 100);
		  p.pop();
		  p.push();
		    p.fill('#000000');

		    p.ellipse(150, 190, 20, 20);
		  p.pop();
		  p.push();
		    p.fill('#000000');

		    p.ellipse(200, 190, 20, 20);
		  p.pop();

		}
  }

  var tutorial0_0 = new p5(sketch, 'tutorial0-0');

  var sketch_1 = function(p) {
  	p.setup = function() {
		  p.createCanvas(350, 350);
		  p.background('#ffffff');
		  p.push();
		    p.fill('#ffcc33');
		    p.noStroke();

		    p.ellipse(200, 200, 230, 230);
		  p.pop();
		  p.push();
		    p.noStroke();
		    p.fill('#cc0000');

		    p.ellipse(250, 230, 80, 100);
		  p.pop();
		  p.push();
		    p.noStroke();
		    p.fill('#000000');

		    p.ellipse(200, 200, 20, 20);
		  p.pop();
		  p.push();
		    p.noStroke();
		    p.fill('#000000');

		    p.ellipse(270, 165, 20, 20);
		  p.pop();
		}
  }

  var tutorial0_1 = new p5(sketch_1, 'tutorial0-1');

  var sketch2 = function(p) {
    var t = 0;
    p.setup = function() {
      p.createCanvas(350, 350);
      p.background("#fff");
      p.noFill();
    }
    p.draw = function() {
      p.translate(p.width/2, p.height/2);
      p.stroke('#993399');
      p.rotate(2*p.PI / (180 / t));
      p.rect(30, 30, 100, 100);
      t += 4;
    }
  }

  var tutorial1_0 = new p5(sketch2, 'tutorial1-0');

  var sketch3 = function(p) {
    p.setup = function() {
      p.createCanvas(350, 350);
      p.background("#fff");
      p.noFill();
      p.noLoop();
    }
    p.draw = function() {
      p.translate(p.width/2, p.height/2);
      for (var i = 0; i <= 10; i++) {
        p.stroke('#993399');
        p.rotate(2*p.PI / (180 / 4));
        p.rect(0, 0, 100, 100);
      }
    }
  }
  var tutorial1_1 = new p5(sketch3, 'tutorial1-1');
});
