/*
const userName = 'Max';
let userName = 'Max';
var userName = 'Max';

let is normal variable. You can assign and change the value of it.
const is constant variable. You can assign the value of it only once. You can't change the value of it. (Like final in Java)
var is old way to declare variable. It is not recommended to use it.

+, -, *, /, %, ** are same as Java.

0 + 'hello' = '0hello'

5 - '3' = 2

5 - 'hello' = NaN

5 * '3' = 15

5 / '3' = 1.6666666666666667

5 % '3' = 2

5 ** '3' = 125



Data Types:
Number: 1, 5.3, -10 (All numbers, no differentiation between integers or floats)
String: 'Hi', "Hi", `Hi` (All text values)

*/
const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';
calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`; 


// You can use backtick to use variable in string. This is called template literal.

calculationDescription = `( ${defaultResult} + 10) 

* 3 / 2 - 1`;

calculationDescription = `( ${defaultResult} + 10) \n * 3 / 2 - 1`;
/* 
You can use enter in string. It will be shown in output. Because Browser will not show enter in Html. It will show enter in output. That's a behaviour of browser.
I can use \n to show enter in output. It will show enter in output.

We can add white spaces with css. If you want to show white spaces in html, you can use pre tag.
    white-space: pre;
*/

currentResult = (currentResult + 10) * 3 / 2 - 1;
/*
When you set to const variable to let variable, you can let variable to change the value of it. Because let variable taking the value of const variable.

Here not working like java. Because Java have references. You are not taking value in java. You are taking referances.
*/

outputResult(currentResult, calculationDescription);

const arr = [1, 2, 3];
arr.push(4);
// You can not arr = [1, 2, 3, 4]; or arr = 5; because arr is constant variable.


let c = 5 % '3';
console.log(c);

c = '3' - 5;
console.log(c);

c = '3' + 5;
console.log(c);
// if you use - operator, it will convert string to number. But if you use + operator, it will convert number to string.