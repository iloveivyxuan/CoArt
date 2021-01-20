const fullText = "  Chapter 1 - Hello World";
let currText = "";

const tick = () => {
	const delta = 100 - Math.random() * 100;
	currText = fullText.substring(0, currText.length + 1);
	document.getElementById('content').innerHTML = "\&nbsp;\&nbsp;" + currText;
	if (currText !== fullText) {
		setTimeout(function() {
			tick()
		}, delta);
	}
}

const getStarted = () => {
	document.getElementById('cmd').style.width = "100%";
	document.getElementById('cmd').style.left = "0";
  clear = true;
  tick();

  setTimeout(() => {
  	document.body.addEventListener('click', () => {
	  	window.location.href = "./index.html"
	  }, 100); 
  });
}

document.getElementById('startButton').addEventListener("click", getStarted);
