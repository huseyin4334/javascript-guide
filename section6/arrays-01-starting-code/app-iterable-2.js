// array destructuring

const nameArray = ['Max', 'Manuel', 'Anna', 45, true];

const [firstName, lastName] = nameArray;

console.log(firstName, lastName);

const [fName, lName, ...others] = nameArray;

console.log(fName, lName, others);


// object destructuring

const person = {name: 'Max', age: 30, hobbies: ['Sports', 'Cooking'], greet() {console.log('Hi there!');}};

const {name, age} = person;

console.log(name, age);



// MAPS AND SETS

/* 

    SETS
        - Sets are a collection of values which are not ordered and not indexed
        - Sets are not allow duplicate values
        - Sets are working with reference
        - Sets are iterable
        - Sets are not working with index

    MAPS
        - Maps are a collection of key-value pairs
        - Maps are not allow duplicate keys
        - Maps are working with reference
        - Maps are iterable
        - Maps are not working with index
        - Objects are working like Maps. But Objects not garantie the order of the keys
*/


// SETS
// if you want create a new Set, you should use the new Set() constructor
const ids = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2]);


// add, delete, clear, has, entries, values, keys, forEach

console.log(ids); // Set(10) {1, 2, 3, 4, 5, …}
ids.add(2); // not working. But not throw error
ids.add(11); // working

ids.delete(5);
console.log(ids); // Set(10) {1, 2, 3, 4, 6, …}

console.log(ids.has(1)); // true


console.log(ids.entries()); // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4, 6 => 6, …}

// for (const [key, value] of ids.entries()) { // [key, value] = [key, key]
//     console.log(key);
// }

// for (const key of ids.keys()) {
//     console.log(key);
// }

// for (const value of ids.values()) {
//     console.log(value);
// }

// .values() and .keys() are same, .entries() is return a array with key and value

ids.forEach((value, key, set) => {
    console.log(value, key, set);
});


// MAPS
// if you want create a new Map, you should use the new Map() constructor
const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

// Maps taking iterable object. 
// Every element of the iterable object should be a array with 2 elements
const personData = new Map([
    [
        person1, [{date: 'yesterday', price: 10}]
    ],
    [
        person2, [{date: 'two weeks ago', price: 100}]
    ]
]);

console.log(personData); // Map(2) {{…} => Array(1), {…} => Array(1)}

console.log(personData.get(person1)); // [{…}]

personData.set(person1, [{date: 'yesterday', price: 10}, {date: 'today', price: 20}]);

console.log(personData); // Map(2) {{…} => Array(2), {…} => Array(1)}

const person3 = {name: 'Anna'};

personData.set(person3, [{date: 'yesterday', price: 10}, {date: 'today', price: 20}]);

console.log(personData); // Map(3) {{…} => Array(2), {…} => Array(1), {…} => Array(2)}

console.log("Person3 ", personData.has(person3)); // true

console.log(personData.get({name: 'Max'})); // undefined


for (const [key, value] of personData.entries()) {
    console.log(key, value);
}

console.log(personData.size); // 3

/*
    Maps vs Objects
    
    Maps:
        - Maps are iterable
        - Maps are not working with index
        - Maps are not garantie the order of the keys
        - We can use any type of key
        - Better performance for big data
    
    Objects:
        - Objects are not iterable
        - Objects are working with index
        - Objects are garantie the order of the keys
        - We can use only string, number and symbol as key
*/



/* 
    WeakSet and WeakMap
        - WeakSet and WeakMap are not iterable
        - WeakSet and WeakMap are working with reference. But;
            - If you add an object to a WeakSet or WeakMap and the object is not used anywhere else in your application, it will be garbage collected.
            - If you use a Set or Map, the object will not be garbage collected because it is still used in the Set or Map.
*/

let person4 = {name: 'Max'};

const persons = new WeakSet();
persons.add(person4);

console.log(persons); // WeakSet {{…}}

person4 = null;

console.log(persons); // WeakSet {{…}}


let person5 = {name: 'Max'};

const persons2 = new Set();
persons2.add(person5);

console.log(persons2); // Set(1) {{…}}

person5 = null;

console.log(persons2); // Set(1) {{…}}

// Control persons and persons2 in the console later garbage collection is done. You will see the difference