function first(variable) {
    console.log(`Hi ${variable}!`);
}

first('Max');


let result = 0;
function addWithNums(num1, num2) {
    let result = num1 + num2; // This result is not same as global result. This is local result. That's called "shadowing variables".
    console.log(result);
    return result;
}

function add() {
    const value = getUserNumberInput();
    const initialResult = result;
    result = result + value;
    describeOutput('+', initialResult, value);
}

addWithNums(1, 2);
console.log(result);

// Executing Functions "Indirectly" Using Variables

addBtn.addEventListener('click', add);

/*
    We can add event listener to any html element. We can add event listener to button, div, span, etc.
    2 parameters:
    1. Event name
    2. Function

    We can add function with different ways.
    1. addBtn.addEventListener('click', add);
    2. addBtn.addEventListener('click', addWithNums.bind(this, 3, 5));
    3. addBtn.addEventListener('click', function() {
        addWithNums(3, 5);
    });
    4. addBtn.addEventListener('click', () => addWithNums(3, 5));
*/

/*
 if we give 
 addBtn.addEventListener('click', addWithNums); like that. 
 We said to browser, when click event happens, call addWithNums function. But we don't want to call function in parsing time. 
 We want to call function when click event happens. So we need to write function name. 
 
 That's a indirect way to call function.

 if we give
 addBtn.addEventListener('click', addWithNums(3, 5)); this will take error. Because parser try to call function in parsing time.

 That's a direct way to call function.
 */

 /*

 Converting Data Types:
    1. parseInt() -> convert string to integer (parseInt('5') -> 5)
    2. parseFloat() -> convert string to float (parseFloat('5.5') -> 5.5
    3. Number() -> convert string to number (Number('5') -> 5)
    4. String() -> convert number to string (String(5) -> '5')
    5. Boolean() -> convert string to boolean (Boolean('5') -> true)(Boolean('') -> false
    6. !! -> convert string to boolean (!!'5' -> true)(!!'' -> false)
    7. + -> convert string to number (+'5' -> 5) (+'' -> 0) (+true -> 1) (+false -> 0) (+null -> 0) (+undefined -> NaN) (+'5.5' -> 5.5)
    8. - -> convert string to number (-'5' -> -5) (-'' -> -0) (-true -> -1) (-false -> -0) (-null -> -0) (-undefined -> NaN) (-'5.5' -> -5.5)
    9. .toString() -> convert number to string (5.toString() -> error) (5..toString() -> '5') (5 .toString() -> '5')

 */

console.log(Number('5')); // 5
console.log(5..toString()); // '5'
console.log(5 .toString()); // '5'

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function describeOutput(operation, initialResult, enteredNumber) {
    const description = `${initialResult} ${operation} ${enteredNumber}`;
    outputResult(result, description);
    writeToLog(operation, initialResult, enteredNumber, result);
}

function multiply() {
    const value = getUserNumberInput();
    const initialResult = result;
    result = result * value;
    describeOutput('*', initialResult, value);
}

function subtract() {
    const value = getUserNumberInput();
    const initialResult = result;
    result = result - value;
    describeOutput('-', initialResult, value);
}

function divide() {
    const value = getUserNumberInput();
    const initialResult = result;
    result = result / value;
    describeOutput('/', initialResult, value);
}

subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);