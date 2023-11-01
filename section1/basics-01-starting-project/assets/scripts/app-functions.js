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
    console.log("calculated");
    const calculationDescription = `${result} + ${userInput.value}`;
    result = addWithNums(parseInt(userInput.value), result);
    outputResult(result, calculationDescription);
}

addWithNums(1, 2);
console.log(result);

// Executing Functions "Indirectly" Using Variables

addBtn.addEventListener('click', addWithNums);

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

