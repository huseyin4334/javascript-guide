/*

    Iterable:
        - An object that implements a Symbol.iterator property
        - Technically, objects that implement the "iterable" protocol and have an @@iterator method (which is available via constant Symbol.iterator)
        - Objects where you can use the for-of loop


    Array Like Objects:
        - An object that has indexed properties and a length property
        - Examples: Strings, Arrays, Arguments, NodeList, HTMLCollection, etc.

    Array Creation:
        - Array Literal
            - let arr = [1, 2, 3];
        - Array Constructor
            - Array or new Array()
            - This is same with Array.of()
            - let arr = new Array(1, 2, 3);
            - let arr = new Array(3); // [undefined, undefined, undefined]
        - Array.of()
            - (element0, element1, ..., elementN)
            - let arr = Array.of(1, 2, 3);
        - Array.from()
            - (iterable, mapFn, thisArg)
            - mapFn is a function to call on every element of the array
            - thisArg is the value of this to use when executing mapFn
            - let arr = Array.from([1, 2, 3]); // [1, 2, 3]
            - let arr = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
            -let arr = Array.from('foo'); // ['f', 'o', 'o']
            - let arr = Array.from(
                [1, 2, 3], // iterable
                x => { return x * this.multiplier }, // mapFn
                { multiplier: 2 } // thisArg
                ); // [2, 4, 6]
*/

const liParams = document.body.querySelectorAll('li');

const liArray = Array.from(liParams); 
// liParams is an array like object, but not an array
// Array likes are iterable too.
// liArray is an array anymore

console.log(liParams);
console.log(liArray);

for (const c of 'Huseyin') { // Array likes are iterable too.
    console.log(c);
}

// Some array methods
const arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]

// First index functions

arr.pop(); // [1, 2, 3]
arr.shift(); // [2, 3]
arr.unshift(1); // [1, 2, 3] -> We can look at for explaination of this method


// More flexible index functions
// functions return applied array and change the original array

arr.splice(1, 0, 5); // [1, 5, 2, 3] 
arr.splice(1, 1, 5); // [1, 5, 2, 3] -> delete 1 index and add 5
arr.splice(1, 1, 5, 6, 7); // [1, 5, 6, 7, 2, 3] -> delete 1 index and add 5, 6, 7
arr.splice(0, 1) // [5, 6, 7, 2, 3] -> delete 0 index and add nothing


// splice for select elements. It returns a new array. It's not change the original array
arr.slice(1, 3); // [6, 7] -> return a new array from 1 to 3 index

// slice is important. Because arrays is working with reference.
// If you use equal operator, you will change the original array
// BECAUSE OBJECTS WORKING WITH REFERENCE
// Normal types are working with value (number, string, boolean, etc.)

const arr2 = arr.slice();
arr2.push(8); // [5, 6, 7, 2, 3, 8]
console.log(arr); // [5, 6, 7, 2, 3]

// if you will slice all array, you can use this too
[...arr]; // [5, 6, 7, 2, 3]


// concat
const arr3 = arr.concat(arr2); // [5, 6, 7, 2, 3, 5, 6, 7, 2, 3, 8]
console.log(arr3);
console.log(arr); // [5, 6, 7, 2, 3]


// index functions

// indexOf
arr.indexOf(5); // 0

const arr4 = [{id: 1}, {id: 2}];

console.log(arr4.indexOf({id: 1})); // -1 -> Because objects working with reference

const obj = {id: 1};
const arr5 = [obj, {id: 2}];
console.log(arr5.indexOf(obj)); // 0 -> Because we use the same reference


// lastIndexOf
// It's working like indexOf, but it's looking from the end of the array
arr.lastIndexOf(7); // 2


// find and findIndex
// find is return the first element that matches the condition
// findIndex is return the index of the first element that matches the condition
// This functions are working with callback functions
// Callback functions are working with 3 parameters
// Callback functions should return boolean value

const arr6 = [{id: 1}, {id: 2}];

