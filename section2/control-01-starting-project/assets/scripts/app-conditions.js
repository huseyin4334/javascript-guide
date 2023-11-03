/*
    Conditions Equalivalent in JS:
    ==  Equal to
    === Equal to and same type
    !=  Not equal to
    !== Not equal to and same type
    >   Greater than
    <   Less than
    >=  Greater than or equal to
    <=  Less than or equal to
    !   Not


    We have some special cases in JS:

    5 == '5' // true
    5 === '5' // false

    5 != '5' // false
    5 !== '5' // true

    0 == false // true
    0 === false // false
    0 == '' // true

    NaN == NaN // false
    NaN == (5 - 'hello') // false
    isNaN(NaN) == isNaN(4 - 'hello') // true

    let a;
    let b = null;

    a == null // true
    a === null // false
    a == undefined // true
    !a // true

    b == null // true
    b == undefined // true
    b === undefined // false
    !b // true

    !0 // true
    !1 // false

    !'' // true
    !'hello' // false

    5 < 6 // true
    5 < '6' // true
    5 < 'hello' // false - not give error
    0 < true // true


    JavaScript always looks at the first character and only considers other characters if the first character is similar. 
    In addition, capital characters are considered to be smaller than lowercase characters.
    
    'ab' > 'aa' // true
    'a' > 'B' // true
    'a' > 'b' // false
    
*/

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();

    if (
        !enteredNumber || // true if enteredNumber is not null, undefined, 0, '', NaN, false. So if enteredNumber trufy, you can continue.
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return; // return nothing. Just stop the function execution.
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


/*

    Compare Arrays and Objects:
    
    Arrays and objects are reference types. They are not compared by their values but by their reference in memory. 
    So if you compare two arrays or two objects, you're not comparing their values but their reference in memory. 
    Because of that, you  will get false.

    Obtion 1:
    We can compare arrays and objects by their values using JSON.stringify() method. 
    This method converts a JavaScript object or value to a JSON string. So your array or object will be converted to a string and then compared.

    Obtion 2:
    We can compare arrays and objects by their values using lodash library. _.isEqual() method. 
    This method performs a deep comparison between two values to determine if they are equivalent.

    Obtion 3:
    We can compare arrays and objects by their values using a custom function.
*/

// And, Or, Not -> &&, ||, !

// Understanding Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
/*
    Operator precedence determines how operators are parsed concerning each other. 
    Operators with higher precedence become the operands of operators with lower precedence.

    For example:
    5 + 2 === 7 && 4 > 5 || 'Hi' === 'Hi' // true

    It's will be parsed like this:
    ((5 + 2) === 7) && (4 > 5) || ('Hi' === 'Hi')
    (7 === 7) && (4 > 5) || ('Hi' === 'Hi')
    true && false || true                       -> left to right (very important)
    false || true
    true
*/

/*

    Truthy and Falsy Values:
    In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
    All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN). 
    (0n is a BigInt value, not a Number value, and typeof 0n returns "bigint".)

    if ('hello') {
        console.log('hello is truthy');
    }

    let a;

    I dont need to do check my variable null, undefined or empty string.

*/