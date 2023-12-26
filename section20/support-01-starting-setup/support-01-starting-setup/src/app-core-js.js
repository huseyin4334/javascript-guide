import 'core-js/features/promise'; // We can import specific feature like this.

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

/*
  Core-js
  Core-js is a library that provides polyfills for new features in older browsers.

  We can install core-js by using npm install core-js --save

  We can import all features by using import 'core-js'; or import 'core-js/stable';

  We can import specific feature like this import 'core-js/features/promise';

  We should prefer specific feature imports because it will reduce the size of our bundle.

*/