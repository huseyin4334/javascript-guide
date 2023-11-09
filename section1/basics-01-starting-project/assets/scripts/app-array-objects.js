// Shortcut operands
let num1 = 1;
const num2 = 2;
num1 += num2;
num1 -= num2;
num1 *= num2;
num1 /= num2;
console.log("shortcut operands");   
console.log(num1);
console.log(num1++);
console.log(num1--);
console.log(++num1);
console.log(--num1);

/*

 More Data Types:
    Boolean: true, false
    undefined: undefined
    Object: {age: 30}  // object is key value pair
    Array: [1, 2, 3]  // array is list of values
*/


const logStore = [];

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logStore.push(logEntry);
    console.log(logStore);
}

/*

    Array Indexing:
        1. array[index] -> get element from array
        2. array[index] = value -> set element to array
        3. array.length -> get array length
    
    Important Array Operations:

    1. push() -> add element at the end of array
    2. pop() -> remove element from the end of array
    3. unshift() -> add element at the start of array
    4. shift() -> remove element from the start of array
    5. indexOf() -> find index of element and return index
    6. includes() -> find element in array and return boolean (contains() in java)
    7. reverse() -> reverse array
    8. concat() -> concat two array
    9. slice() -> slice array (array.slice(startIndex, endIndex)
    10. splice() -> splice array (array.splice(startIndex, deleteCount, item1, item2, ...)
    11. forEach() -> iterate array
    12. map() -> iterate array and return new array
    13. filter() -> iterate array and return new array
    
*/

function accessObjectData() {
    const person = {
        name: 'Huseyin',
        age: 30,
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there!');
            //return 'Alert!';
        },
        1.5: 'hello'
    };
    console.log(person.name);
    console.log(person['name']);
    console.log(person[1.5]);
    console.log(person.greet());
    console.log(person.hobbies[0]);
    console.log(person.hobbies[1]);
    console.log(person.hobbies);
    console.log(person);
}

accessObjectData();

/*
    null / undefined / NaN:

    1. null -> null is a value that represents "nothing" or "empty". We can use for reset/clear variable.
    let x = null;
    console.log(x); // null
    console.log(typeof x); // object
    
    2. undefined -> undefined is a value that represents "not initialized".
    let x; console.log(x); // undefined
    console.log(typeof x); // undefined
    x = 5; console.log(x); // 5
    
    3. NaN -> NaN is a value that represents "not a number".
    console.log(5 * 'hello'); // NaN
    console.log(5 * NaN); // NaN
    console.log(typeof NaN); // number


    typeof -> typeof operator returns a string indicating the type of the unevaluated operand.
    console.log(typeof 5); // number
    console.log(typeof 5.5); // number
    console.log(typeof 'hello'); // string
    console.log(typeof true); // boolean
    console.log(typeof undefined); // undefined
    console.log(typeof null); // object
    console.log(typeof NaN); // number
    console.log(typeof {}); // object
    console.log(typeof []); // object
*/