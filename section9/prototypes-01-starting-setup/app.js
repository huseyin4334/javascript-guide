class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person('Max');

person.greet();


/*
    Constructor Functions
    - Constructor Functions
        - A function that is used to construct objects
        - The "this" keyword refers to the object that will be created by the constructor function
        - We can then use the constructor function to create new objects
        - For example, we can create a new person object by calling the constructor function with the "new" keyword

    Prototypes
    - Prototypes are the mechanism by which JavaScript objects inherit features from one another
    - Prototypes are copy of the original object. It's have all the same properties and methods
    - Javascript is a prototype-based language, meaning that every object has a prototype object
    - The prototype object is a template object for all objects created using the object constructor
    - When we call any method on an object, JavaScript will first look for that method on the prototype of that object
    - It will look at it prototype chain. If it doesn't find it, it will look at the prototype of the prototype and so on
    - If it doesn't find it, it will return undefined 

    For Example:
    class ProductList extends Component {
        ....
    }

    const productList = new ProductList();

    console.log(ProductList.prototype);
    // Output: {render: ƒ, constructor: ƒ}

    console.log(ProductList.prototype === Component.prototype); // false
    console.log(ProductList.prototype === productList.__proto__); // true


    Prototype Chain
    - The prototype chain is a series of links between objects
    - Every extended class has a prototype chain

    For Example:
    - ProductList
        - Component
            - Object


    // Constructor Function

    function Person(name) {
        this.name = name;
    }

    console.dir(Person);
    // Output:
        - prototype: Object
            - this is special for the constructor function
            - constructor: ƒ Person(name)
            - __proto__: Object
        - __proto__: ƒ ()

    
    
    
    I can access what i have in this object.
    For Example:
    function Person(name) {
        this.name = name;
    }

    Person is a function. It have arguments object, call() function, bind() function, apply() function, etc.
    I can see these all in the __proto__ object. And I can use these all with the prototype object.

*/


function per(name) {
    this.name = name;
}

console.dir(per);

Person.prototype.agePrinter = function() {
    console.log(this.age);
}

console.log(Person.prototype);

const person1 = new Person('Max');

person1.agePrinter();


const person2 = new Person.prototype.constructor('Manu');

console.log(person2);


/* 
    If we change prototype objects in class level, it will effect all objects.
    If we change prototype objects in object level, it will effect only that object.

    Important Note:
    - Javascript is have a optimization. If we change prototype objects in class level, it will effect all objects.
    - But if we change prototype objects in object level, it will effect created all objects.
    - But if you create your objects in constructor function, it will effect only that object.

*/


person2.__proto__.toString = function() {
    return 'testing';
}

person2.__proto__.agePrinter = function() {
    console.log("I changed the agePrinter function");
}

console.log(person2.toString());
console.log(person1.toString());
console.log(Person.toString());
console.log(Person.prototype.toString());
console.dir(Object);

person2.agePrinter();
person1.agePrinter();


person2.__proto__.agePrinter = () => {
    console.log("I changed the agePrinter function again");
}

person2.agePrinter();
person1.agePrinter();

Person.prototype.toString = function() {
    return 'testing for person prototype';
}

console.log(person2.toString());
console.log(person1.toString());
console.log(Person.prototype.toString());
console.dir(Object);


/*
    Getting and Setting Prototypes:
    - We can get the prototype of an object using the __proto__ property
    - But if we change anything in __proto__ property, it will effect all objects
    - if we dont want to effect all objects, we can use getPrototypeOf() and setPrototypeOf() methods

*/

const personWithNormalObject = {
    name: 'Max',
    age: 30,
    newer: 'newer'
};


// if we change anything in __proto__ property, it will effect all global objects. Because our object is a global object.
console.dir(personWithNormalObject.__proto__);

personWithNormalObject.__proto__.agePrinter = function() {
    console.log("You are in agePrinter function");
}

// I affected all global objects
Object.agePrinter();

const proto = Object.getPrototypeOf(personWithNormalObject);

console.log(proto);

Object.setPrototypeOf(personWithNormalObject, {
    age: 31,
    greet() {
        console.log('Hello there!');
    }
});

console.dir(Object.getPrototypeOf(personWithNormalObject));

Object.setPrototypeOf(personWithNormalObject, {
    ...Object.getPrototypeOf(personWithNormalObject), // If i don't write this line, i will lose other properties.
    newTitle: 'newTitle'
});

console.dir(Object.getPrototypeOf(personWithNormalObject));

personWithNormalObject.greet();

// We didn't affect all global objects. Because of we will get error.
try {
    Object.greet();
} catch (error) {
    console.log(error);
}


// We can use Object.create() method to create new object with prototype object. It will have own prototype object.
const student = Object.create({
    printProgress() {
        console.log(this.progress);
    }
}, { // object descriptor
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});


console.dir(student);


Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
});

student.progress = 1;
console.dir(student);
console.log(student);