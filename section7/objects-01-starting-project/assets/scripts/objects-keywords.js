const users = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        console.log(this);
        this.name = 'Manu';
    },
    greet2() {
        this.name = 'Manu2';
    } // It is the same as greet: function() {}
};

console.log(users);
users.greet()
console.log(users);
users.greet2()
console.log(users);

/*
    this keyword:
    - It refers to the object that is executing the current function.
    - It is not static. It depends on how the function is called.
    - It is not assigned a value until an object invokes the function where it is defined.

*/

function fn() {
    console.log(this);
}

fn();

function fn2() {
    const innerFn = () => {
        console.log(this);
    }

    innerFn();
}

// It won't change the this keyword. Because it is in the global scope.
fn2();


// IMPORTANT: this keyword is not static. It depends on how the function is called.
console.log('IMPORTANT: this keyword is not static. It depends on how the function is called.');

const pers = {
    namer: 'Max',
    greet: function() {
        console.log("this ", this);
        this.namer = 'Manu';
    }
};

const { greet } = pers;

console.log(pers);
greet();
console.log(pers);

/*
    greet in global scope anymore.
    We called it in global scope. So, this keyword refers to the global object.

    So we can not change the namer property in pers object.

*/


// Solution 1: bind
console.log('Solution 1: bind');
const pers2 = {
    namer: 'Max',
    greet: function() {
        console.log("this ", this);
        this.namer = 'Manu';
    }
};

let { greet: greeter } = pers2;
greeter = greeter.bind(pers2);

console.log(pers2);
greeter();
console.log(pers2);

/* 
    bind takes the object that you want to bind to this keyword.

    So, we are saying call the greet function on pers2 object.

*/


// call and apply
console.log('call and apply');

const pers3 = {
    namer: 'Max',
    greet: function() {
        console.log("this ", this);
        this.namer = 'Manu';
    }
};

let { greet: greeter2 } = pers3;

console.log(pers3);
greeter2.call(pers3);
console.log(pers3);

/*
    call and apply are the same. The only difference is how we pass the arguments.

    call: comma separated values
        - (thisArg, arg1, arg2, ...)
    apply: array of values
        - (thisArg, [arg1, arg2, ...])

    So, we are saying call the greet function on pers3 object.
    Difference between bind and call, we have to assign bind function to a variable.
    And then we can call it.


    Event Listener
    - For Arrow Function: this keyword refers to the global object.
        - We give an reference to the function. So, we are not calling it.
        - So, this keyword refers to the global object.
    - For Normal Function: this keyword refers to the object that is executing the current function.
        - We are calling the function. So, this keyword refers to the object that is listening the event object.

    - If you want to access elements of the called object, you need to use normal function.

*/

const searchBtn2 = document.getElementById("search-btn");

const searchHandler2 = () => {
    console.log("this in searchHandler2", this);
}

function searchHandler3() {
    console.log("this in searchHandler3", this);
}

searchBtn2.addEventListener('click', searchHandler2);

searchBtn2.addEventListener('click', searchHandler3);

console.log("we are calling searchHandler3 from person object.");
const person44 = {
    name: 'Max',
    people: ['Max', 'Manu', 'Anna'],
    greet: searchHandler3,
    greet2: searchHandler2,
    greet3: function() {
        console.log("this in greet3", this);
    },
    greet4: () => {
        console.log("this in greet4", this);
    },
    greet5: function() {
        // arrow function does not change the scope of this keyword.
        this.people.forEach((person) => {
            console.log("this in greet5", this);
        });
    },
    greet6: function() {
        // normal function changes the scope of this keyword.
        this.people.forEach(function (p) {
            console.log("this in greet6", this);
        });
    },
};

const { greet: greet44 } = person44;
const { greet2: greet442 } = person44;
const { greet3: greet443 } = person44;
const { greet4: greet444 } = person44;


person44.greet();
greet44();

// You will be in global scope all the time.
person44.greet2();
greet442();

person44.greet3();
greet443();

person44.greet4();
greet444();

person44.greet5();

person44.greet6();
