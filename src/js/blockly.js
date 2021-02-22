document.addEventListener("DOMContentLoaded", function() {
  const colorSet = {
    'Basic': '#EA4F1E',
    'Transform': '#17AD80',
    'Shape': '#5935BC',
    'Style': '#777CFB',
    'Math': '#E4CCF6',
    'Color': '#FFEDED',
    'Utils': '#F5AE24'
  }

  // Set Category Bar Style
  const categories = document.querySelectorAll('.blocklyTreeRowContentContainer');
  for (let category of categories) {
    const text = category.children[1].innerText;
    category.style.borderLeft = `4px solid ${colorSet[text]}`
  }
});
