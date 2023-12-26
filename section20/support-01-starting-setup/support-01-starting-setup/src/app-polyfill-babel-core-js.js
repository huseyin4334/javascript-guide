
/*
// Here will import when we use babel with useBuiltIns: 'entry' option.
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// If we use it with useBuiltIns: 'usage' option, we don't import all core-js.

*/

const button = document.querySelector('button');
const textP = document.querySelector('p');


// That's usage for fallback
button.addEventListener('click', () => {
  promise = new Promise();
  console.log(promise);
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
  Polyfill
  
  Polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
  We can add some new js features to older browsers by using polyfill.

  If we are using in normal website, we can use polyfill.io to add polyfill to our website.
  But if we are using in nodejs based frameworks, we can use polyfill library from npm.

  https://polyfill.io/v3/url-builder/
  https://www.npmjs.com/package/polyfill-library

  In this example, we are using polyfill library from npm.
  We can install it by using npm install polyfill-library --save
  Or we can install specific features with packages like npm install whatwg-fetch --save
    - We installed whatwg-fetch package to use fetch api in older browsers.
  import 'polyfill-library/polyfills/navigator.clipboard'; we can import specific feature like this.



  Transpilation

  Transpilation is the process of converting one code to older version of code in javascript.

  We can use babel to transpile our code.

  We can install babel by using npm install @babel/core @babel/cli @babel/preset-env --save-dev
  (We need webpack to use babel in our project. We installed webpack in previous section.)

*/