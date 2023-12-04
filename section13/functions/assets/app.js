/*
    Pure Functions:
        - Given the same input, will always return the same output
        - Produces no side effects
        - Side effects is when a function modifies something outside of itself
    - InPure Functions:
        - Given the same input, will NOT always return the same output
        - Produces side effects
    - Factory Functions:
        - A function that returns another function
    - Closure:
        - A feature in JavaScript that allows inner functions to access outer function variables
*/

// Pure Function
function add(num1, num2) {
    return num1 + num2;
}

// Impure Function
function addRandom(num1) {
    return num1 + Math.random();
}

// Impure Function
let previousResult = 0;
function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

// Factory Function
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}


// Closure

// Closure is a feature in JavaScript that allows inner functions to access outer function variables.
// In this example, calculateTax function is an inner function. And tax variable is an outer function variable. We accessed tax variable in calculateTax function. This is called closure.
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));


// Recursion

// Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result.

function powerOf(x, n) {
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));


const myself = {
    name: "Max",
    friends: [
        {
            name: "Manuel",
            friends: [
                {
                    name: "Chris",
                    friends: [
                        {
                            name: "Hari"
                        },
                        {
                            name: "Amilia"
                        }
                    ]
                }
            ]
        },
        {
            name: "Julia"
        }
    ]
};

function getFriendNames(person) {
    const collectedNames = [];
    
    collectedNames.push(person.name);
    
    if (person.friends) {
        
        person.friends.forEach(friend => {
            collectedNames.push(...getFriendNames(friend));
        });
    }

    return collectedNames;
}

console.log(getFriendNames(myself));