const obj2 = arr6.find((obj, index, allArrayVariables) => obj.id === 1); // {id: 1}

const findIndex = arr6.findIndex((obj, index, allArrayVariables) => {
    return obj.id === 1;
}); // 0

console.log("object ", obj2, " index ", findIndex);

const obj3 = arr6.find((obj, index, allArrayVariables) => obj.id === 3); // undefined
const findIndex2 = arr6.findIndex((obj, index, allArrayVariables) => obj.id === 3); // -1

console.log("object ", obj3, " index ", findIndex2);


// includes (for primitive types)

arr.includes(5); // true
arr6.includes( {id: 1} ); // false -> Because objects working with reference


// forEach
// forEach is working with callback functions
// this function is void function

arr.forEach((element, index, allArrayVariables) => {
    console.log("element ", element, " index ", index, " allArrayVariables ", allArrayVariables);
});


// map
// map is working with callback functions
// this function is return a new array
// this function for formatted array

const arr7 = [1, 2, 3];

const arr8 = arr7.map((element, index, allArrayVariables) => {
    let obj = {index: index, value: element ** 2, array: allArrayVariables};
    return obj;
});

console.log(arr8); // [{index: 0, value: 1, array: [1, 2, 3]}, {index: 1, value: 4, array: [1, 2, 3]}, {index: 2, value: 9, array: [1, 2, 3]}]

// sort
// sort is working with callback functions
// this function is return a new array but it's change the original array too

const arr9 = [9, 2, 3, 1, 5, 6, 7, 8, 4];
arr9.sort(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr9);

const arr10 = [
    {id: 100, userName: "test"}, 
    {id: 1, userName: "test1"}, 
    {id: 1, userName: "test44"}, 
    {id: 9, userName: "test2"}, 
    {id: 2, userName: "test3"}
];

// you can return 1, -1, 0
arr10.sort((a, b) => {
    if (a.id > b.id) return 1; // This means a is bigger than b
    if (a.id < b.id) return -1; // This means a is smaller than b
    return 0; // This means a is equal to b
});

console.log(arr10); // [{id: 1, userName: "test1"}, {id: 1, userName: "test44"}, {id: 2, userName: "test3"}, {id: 9, userName: "test2"}, {id: 100, userName: "test"}]


// reverse
// reverse is change the original array

console.log(arr10.reverse());


// filter
// filter is working with callback functions
// this function is return a new array
// It's want a boolean value from callback functions

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr12 = arr11.filter((element, index, allArrayVariables) => {
    return element % 2 === 0;
});

console.log(arr12); // [2, 4, 6, 8]


// reduce
// reduce is working with callback functions
// this function is return a new array
// It's want a boolean value from callback functions
// start accumulator and write a callback function. Take accumulator like return value.

const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// accumulator is the value that is returned by the last callback invocation
// 0 is the initial value of accumulator
const additionOfTheNumbers = arr13.reduce((accumulator, element, index, allArrayVariables) => {
    return accumulator + element;
}, 0);

console.log(additionOfTheNumbers); // 45

const findBiggerThan5 = arr13.reduce((prev, cur, index, all) => {
    if (cur > 5) 
        prev.push(cur);
    return prev; // don't forget we should return prev for next iteration
}, []);

console.log(findBiggerThan5); // [6, 7, 8, 9]


// String to Array

const str = "Huseyin";

const arr14 = Array.from(str); // ["H", "u", "s", "e", "y", "i", "n"]
const arr15 = [...str]; // ["H", "u", "s", "e", "y", "i", "n"]
// spread operator is working with iterable objects


const str2 = "Huseyin, C, 26, 1.80";
const seperate = str2.split(", "); // ["Huseyin", "C", "26", "1.80"]
// We can give limit parameter

const joinAgain = seperate.join(", "); // "Huseyin, C, 26, 1.80"
// default join is ","

const connectAgain = seperate.toString(); // "Huseyin,C,26,1.80"


// If some functions not taking arrays as a parameter, you can use spread operator

console.log(Math.max(...arr13)); // 9