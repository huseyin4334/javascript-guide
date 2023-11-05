/* 

    ES5 vs ES6+ (Next Generation JavaScript)

    ES5:
    First, It brought a common usage ground to browsers. It is supported by all browsers. It released in 2009.

    ES6:
    It is the next version of JavaScript. It released in 2015. It is not supported by all browsers. It is supported by modern browsers.
    Browsers need to be updated to support ES6. It is also called ES2015. Browser vendors are working on it.

    Big difference between ES5 and ES6:
    - ES6 is more modern and more efficient. It is easier to write code with ES6. It is more readable and more maintainable.
    - ES6 is not supported by all browsers. ES5 is supported by all browsers.
    - ES5 just have var keyword to declare variables. ES6 has var, let and const keywords to declare variables.
    - Modern browsers updating automatically js engines. Users don't need to update browsers manually. But old browsers don't have automatical update feature.
    - block scope: let and const keywords have block scope. var keyword has function scope.
    - block scope: let and const keywords are only accessible in the block they are defined. var keyword is accessible in the function they are defined.

*/

// That is block scope. It is only accessible in the block it is defined.

let userName = 'John';

// let userName = 'Max'; // SyntaxError: Identifier 'userName' has already been declared

try {
    let userName = 'Max'; // Here is block scope. Because of this line won't give error.
} catch (error) {  
    console.log(error);
}

function sayHi() {
    let age = 30;
    console.log('Hi ' + userName, age);
}

sayHi();

try {
    console.log(age); // ReferenceError: age is not defined
} catch (error) {
    console.log(error);
}



// That is function scope. It is only accessible in the function it is defined.
var userName2 = 'John';
var userName2 = 'Max'; // It is not problem. Because of var keyword has function scope.

if (true) {
    var hobbies = ['Sports', 'Cooking'];
}

console.log(hobbies); // It is not problem. Because of var keyword has function scope. It's defined in the function scope. So it's defined in the global.
                      // if you do this with let or const keywords, you will get error. Because variable stayed in if block.

function sayHi2() {
    var age = 30;
    console.log('Hi ' + userName2, age);

    if (true) {
        var job = 'Developer';
    }

    console.log(job); // It is not problem. Because of var keyword has function scope. It's defined in the function scope. So it's defined in the sayHi2 function.
}

sayHi2();


// IMPORTANT
// Hoisting: It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

console.log(userName3); // undefined
var userName3 = 'John';

// console.log(userName4); // ReferenceError: Cannot access 'userName4' before initialization
let userName4 = 'John';

// var is hoisted. let and const are not hoisted. They are in the temporal dead zone. You can't access them before initialization.


// Strict Mode: It is a way to introduce better error-checking into your code. It is a literal expression. It helps you to write secure JavaScript code.
// JavaScript is not strict mode by default.
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Strict mode makes the code more secure. It helps you to avoid accidental errors. It makes it impossible to accidentally create global variables.
// Recommmended to use strict mode generally in functions or some needed places. Not recommended to use strict mode in global scope.


u = 'John'; // Browser add var keyword automatically.

console.log(u); // John

function sayHi3() {
    'use strict';
    // u2 = 'Max'; // ReferenceError: u2 is not defined. 
    // Because we are in strict mode. 
    // Browser doesn't add var keyword automatically. 
    // We need to add a recognized keyword (var, let, const).

    //let undefined = 'Some value'; // TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'
    // var undefined = 'Some value'; 
    // That not special by strict mode. It is special by JavaScript.
    // but if we define it with var keyword, it is not problem.
    // But if we define it with strict mode in var, it is problem again.
}

sayHi3();
