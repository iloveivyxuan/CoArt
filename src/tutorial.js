import p5 from 'p5';
import Blockly from 'blockly';
import "./blocks/index";
import './css/tutorial.css';
import './css/global.css';

document.addEventListener("DOMContentLoaded", function() {
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    saveCanvas('myCanvas');
  });

  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/',
      zoom:
      	{
      		controls: true,
      		startScale: 1.0,
      		maxScale: 3,
      		minScale: 0.3,
      		scaleSpeed: 1.2,
      		pinch: true
      	},
      trashcan: true
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', () => {
    const code = Blockly[lang].workspaceToCode(workspace);
    const geval = eval;
    try {
    	background("#fff");
      geval(code);
    } catch (e) {
      alert(e);
    }
  });

  // Progress Bar
  const challengeNum = 7;
  var currentChallenge = 2;

  const generateProgressBar = (num) => {
    var list = ``;
    for (var i = 0; i < num; i++) {
      if (i < currentChallenge) {
        list += `<li class="challenge done" data-challenge='${i}'></li>`
      }
      else if (i == currentChallenge) {
        list += `<li class="challenge active current" data-challenge='${i}'></li>`
      } else {
        list += `<li class="challenge" data-challenge='${i}'></li>`;
      }
    }
    return list
  }

  document.getElementById('progressBar').innerHTML = generateProgressBar(challengeNum);

  const lists = document.getElementsByClassName('challenge');

  const removeActive = () => {
    for (const list of lists) {
      list.classList.remove('active');
    }
  };

  for (const list of lists) {
    list.addEventListener('click', () => {
      const backToChallenge = list.dataset.challenge;
      console.log(backToChallenge)
      if (backToChallenge > currentChallenge) {
        console.log('no')
        return
      }
      removeActive();
      list.classList.add('active');
    });
  }
});
