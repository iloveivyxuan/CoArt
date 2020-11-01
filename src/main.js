document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('clearButton');

    button.addEventListener('click', function() {
      console.log("Here")
      window.draw = function() {
        background("#fff");
      }
    });
});
