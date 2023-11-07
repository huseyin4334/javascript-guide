/*

    bind() method:
    - It is used to bind a function to an object.
    - It will return a new function.
    - It will not call the function.

    For example:
    - const add = function() {}
    - add.bind() will return a new function.

    When i create bind(this, ...args) method, i can pass arguments to it.
    When i call created new function, i can pass arguments to it. Because bind add new arguments to the call function.

    For example:
    - const add = function(text, num) {}

    - const addBind = add.bind(this, 'Hello');
    - addBind(5);

*/


const addBind = function (resultHandler, ...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }

    resultHandler(sum);
    return sum;
}

const subtractBind = function (resultHandler, ...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum -= num;
    }
    
    resultHandler(sum);
    return sum;
}

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
}

addBind(showResult.bind(this, 'The result after adding all numbers is:'), 1, 2, 3, 4, 5);
subtractBind(showResult.bind(this, 'The result after subtracting all numbers is:'), 1, 2, 3, 4, 5);