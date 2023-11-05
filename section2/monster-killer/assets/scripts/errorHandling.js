/* 
    Some errors can not be avoided, but we can handle them in a way that our app does not crash.

    Types of Errors:
    - User Input Errors
        - User enters a string instead of a number
    - Network Errors
        - Server Offline etc.
    - Programmer Errors
    - etc.

    Error Handling:
    - try catch
    - throw
    - finally

    Trow:
    The throw statement allows us to create custom errors. We can throw any value, but it is recommended to throw an object.
    The throw statement interrupts the execution of the function.

    - throw new Error('message');
    - throw { message: 'message', value: value };

*/

function getMaxLifeValues() {

    const enteredValue = prompt('Max health for you and the monster', '100');
    /*
        prompt() is a function that allows us to ask the user for some input. It has two arguments: 
        1. The first argument is the text that should be displayed in the prompt dialog.
        2. The second argument is the default value that should be pre-filled in the input field of the prompt dialog.

        The prompt() function returns the value that the user entered in the input field. Returns a string.
    */

    const parsedValue = parseInt(enteredValue);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw { message: 'Invalid user input, not a number!' };
        // throw new Error('Invalid user input, not a number!');
    }

    return parsedValue;
}

try {
    const choseMaxLife = getMaxLifeValues();
} catch (error) {
    console.log(error);
    choseMaxLife = 100;
    alert('You entered something wrong, default value of 100 was used.');
} finally {
    console.log("I don't now what happened in the try catch block, but I will always run.");
}