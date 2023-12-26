const button = document.querySelector('button');
const textP = document.querySelector('p');


// That's usage for fallback
button.addEventListener('click', () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textP.textContent).then(() => {
      console.log('Copied text to clipboard!');
    }
    ).catch(err => {
      console.log('Could not copy text: ', err);
    });
  } else {
    alert('Feature not available, please copy manually!');
  }
});