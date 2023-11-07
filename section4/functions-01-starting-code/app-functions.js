/**
 * 
    Functions vs Methods:
    - Functions are stand alone.
    - Methods are functions that are attached to objects

    For example:
    - console.log() is a method. Because it is attached to the console object.

    function add() {
        console.log('Hello');
    }
    add(); // Hello -> This is a function. Because it is not attached to any object.
 */

function add() {
    console.log('Hello');
}

add(); // This is a function. Because it is not attached to any object.



const add2Func = function add2() { // This is not in the global scope. It is in the add2Func scope.
    console.log('Hello 2');
};

// add2(); // This will give an error. Because add2 is not defined yet.

add2Func(); // This is a method. Because it is attached to the add2 object.

console.log(typeof add); // function
console.log(typeof add2Func); // function

console.dir(add); // This will show the function definition.

try {
    startGameBtn.addEventListener('click', add2);
} catch (error) {
    console.log(error);
}

// startGameBtn.addEventListener('click', add); // addEventListener is a method. Because it is attached to the startGameBtn object.


/* 
    Function Expressions vs Function Declarations:
    - Function Expressions are functions that are assigned to variables.
        - add2Func is a function expression.
        - We cannot call function expressions before they are defined. Because they are not hoisted.
    - Function Declarations are functions that are not assigned to variables.
        - add is a function declaration.
        - We can call function declarations before they are defined. Because they are hoisted.

    Anonimous Functions:
    - Functions that don't have a name.
    - They are used as callbacks.
    - We can use function expressions to create anonimous functions.

    We can create functions in 3 ways:
    - Function Declaration
        - function add() {}
    - Function Expression
        - const add = function() {}
        - function() {} (Anonimous Function)
    - Arrow Function
        - const add = () => {}
        - () => {} (Anonimous Function)
        - () => ... (1 line of code)
        - arg => {} (1 argument)
        
        () => {} is the same as function() {}.

    We can give a name to an anonimous functions for debugging purposes.
*/