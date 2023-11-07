/*
    Rest Operator:
    - The rest operator is used to merge a list of function arguments into an array.
    - If you add (... args) this, it should to be in the last position.
    - If you add (a, b, ... args) like this, it will ignore a and b and it will take the rest of the arguments.

    We are using ... in 2 different ways:
    - Spread Operator
        - [...numbers]
    - Rest Operator
        - (...numbers)
*/

const add = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

const add2 = (a, b, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 52


const subtract = function () {
    let sum = 0;
    for (const num of arguments) { // arguments is a special keyword. It is an array to passed arguments.
        sum -= num;
    }
    return sum;
}

console.log(subtract(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // -55


/*
    
    Function in Functions:
    - We can create functions in functions.
    - We can return functions from functions.
    - We can pass functions to functions.
    
    Because functions are objects, we can do these things.

*/

const add3 = (...numbers) => {
    const validateNumber = (number) => { // We created a function in a function.
        return isNaN(number) ? 0 : number;
    }

    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    return sum;
}


/*
    Callback Functions:
    - Functions that are passed to other functions.
    - They are executed by the other functions.
    - We can't control when they are executed.

    For example:
    - addEventListener() is a callback function.
    - It is executed when the event is fired.
    - addEventListener('click', callback);
    - callback is a callback function.

*/

const addEventListener = (type, callback) => {
    if (type === 'click') {
        callback();
    }
}

const add4 = () => {
    console.log('Hello');
};

addEventListener('click', add4);