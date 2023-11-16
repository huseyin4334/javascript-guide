const testBracket = 'test bracket';

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        alert('Hi there!');
    },
    [testBracket] : 'test bracket'
};

// add property
person.isAdmin = true;
console.log(person);

// modify property
person.age = 31;
console.log(person);

// delete property
delete person.age;
console.log(person);

// person.greet();


// If I want to create special keys, I need to use square brackets
person['bracket bracket'] = 'brackets';
console.log(person['bracket bracket']);
console.log(person["age"]);

/*
    Key types:
    - String
    - Symbol
    - Boolean
    - Number
        - I need to use square brackets
        - obj[1.2] = 'twelve';
        - obj['1.2'] = 'twelve';

    Sorting:
    - Numeric keys are sorted first
    - Then string keys
    - Then symbol keys
    - Then boolean keys

    They will sort within their own type too.
*/

person[1.2] = 'twelve'; // SyntaxError: Invalid or unexpected token
console.log(person[1.2]);

person[true] = 'TRUE';
console.log(person[true]);

console.log(person);

// Access with reference
const bracketBracket = 'bracket bracket';

console.log(person[bracketBracket]);

// testBracket is a variable, and we said the object, 
// your key is not testBracket, your key is the value of testBracket
console.log(person["test bracket"]);


// copy without reference
const person2 = {...person}
console.log("person2 ", person2);

const person5 = {...person, age: 31};
console.log("person5 ", person5);

// I can say, hobbies is an array and I want deep copy to them.
const person6 = {...person, hobbies: [...person.hobbies]};
person6.hobbies.push('new hobby');
console.log("person6 ", person6);


// Object.assign is not deep copy. It's like spread operator
// Shallow copy
const person3 = Object.assign({}, person);
console.log("person3 ", person3);

const person4 = Object.assign({}, person, {age: 31});
console.log("person4 ", person4);

const person7 = Object.assign({}, person, {age: 31}, {hobbies: [...person.hobbies]});
console.log("person7 ", person7);

// get object
const { hobbies } = person;
console.log(hobbies);


// seperate object to variables
const { hobbies: hobbies2, ...otherProbes } = person;

console.log(hobbies2);
console.log(otherProbes);


// check existing property
console.log('name' in person);
console.log(person.hasOwnProperty('name'));
console.log(person.name !== undefined);
console.log('test' in person);